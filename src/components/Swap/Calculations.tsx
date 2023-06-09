import { motion } from "framer-motion";

export const Calculations = () => {
  return (
    <motion.div
      // grow height
      initial={{ opacity: 0, scaleY: 0, height: "0" }}
      animate={{ opacity: 1 , scaleY: 1, height: "auto"}}
      exit={{ opacity: 0, height: 0, scaleY: 0 }}
      transition={{ duration: 0.2 }}
      className="rounded-3xl px-6 py-7 bg-white/10 w-full text-[20px] leading-[35px] overflow-y-hidden"
    >
      <div className="flex justify-between">
        <div>Network Fee</div>
        <div className="text-right">
          <strong>FREE</strong>
        </div>
      </div>
      <div className="flex justify-between">
        <div>Minimum Output</div>
        <div className="text-right">54303.03 USDC</div>
      </div>
      <div className="flex justify-between">
        <div>Expected Output</div>
        <div className="text-right">54303.03 USDC</div>
      </div>

      <hr className="w-full border-t-white/30 mb-3" />

      <div className="flex justify-between">
        <div>Order Routing</div>
        <div className="text-right">
          <strong>spedx</strong> Protocol
        </div>
      </div>
    </motion.div>
  );
};
