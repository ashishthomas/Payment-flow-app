import { useState } from "react";
import { motion } from "framer-motion";

const CardPage = () => {
  const [cardStatus, setCardStatus] = useState("Active");

  const cardInfo = {
    cardholder: "Ashish Sunil Thomas",
    cardNumber: "**** **** **** 1234",
    expiry: "12/28",
    cvv: "***",
    currency: "Multi-currency",
  };

  const toggleCardStatus = () => {
    setCardStatus((prevStatus) =>
      prevStatus === "Active" ? "Frozen" : "Active"
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto mt-6 bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700/40"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">
          💳 Your FlowPay Card
        </h2>

        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
          <div className="text-slate-400">Cardholder</div>
          <div>{cardInfo.cardholder}</div>

          <div className="text-slate-400">Card Number</div>
          <div>{cardInfo.cardNumber}</div>

          <div className="text-slate-400">Expiry</div>
          <div>{cardInfo.expiry}</div>

          <div className="text-slate-400">CVV</div>
          <div>{cardInfo.cvv}</div>

          <div className="text-slate-400">Currency</div>
          <div>{cardInfo.currency}</div>

          <div className="text-slate-400">Status</div>
          <div
            className={`font-medium ${
              cardStatus === "Active" ? "text-emerald-400" : "text-red-400"
            }`}
          >
            {cardStatus}
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={toggleCardStatus}
          className={`mt-6 w-full ${
            cardStatus === "Active"
              ? "bg-red-500 hover:bg-red-400"
              : "bg-emerald-500 hover:bg-emerald-400"
          } text-white py-3 rounded-full font-medium transition-colors`}
        >
          {cardStatus === "Active" ? "Freeze Card" : "Unfreeze Card"}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default CardPage;
