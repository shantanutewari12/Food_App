import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import emailjs from 'emailjs-com';
import { GiConfirmed } from "react-icons/gi";


const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    sendOrderDetailsEmail();
  }, []);

  const sendOrderDetailsEmail = () => {
    const orderDetails = {
      to_email: 'shantanitiwari12@gmail.com',
      subject: 'Order Confirmation',
      message: 'Your order has been successfully placed.',
    };

    emailjs.send(
      'service_39w2e0g', 
      'template_wf7u1xl', 
      orderDetails,
      '0-2CVKIsJKAgdvs3K' 
    )
    .then((response) => {
      console.log('Email successfully sent!', response.status, response.text);
    })
    .catch((err) => {
      console.error('Failed to send email. Error: ', err);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#006400" />
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <GiConfirmed className="text-6xl font-semibold mb-4 text-center text-green-600 "/>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Order Successfull!
          </h2>
          <p className="animate-bounce">Your order has been successfully placed </p>
        </div>
      )}
    </div>
  );
};

export default Success;
