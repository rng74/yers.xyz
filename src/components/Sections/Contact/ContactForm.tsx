import emailjs from '@emailjs/browser';
import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      console.log('Service ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        const emailData = {
          from_name: data.name.toString(),
          from_email: data.email.toString(),
          message: data.message.toString(),
        };
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
        const response = await emailjs.send(
          serviceId,
          templateId,
          emailData,
          publicKey,
        );

        if (response.status === 200) {
          alert('Message sent successfully!');
          setData(defaultData); // Clear form after success
        } else {
          alert('Failed to send message. Please try again.');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        alert('An error occurred while sending the message.');
      }
      console.log('Data to send: ', data);
    },
    [data, defaultData],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
