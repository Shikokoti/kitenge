import React, { useState } from "react";
import "./style.css";

const Rsvp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    rsvp: "",
    events: "",
    notes: "",
  });

  const [error, setError] = useState({});

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let newError = {};

    if (!form.name) newError.name = "Please enter your name";
    if (!form.email) newError.email = "Please enter your email";
    if (!form.rsvp) newError.rsvp = "Select your number of rsvp";
    if (!form.events) newError.events = "Select your event list";
    if (!form.notes) newError.notes = "Please enter your note";

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    const eventText =
      form.events === "1"
        ? "All events"
        : form.events === "2"
        ? "Wedding ceremony"
        : "Reception party";

    const message = `
New RSVP 🎉

Name: ${form.name}
Email: ${form.email}
Guests: ${form.rsvp}
Event: ${eventText}
Message: ${form.notes}
    `;

    const phoneNumber = "254711638093"; // replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    // Reset form
    setForm({
      name: "",
      email: "",
      rsvp: "",
      events: "",
      notes: "",
    });
    setError({});
  };

  return (
    <div id="rsvp" className="rsvp-area go-rsvp-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <div className="rsvp-wrap">
              <div className="col-12">
                <div className="section-title section-title4 text-center">
                  <h2>Be Our Guest</h2>
                  <p>Please reserve before March 5th, 2026.</p>
                </div>
              </div>

              <form onSubmit={submitHandler}>
                <div className="contact-form form-style">
                  <div className="row">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={changeHandler}
                        placeholder="Your Name*"
                      />
                      <p>{error.name}</p>
                    </div>

                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        name="email"
                        value={form.email}
                        onChange={changeHandler}
                        placeholder="Your Email*"
                      />
                      <p>{error.email}</p>
                    </div>

                    <div className="col col-sm-6 col-12">
                      <select
                        className="form-control"
                        name="rsvp"
                        value={form.rsvp}
                        onChange={changeHandler}
                      >
                        <option disabled value="">
                          Number Of rsvp*
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                      <p>{error.rsvp}</p>
                    </div>

                    <div className="col col-sm-6 col-12">
                      <select
                        className="form-control"
                        name="events"
                        value={form.events}
                        onChange={changeHandler}
                      >
                        <option disabled value="">
                          I Am Attending*
                        </option>
                        <option value="1">All events</option>
                        <option value="2">Wedding ceremony</option>
                        <option value="3">Reception party</option>
                      </select>
                      <p>{error.events}</p>
                    </div>

                    <div className="col-12 col-sm-12">
                      <textarea
                        className="contact-textarea"
                        name="notes"
                        value={form.notes}
                        onChange={changeHandler}
                        placeholder="Message"
                      />
                      <p>{error.notes}</p>
                    </div>
                  </div>

                  <div className="col-12 text-center">
                    <button type="submit" className="submit">
                      Send Invitation
                    </button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
