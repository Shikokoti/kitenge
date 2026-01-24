import React, { useState } from "react";
import "./style.css";

const Rsvp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    event: "",
    notes: "",
  });

  const [error, setError] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    let newError = {};

    if (!form.name) newError.name = "Enter your name";
    if (!form.email) newError.email = "Enter your email";
    if (!form.event) newError.event = "Select an event";
    if (!form.notes) newError.notes = "Enter a message";

    if (Object.keys(newError).length) {
      setError(newError);
      return;
    }

    const message = `
New RSVP 🤍

Name: ${form.name}
Email: ${form.email}
Event Attending: ${form.event}

Message:
${form.notes}
`;

    const phoneNumber = ["254711638093"]; // replace with your WhatsApp number
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setForm({
      name: "",
      email: "",
      event: "",
      notes: "",
    });
    setError({});
  };

  return (
    <section id="rsvp" className="rsvp-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <div className="rsvp-wrap">
              <div className="section-title text-center">
                <h2>Be Our Guest</h2>
                <p>Please reserve before March 5th, 2026.</p>
              </div>

              <form onSubmit={submitHandler}>
                <div className="contact-form">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                  <p>{error.name}</p>

                  <input
                    type="email"
                    placeholder="Your Email*"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                  <p>{error.email}</p>

                  <select
                    className="form-control"
                    value={form.event}
                    onChange={(e) =>
                      setForm({ ...form, event: e.target.value })
                    }
                  >
                    <option value="">I Am Attending*</option>
                    <option value="All Events">All Events</option>
                    <option value="Wedding Ceremony">
                      Wedding Ceremony
                    </option>
                    <option value="Reception Party">
                      Reception Party
                    </option>
                  </select>
                  <p>{error.event}</p>

                  <textarea
                    className="contact-textarea"
                    placeholder="Message*"
                    value={form.notes}
                    onChange={(e) =>
                      setForm({ ...form, notes: e.target.value })
                    }
                  />
                  <p>{error.notes}</p>

                  <div className="text-center">
                    <button id="submit" type="submit">
                      Send Invitation
                    </button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rsvp;
