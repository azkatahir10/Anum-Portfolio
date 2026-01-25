import React, { useState } from 'react';
import { theme } from '../theme';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: ''
  });

  // Your actual EmailJS credentials
  const EMAILJS_PUBLIC_KEY = 'fOhwnrRVMeZYk9TIZ'; 
  const EMAILJS_SERVICE_ID = 'service_2op0ebj'; 
  const EMAILJS_TEMPLATE_ID = 'template_mku47ai';

  // Check if credentials are properly set
  const areCredentialsConfigured = () => {
    return EMAILJS_PUBLIC_KEY && 
           EMAILJS_SERVICE_ID && 
           EMAILJS_TEMPLATE_ID &&
           EMAILJS_PUBLIC_KEY.length > 10 && // Public key should be longer than placeholder
           EMAILJS_SERVICE_ID.length > 5 &&  // Service ID should be longer than placeholder
           EMAILJS_TEMPLATE_ID.length > 5;   // Template ID should be longer than placeholder
  };

  // Initialize EmailJS
  React.useEffect(() => {
    if (areCredentialsConfigured()) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if EmailJS credentials are properly configured
    if (!areCredentialsConfigured()) {
      setSubmitStatus({
        success: false,
        message: 'Contact form is not configured yet. Please contact me via WhatsApp.'
      });
      return;
    }

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        success: false,
        message: 'Please fill in all required fields.'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        success: false,
        message: 'Please enter a valid email address.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || `Message from ${formData.name} - Portfolio Contact`,
        message: formData.message,
        to_name: 'Anum Tahir',
        reply_to: formData.email,
        date: new Date().toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        time: new Date().toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: true 
        })
      };

      console.log('Sending email with params:', templateParams);
      console.log('Using credentials:', {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID
      });

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('EmailJS response:', response);

      if (response.status === 200) {
        setSubmitStatus({
          success: true,
          message: '🎉 Message sent successfully! I\'ll get back to you within 24 hours.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ success: false, message: '' });
        }, 5000);
      } else {
        throw new Error(`Failed to send message. Status: ${response.status}`);
      }
    } catch (error) {
      console.error('EmailJS error details:', error);
      
      // User-friendly error messages
      let errorMessage = 'Failed to send message. ';
      
      if (error.message.includes('Invalid user ID') || error.message.includes('public key')) {
        errorMessage = 'Email service configuration error. Please check your EmailJS credentials.';
      } else if (error.message.includes('Failed to fetch') || error.message.includes('network')) {
        errorMessage = 'Network error. Please check your internet connection and try again.';
      } else if (error.message.includes('service_2op0ebj')) {
        errorMessage = 'Email service not found. Please check your EmailJS service ID.';
      } else if (error.message.includes('template_mku47ai')) {
        errorMessage = 'Email template not found. Please check your EmailJS template ID.';
      } else {
        errorMessage = `Please try again later or contact me via WhatsApp. Error: ${error.message}`;
      }
      
      setSubmitStatus({
        success: false,
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status message when user starts typing
    if (submitStatus.message) {
      setSubmitStatus({ success: false, message: '' });
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header animate-in">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Interested in collaborating or discussing AI/ML projects?
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info slide-left">
            <div className="info-card">
              <div className="info-icon">
                <span>💼</span>
              </div>
              <h3>Availability</h3>
              <p>Open to freelance projects and full-time opportunities</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <span>📍</span>
              </div>
              <h3>Location</h3>
              <p>Lahore, Pakistan</p>
              <p className="info-note">Available for remote work worldwide</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <span>⏱️</span>
              </div>
              <h3>Response Time</h3>
              <p>Typically within 24 hours</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form slide-right">
            {/* Status Message */}
            {submitStatus.message && (
              <div className={`status-message ${submitStatus.success ? 'success' : 'error'}`}>
                <div className="status-icon">
                  {submitStatus.success ? '✅' : '⚠️'}
                </div>
                <div className="status-text">{submitStatus.message}</div>
              </div>
            )}

            <div className="form-group">
              <label className="form-label">
                Your Name *
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="form-input"
                  disabled={isSubmitting}
                />
              </label>
              <div className="input-underline"></div>
            </div>
            
            <div className="form-group">
              <label className="form-label">
                Your Email *
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="form-input"
                  disabled={isSubmitting}
                />
              </label>
              <div className="input-underline"></div>
            </div>
            
            <div className="form-group">
              <label className="form-label">
                Subject
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="form-input"
                  disabled={isSubmitting}
                />
              </label>
              <div className="input-underline"></div>
            </div>
            
            <div className="form-group">
              <label className="form-label">
                Your Message *
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello Anum, I'd like to discuss a potential project..."
                  rows="5"
                  required
                  className="form-textarea"
                  disabled={isSubmitting}
                ></textarea>
              </label>
              <div className="textarea-underline"></div>
            </div>
            
            <button 
              type="submit" 
              className={`btn btn-primary form-submit ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending Message...
                </>
              ) : (
                <>
                  <span className="send-text">Send Message</span>
                  <span className="send-icon">✈️</span>
                </>
              )}
            </button>
            
            <div className="form-footer">
              <p className="form-note">
                <span className="required">*</span> Required fields
              </p>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .info-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(108, 99, 255, 0.15);
        }

        .info-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: ${theme.colors.gradient};
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .info-card:hover::before {
          transform: scaleX(1);
        }

        .info-icon {
          font-size: 2.5rem;
          margin-bottom: 20px;
          opacity: 0.8;
        }

        .info-card h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: ${theme.colors.dark};
        }

        .info-card p {
          color: ${theme.colors.gray};
          margin-bottom: 5px;
        }

        .info-note {
          font-size: 0.9rem;
          color: ${theme.colors.primary};
          font-weight: 500;
        }

        .contact-form {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          position: relative;
        }

        /* Status Message */
        .status-message {
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 25px;
          display: flex;
          align-items: flex-start;
          gap: 15px;
          animation: slideIn 0.3s ease;
          border: 2px solid;
        }

        .status-message.success {
          background: rgba(46, 204, 113, 0.08);
          border-color: rgba(46, 204, 113, 0.3);
          color: #27ae60;
        }

        .status-message.error {
          background: rgba(231, 76, 60, 0.08);
          border-color: rgba(231, 76, 60, 0.3);
          color: #c0392b;
        }

        .status-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .status-text {
          flex-grow: 1;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .form-group {
          margin-bottom: 30px;
        }

        .form-label {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: ${theme.colors.dark};
          margin-bottom: 8px;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 15px 0;
          border: none;
          background: none;
          border-bottom: 2px solid #e2e8f0;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: ${theme.colors.dark};
          transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-bottom-color: ${theme.colors.primary};
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #a0aec0;
        }

        .form-input:disabled,
        .form-textarea:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          background: #f8f9fa;
        }

        .input-underline,
        .textarea-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: ${theme.colors.gradient};
          transition: width 0.3s ease;
        }

        .form-input:focus ~ .input-underline,
        .form-textarea:focus ~ .textarea-underline {
          width: 100%;
        }

        .form-textarea {
          resize: vertical;
          min-height: 140px;
          line-height: 1.6;
        }

        .form-submit {
          width: 100%;
          margin-top: 30px;
          padding: 18px 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          position: relative;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .form-submit.submitting {
          opacity: 0.8;
          cursor: not-allowed;
        }

        .spinner {
          width: 22px;
          height: 22px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .send-text {
          transition: transform 0.3s ease;
        }

        .send-icon {
          transition: transform 0.3s ease;
        }

        .form-submit:hover:not(.submitting) .send-text {
          transform: translateX(5px);
        }

        .form-submit:hover:not(.submitting) .send-icon {
          transform: translateX(10px);
        }

        .form-footer {
          margin-top: 20px;
          text-align: center;
        }

        .form-note {
          color: ${theme.colors.gray};
          font-size: 0.85rem;
          margin-bottom: 10px;
        }

        .required {
          color: #e74c3c;
          font-weight: bold;
        }

        @media (max-width: 1024px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .contact-form {
            padding: 30px 20px;
          }

          .status-message {
            flex-direction: column;
            text-align: center;
            gap: 10px;
          }

          .status-icon {
            align-self: center;
          }
        }

        @media (max-width: 480px) {
          .form-submit {
            padding: 16px 20px;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;