// Privacy policy for mondesa.com.br. Facts here must match the code: the
// contact form (Contact.tsx → support-email-worker: forwarded to our inbox
// by Cloudflare Email, an automatic reply sent by Resend), Turnstile on the
// form, the language choice and cookie choice in localStorage, and Google
// Analytics only after consent (src/components/Consent.astro).
interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

export const privacyTranslations: Translations = {
  'privacy.title': { pt: 'Política de privacidade', en: 'Privacy policy' },
  'privacy.updated': { pt: 'Atualizada em 12 de novembro de 2026', en: 'Updated November 12, 2026' },
  'privacy.lead': {
    pt: 'O que este site coleta, por quê, por quanto tempo, e seus direitos pela LGPD e pelo GDPR.',
    en: 'What this site collects, why, for how long, and your rights under Brazil’s LGPD and the EU’s GDPR.',
  },
  'privacy.who.title': { pt: 'Quem é o responsável', en: 'Who is responsible' },
  'privacy.who.text': {
    pt: 'A MonDesa é a controladora dos dados tratados neste site. Para qualquer assunto sobre seus dados, escreva para contato@mondesa.com.br.',
    en: 'MonDesa is the controller of the data processed on this site. For anything about your data, write to contact@mondesa.com.br.',
  },
  'privacy.form.title': { pt: 'Formulário de contato', en: 'Contact form' },
  'privacy.form.text': {
    pt: 'Seu nome, e-mail e mensagem. Usamos só para responder (procedimentos a seu pedido: LGPD art. 7º, V; GDPR art. 6(1)(b)). A mensagem é encaminhada à nossa caixa de e-mail pela Cloudflare, e você recebe uma confirmação automática enviada pela Resend. Guardamos enquanto conversamos e por até 2 anos depois, a menos que você peça para apagar antes. O formulário usa o Cloudflare Turnstile para distinguir pessoas de robôs (legítimo interesse em evitar spam: LGPD art. 7º, IX; GDPR art. 6(1)(f)).',
    en: 'Your name, email and message. We use them only to answer you (steps at your request: GDPR Art. 6(1)(b); LGPD Art. 7, V). The message is forwarded to our inbox by Cloudflare, and you get an automatic confirmation sent by Resend. We keep it while we talk and for up to 2 years after, unless you ask us to delete it sooner. The form uses Cloudflare Turnstile to tell people from bots (legitimate interest in stopping spam: GDPR Art. 6(1)(f); LGPD Art. 7, IX).',
  },
  'privacy.analytics.title': { pt: 'Análise de acesso (opcional)', en: 'Analytics (optional)' },
  'privacy.analytics.text': {
    pt: 'Só se você aceitar no aviso de cookies: o Google Analytics registra quais páginas você visita, de onde aproximadamente (país ou cidade, a partir de um endereço de rede encurtado), o tipo de aparelho e navegador e como você chegou, com cookies próprios (_ga, _ga_*) guardados por até 14 meses (consentimento: LGPD art. 7º, I; GDPR art. 6(1)(a)). Os sinais do Google e a personalização de anúncios ficam desligados. Nada do Google carrega antes de você aceitar, e “Configurar cookies”, no rodapé, muda sua escolha e apaga esses cookies.',
    en: 'Only if you accept in the cookie banner: Google Analytics records which pages you visit, roughly where from (country or city, from a shortened network address), your device and browser type and how you arrived, using first-party cookies (_ga, _ga_*) kept for up to 14 months (consent: GDPR Art. 6(1)(a); LGPD Art. 7, I). Google signals and ad personalisation are off. Nothing from Google loads until you accept, and “Cookie settings” in the footer changes your choice and deletes these cookies.',
  },
  'privacy.storage.title': { pt: 'No seu navegador', en: 'In your browser' },
  'privacy.storage.text': {
    pt: 'Guardamos a escolha de idioma e a sua escolha sobre cookies no armazenamento local. Não usamos cookies de publicidade.',
    en: 'We store your language choice and your cookie choice in local storage. We use no advertising cookies.',
  },
  'privacy.processors.title': { pt: 'Quem mais trata seus dados', en: 'Who else processes it' },
  'privacy.processors.text': {
    pt: 'A Cloudflare hospeda o site, faz a verificação humana e encaminha o formulário; a Resend envia a confirmação; o Google opera o Google Analytics, se você aceitar. Esses prestadores atuam em vários países, incluindo os Estados Unidos, com as cláusulas contratuais padrão da Comissão Europeia ou garantia equivalente. Não vendemos seus dados nem os compartilhamos para publicidade.',
    en: 'Cloudflare hosts the site, runs the human check and forwards the form; Resend sends the confirmation; Google runs Google Analytics, if you accept. These providers work in several countries, including the United States, under the European Commission’s standard contractual clauses or an equivalent safeguard. We do not sell your data or share it for advertising.',
  },
  'privacy.rights.title': { pt: 'Seus direitos', en: 'Your rights' },
  'privacy.rights.text': {
    pt: 'Você pode confirmar se tratamos seus dados, acessá-los, corrigi-los, apagá-los, receber uma cópia, se opor ao uso e revogar o consentimento a qualquer momento. Escreva para contato@mondesa.com.br; respondemos em até 15 dias. Você também pode reclamar à ANPD (gov.br/anpd) ou, na Europa, à autoridade de proteção de dados do seu país.',
    en: 'You may ask whether we process your data, see it, correct it, delete it, get a copy, object to its use and withdraw consent at any time. Write to contact@mondesa.com.br; we answer within 15 days. You may also complain to Brazil’s ANPD (gov.br/anpd) or, in Europe, to your country’s data protection authority.',
  },
  'privacy.cookies': { pt: 'Configurar cookies', en: 'Cookie settings' },
  'footer.privacy': { pt: 'Privacidade', en: 'Privacy' },
};
