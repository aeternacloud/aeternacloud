import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Loader2, Check } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { supabase } from '../../../supabaseClient';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('handleSubmit called');
    setIsLoading(true);
    setIsSuccess(false); // Ensure success state is reset on new submission

    try {
      console.log('Attempting to send email via emailjs');
      // Send email to client
      if (import.meta.env.VITE_EMAILJS_SERVICE_ID) {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            company: formData.company || 'Not provided',
            phone: formData.phone || 'Not provided',
            service: formData.service || 'Not specified',
            message: formData.message,
            to_name: formData.name,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        console.log('Email to client sent successfully');

        // Send notification to admin if admin template is configured
        if (import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID) {
          await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID,
            {
              from_name: formData.name,
              from_email: formData.email,
              company: formData.company || 'Not provided',
              phone: formData.phone || 'Not provided',
              service: formData.service || 'Not specified',
              message: formData.message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          );
          console.log('Email to admin sent successfully');
        }
      }

      console.log('Attempting to save to Supabase');
      // Save to Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
          },
        ]);

      if (error) {
        console.error('Error saving to database:', error);
        toast.error('Message sent, but there was an issue saving your data.');
      } else {
        console.log('Supabase insert successful. Setting isSuccess to true.');
        setIsSuccess(true);
        toast.success('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' }); // Clear form data on success
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again or contact us directly.');
    } finally {
      console.log('handleSubmit finally block executed. Setting isLoading to false.');
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="mb-6">
              <span className="block text-gray-900">Get In Touch</span>
              <span className="block bg-gradient-to-r from-[#0052CC] via-[#00C2FF] to-[#0052CC] bg-clip-text text-transparent">
                Let's Start Something Great
              </span>
            </h1>
            <p className="text-gray-600">
              Ready to transform your business? Contact us today and let's discuss how we can help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form or Success Message */}
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-green-50 border border-green-200 text-green-800 px-6 py-10 rounded-xl flex flex-col items-center justify-center text-center shadow-lg"
              >
                <Check className="w-16 h-16 text-green-500 mb-6" />
                <h2 className="text-green-800 mb-4">Message Sent Successfully!</h2>
                <p className="text-green-700 mb-6">
                  Thank you for reaching out. We have received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)} // Allow user to send another message
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0052CC] transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0052CC] transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0052CC] transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0052CC] transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Service Interested In</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0052CC] transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="software-development">Software Development</option>
                      <option value="web-development">Web Development</option>
                      <option value="app-development">App Development</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="seo-services">SEO Services</option>
                      <option value="digital-marketing">Digital Marketing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0052CC] transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading} // Disable only when loading, not on success anymore
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#0052CC] to-[#00C2FF] text-white rounded-xl hover:shadow-xl hover:shadow-[#0052CC]/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            )}

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0052CC] to-[#00C2FF] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Email</div>
                    <a href="mailto:aeternacloud@gmail.com" className="text-[#0052CC] hover:underline">
                      aeternacloud@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0052CC] to-[#00C2FF] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Phone</div>
                    <a href="tel:+15551234567" className="text-[#0052CC] hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0052CC] to-[#00C2FF] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Office</div>
                    <p className="text-gray-600">
                      123 Tech Street<br />
                      San Francisco, CA 94107<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#0052CC] to-[#00C2FF] rounded-2xl text-white">
                <h3 className="mb-4">Business Hours</h3>
                <div className="space-y-2 text-white/90">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
