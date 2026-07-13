import { useState } from 'react';
import { UseTranslation } from '../contexts/LanguageContext';
import { CONTACT_ENDPOINT } from '../constants/api';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface SubmitStatus {
  success: boolean;
  message: string;
}

// Hidden honeypot field name (bots fill it; humans never see it).
export const HONEYPOT_FIELD = 'company_website';

export const useFormSubmit = () => {
  const { t } = UseTranslation();
  const [formValues, setFormValues] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [honeypot, setHoneypot] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);
  const [resetSignal, setResetSignal] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === HONEYPOT_FIELD) {
      setHoneypot(value);
      return;
    }
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formValues.name,
          email: formValues.email,
          subject: 'Website contact',
          message: formValues.message,
          turnstileToken,
          honeypot,
        }),
      });

      const result = (await response.json()) as { success?: boolean; error?: string };

      if (response.ok && result.success) {
        setSubmitStatus({ success: true, message: t('contact.form.success') });
        setFormValues({ name: '', email: '', message: '' });
        setTurnstileToken('');
        setResetSignal(s => s + 1);
      } else {
        throw new Error(result.error || 'Error sending message');
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: t('contact.form.error') });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearStatus = () => setSubmitStatus(null);

  return {
    formValues,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
    clearStatus,
    turnstileToken,
    setTurnstileToken,
    resetSignal
  };
};
