import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    emailjs
      .sendForm(
        "service_i5l7pgt",      // ✅ Your EmailJS service ID
        "template_8o2kuta",     // ✅ Your EmailJS template ID
        form.current,
        "gZhDG0a_QdldHpue9"     // ✅ Your EmailJS public key
      )
      .then(
        () => {
          toast.success("Your message has been sent!");
          reset(); // Clear form after success
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Something went wrong.");
        }
      );
  };

  return (
    <section
      name="Contact"
      className="w-full bg-gradient-to-br from-slate-100 to-slate-300 py-16 px-4"
    >
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Me</h2>
        <p className="text-gray-600 text-lg mb-10">
          Feel free to reach out by filling the form below.
        </p>

        <div className="flex justify-center">
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-lg bg-white p-8 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Send Your Message
            </h3>

            {/* Full Name */}
            <div className="mb-4 text-left">
              <label className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                {...register("name", { required: true })}
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  This field is required
                </p>
              )}
            </div>

            {/* Email Address */}
            <div className="mb-4 text-left">
              <label className="block text-gray-700 font-medium mb-1">
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  This field is required
                </p>
              )}
            </div>

            {/* Message */}
            <div className="mb-4 text-left">
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                name="message"
                placeholder="Write your message here"
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  This field is required
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
