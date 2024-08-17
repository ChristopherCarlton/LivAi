"use client";
import React, { useState } from "react";

function Connect() {
  const [step, setStep] = useState(0);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-4 pt-20"
      style={{ backgroundImage: 'url("/images/shack15.jpg")' }}
    >
      <main className="bg-black bg-opacity-50 rounded-lg overflow-hidden w-full max-w-[600px] p-8 text-center relative">
        <div
          className={`transition-transform duration-700 ease-in-out ${
            step > 0 ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          {step === 1 && (
            <div>
              <label className="block text-sm font-bold mb-2 font-roboto text-[#F5DEB3]" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-2 mb-4 border border-[#4682B4] rounded-md bg-[#ffffffbb] text-[#2F4F4F]"
                type="text"
                id="name"
                name="name"
              />
              <div className="flex justify-between">
                <button
                  onClick={handlePrevStep}
                  className="bg-[#2F4F4F] text-[#F5DEB3] py-2 px-4 rounded-md font-roboto hover:scale-105 transition-transform duration-300"
                >
                  Back
                </button>
                <button
                  onClick={handleNextStep}
                  className="bg-[#4682B4] text-[#F5DEB3] py-2 px-4 rounded-md font-roboto hover:scale-105 transition-transform duration-300"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <label className="block text-sm font-bold mb-2 font-roboto text-[#F5DEB3]" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-2 mb-4 border border-[#4682B4] rounded-md bg-[#ffffffbb] text-[#2F4F4F]"
                type="email"
                id="email"
                name="email"
              />
              <div className="flex justify-between">
                <button
                  onClick={handlePrevStep}
                  className="bg-[#2F4F4F] text-[#F5DEB3] py-2 px-4 rounded-md font-roboto hover:scale-105 transition-transform duration-300"
                >
                  Back
                </button>
                <button
                  onClick={handleNextStep}
                  className="bg-[#4682B4] text-[#F5DEB3] py-2 px-4 rounded-md font-roboto hover:scale-105 transition-transform duration-300"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <label className="block text-sm font-bold mb-2 font-roboto text-[#F5DEB3]" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full p-2 mb-4 border border-[#4682B4] rounded-md bg-[#ffffffbb] text-[#2F4F4F]"
                id="message"
                name="message"
                rows={4}
              ></textarea>
              <div className="flex justify-between">
                <button
                  onClick={handlePrevStep}
                  className="bg-[#2F4F4F] text-[#F5DEB3] py-2 px-4 rounded-md font-roboto hover:scale-105 transition-transform duration-300"
                >
                  Back
                </button>
                <button
                  onClick={handleNextStep}
                  className="bg-[#4682B4] text-[#F5DEB3] py-2 px-4 rounded-md font-roboto hover:scale-105 transition-transform duration-300"
                >
                  Submit
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-[#F5DEB3] transition-opacity duration-700 ease-in-out">
              Thank you for connecting with us! We will get back to you shortly.
            </div>
          )}
        </div>

        {step === 0 && (
          <button
            onClick={handleNextStep}
            className="mt-8 bg-[#4682B4] text-[#F5DEB3] py-2 px-4 rounded-md font-roboto hover:scale-105 transition-transform duration-300"
          >
            Connect with Us
          </button>
        )}
      </main>
    </div>
  );
}

export default Connect;
