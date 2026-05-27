"use client"
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID  = "service_3zs2ryg";
const TEMPLATE_ID = "template_842fdws";
const PUBLIC_KEY  = "A7XF6wuzZUQHzyxyx";

function useInView(ref, threshold = 0.1) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

// Floating-label input field
function Field({ label, name, type = "text", required = false, as = "input", value, onChange, error }) {
  const [focused, setFocused] = useState(false);
  const filled = value && value.length > 0;
  const active = focused || filled;

  const sharedStyle = {
    width: "100%",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: `1px solid ${error ? "#e85c1a" : focused ? "#e85c1a" : "rgba(255,255,255,0.2)"}`,
    color: "#ffffff",
    fontFamily: "'Barlow', sans-serif",
    fontWeight: 300,
    fontSize: "1rem",
    padding: as === "textarea" ? "1.8rem 0 0.75rem" : "1.5rem 0 0.6rem",
    outline: "none",
    resize: "none",
    background: "none",
    transition: "border-color 0.25s ease",
    caretColor: "#e85c1a",
  };

  return (
    <div style={{ position: "relative", marginBottom: "2.4rem" }}>
      {/* Floating label */}
      <label
        style={{
          position: "absolute",
          left: 0,
          top: active ? (as === "textarea" ? "0.1rem" : "0.05rem") : (as === "textarea" ? "1.1rem" : "1rem"),
          fontFamily: "'Barlow', sans-serif",
          fontWeight: active ? 600 : 300,
          fontSize: active ? "0.6rem" : "0.95rem",
          letterSpacing: active ? "0.18em" : "0.02em",
          textTransform: active ? "uppercase" : "none",
          color: error ? "#e85c1a" : active ? "#e85c1a" : "rgba(255,255,255,0.45)",
          pointerEvents: "none",
          transition: "all 0.22s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {label}{required && <span style={{ color: "#e85c1a" }}> *</span>}
      </label>

      {as === "textarea" ? (
        <textarea
          name={name}
          rows={5}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{ ...sharedStyle, paddingTop: "1.8rem", minHeight: "120px" }}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={sharedStyle}
        />
      )}

      {/* Error message */}
      {error && (
        <span style={{
          position: "absolute",
          bottom: "-1.3rem",
          left: 0,
          fontFamily: "'Barlow', sans-serif",
          fontSize: "0.65rem",
          letterSpacing: "0.1em",
          color: "#e85c1a",
        }}>
          {error}
        </span>
      )}
    </div>
  );
}

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef    = useRef(null);
  const inView     = useInView(sectionRef, 0.1);

  const [form, setForm] = useState({
    from_name:  "",
    phone:      "",
    from_email: "",
    message:    "",
  });
  const [errors,  setErrors]  = useState({});
  const [status,  setStatus]  = useState("idle"); // idle | sending | success | error
  const [btnOver, setBtnOver] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.from_name.trim())  errs.from_name = "Name is required";
    if (!form.phone.trim())      errs.phone     = "Phone number is required";
    if (form.from_email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.from_email))
      errs.from_email = "Enter a valid email address";
    if (!form.message.trim())    errs.message   = "Message is required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus("sending");
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus("success");
      setForm({ from_name: "", phone: "", from_email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300&display=swap');

        ::selection { background: rgba(232,92,26,0.35); }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: start;
        }

        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
        }

        @media (max-width: 540px) {
          .contact-section {
            padding: 5rem 1rem 5rem !important;
          }
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px #0a0a0a inset !important;
          -webkit-text-fill-color: #ffffff !important;
          caret-color: #e85c1a;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="contact-section"
        style={{
          backgroundColor: "#0a0a0a",
          minHeight: "100vh",
          padding: "7rem 7rem 7rem",
          fontFamily: "'Barlow', sans-serif",
        }}
      >
        <div className="contact-grid">

          {/* ── LEFT: Info panel ── */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.75s ease 0s, transform 0.75s cubic-bezier(0.16,1,0.3,1) 0s",
            }}
          >
            {/* Eyebrow */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              marginBottom: "1.4rem",
            }}>
              <span style={{
                width: 8, height: 8,
                borderRadius: "50%",
                backgroundColor: "#e85c1a",
                display: "inline-block",
                animation: "pulse-dot 2s ease-in-out infinite",
              }} />
              <span style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 600,
                fontSize: "0.62rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#e85c1a",
              }}>
                Available for projects
              </span>
            </div>

            {/* Heading */}
            <h1 style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              color: "#ffffff",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              marginBottom: "1.4rem",
            }}>
              Let&apos;s build<br />
              something<br />
              <span style={{ color: "#e85c1a", fontStyle: "italic", fontWeight: 300 }}>
                great together.
              </span>
            </h1>

            {/* Subtext */}
            <p style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(0.88rem, 1.2vw, 1rem)",
              color: "#a0a0a0",
              lineHeight: 1.75,
              marginBottom: "3rem",
              maxWidth: "36ch",
            }}>
              Have a project, idea, or just want to say hello?
              Fill in the form and I&apos;ll get back to you within 24 hours.
            </p>

            {/* Contact details */}
            {[
              { label: "EMAIL", value: "abhishekbamane23@gmail.com" },
              { label: "STATUS", value: "Freelance — Open to work" },
            ].map(({ label, value }) => (
              <div key={label} style={{ marginBottom: "1.6rem" }}>
                <div style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.58rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#555",
                  marginBottom: "0.3rem",
                }}>
                  {label}
                </div>
                <div style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.95rem",
                  color: "#d4d4d4",
                }}>
                  {value}
                </div>
              </div>
            ))}

            {/* Decorative orange line */}
            <div style={{
              marginTop: "3rem",
              width: "60px",
              height: "2px",
              backgroundColor: "#e85c1a",
            }} />
          </div>

          {/* ── RIGHT: Form ── */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.75s ease 0.18s, transform 0.75s cubic-bezier(0.16,1,0.3,1) 0.18s",
            }}
          >
            {status === "success" ? (
              /* ── Success state ── */
              <div style={{
                border: "1px solid rgba(232,92,26,0.4)",
                padding: "3rem 2.5rem",
                textAlign: "center",
              }}>
                <div style={{
                  width: 52, height: 52,
                  border: "2px solid #e85c1a",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e85c1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.4rem",
                  color: "#ffffff",
                  marginBottom: "0.75rem",
                }}>
                  Message sent!
                </h3>
                <p style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.95rem",
                  color: "#a0a0a0",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                }}>
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#e85c1a",
                    background: "transparent",
                    border: "1px solid #e85c1a",
                    padding: "0.75rem 1.8rem",
                    cursor: "pointer",
                  }}
                >
                  Send another
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <form ref={formRef} onSubmit={handleSubmit} noValidate>

                <Field
                  label="Name"
                  name="from_name"
                  required
                  value={form.from_name}
                  onChange={handleChange}
                  error={errors.from_name}
                />

                <Field
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  error={errors.phone}
                />

                <Field
                  label="Email (optional)"
                  name="from_email"
                  type="email"
                  value={form.from_email}
                  onChange={handleChange}
                  error={errors.from_email}
                />

                <Field
                  label="Message"
                  name="message"
                  as="textarea"
                  required
                  value={form.message}
                  onChange={handleChange}
                  error={errors.message}
                />

                {/* Error banner */}
                {status === "error" && (
                  <div style={{
                    border: "1px solid rgba(232,92,26,0.4)",
                    padding: "0.9rem 1.2rem",
                    marginBottom: "1.8rem",
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.82rem",
                    color: "#e85c1a",
                    letterSpacing: "0.02em",
                  }}>
                    Something went wrong. Please try again or email directly.
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  onMouseEnter={() => setBtnOver(true)}
                  onMouseLeave={() => setBtnOver(false)}
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.72rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: btnOver && status !== "sending" ? "#0a0a0a" : "#0a0a0a",
                    backgroundColor: status === "sending"
                      ? "rgba(232,92,26,0.5)"
                      : btnOver
                        ? "#c0390a"
                        : "#e85c1a",
                    border: "none",
                    padding: "1.05rem 2.8rem",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    transition: "background-color 0.25s ease, transform 0.2s ease",
                    transform: btnOver && status !== "sending" ? "scale(0.97)" : "scale(1)",
                  }}
                >
                  {status === "sending" ? (
                    <>
                      <span style={{
                        width: 14, height: 14,
                        border: "2px solid rgba(0,0,0,0.4)",
                        borderTopColor: "#0a0a0a",
                        borderRadius: "50%",
                        display: "inline-block",
                        animation: "spin 0.7s linear infinite",
                      }} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span style={{ fontSize: "0.85rem" }}>→</span>
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(0.65); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}