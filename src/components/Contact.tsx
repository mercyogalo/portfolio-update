import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
        ]);

      if (error) throw error;

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or email me directly.');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-burgundy-800 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-burgundy-800 dark:bg-white mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-burgundy-800 dark:text-white mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-burgundy-800 dark:bg-white p-3 rounded-lg">
                  <Mail className="text-white dark:text-black" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-burgundy-800 dark:text-white mb-1">Email</h4>
                  <a
                    href="mailto:ogalomercy8@gmail.com"
                    className="text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    ogalomercy8@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-burgundy-800 dark:bg-white p-3 rounded-lg">
                  <Phone className="text-white dark:text-black" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-burgundy-800 dark:text-white mb-1">Phone</h4>
                  <a
                    href="tel:+254743264872"
                    className="text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    +254 743 264 872
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-burgundy-800 dark:bg-white p-3 rounded-lg">
                  <MapPin className="text-white dark:text-black" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-burgundy-800 dark:text-white mb-1">Location</h4>
                  <p className="text-slate-600 dark:text-slate-400">Kenya</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border-2 border-slate-200 dark:border-slate-700">
              <h4 className="font-bold text-burgundy-800 dark:text-white mb-3">Available For</h4>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-burgundy-800 dark:bg-white rounded-full"></span>
                  Full-time opportunities
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-burgundy-800 dark:bg-white rounded-full"></span>
                  Freelance projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-burgundy-800 dark:bg-white rounded-full"></span>
                  Collaboration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-burgundy-800 dark:bg-white rounded-full"></span>
                  Consulting
                </li>
              </ul>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-burgundy-800 dark:text-white font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-700 rounded-lg focus:border-burgundy-800 dark:focus:border-white focus:outline-none transition-colors bg-white dark:bg-slate-800 text-black dark:text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-burgundy-800 dark:text-white font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-700 rounded-lg focus:border-burgundy-800 dark:focus:border-white focus:outline-none transition-colors bg-white dark:bg-slate-800 text-black dark:text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-burgundy-800 dark:text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-700 rounded-lg focus:border-burgundy-800 dark:focus:border-white focus:outline-none transition-colors bg-white dark:bg-slate-800 text-black dark:text-white"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-burgundy-800 dark:text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-700 rounded-lg focus:border-burgundy-800 dark:focus:border-white focus:outline-none transition-colors resize-none bg-white dark:bg-slate-800 text-black dark:text-white"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-700 bg-green-50 p-4 rounded-lg border border-green-200">
                  <CheckCircle size={20} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-700 bg-red-50 p-4 rounded-lg border border-red-200">
                  <AlertCircle size={20} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-burgundy-800 dark:bg-white text-white dark:text-black rounded-lg hover:bg-burgundy-900 dark:hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {status === 'submitting' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
