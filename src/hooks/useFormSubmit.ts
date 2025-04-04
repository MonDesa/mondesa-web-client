import { useState } from 'react';
import { UseTranslation } from '../contexts/LanguageContext';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface SubmitStatus {
  success: boolean;
  message: string;
}

export const useFormSubmit = () => {
  const { t } = UseTranslation();
  const [formValues, setFormValues] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/contact@mondesa.org', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formValues.name,
          email: formValues.email,
          message: formValues.message,
          _subject: `[MonDesa Website] Message from ${formValues.name}`,
          source: 'mondesa-website',
          website_url: window.location.origin,
          _captcha: 'true',
          _template: 'box'
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: t('contact.form.success')
        });
        setFormValues({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Error sending message');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: t('contact.form.error')
      });
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
    clearStatus
  };
};
