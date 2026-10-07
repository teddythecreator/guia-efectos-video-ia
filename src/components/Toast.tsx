import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  visible: boolean;
}

export default function Toast({ message, visible }: ToastProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (visible) {
      setShow(true);
    } else {
      const timer = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!show && !visible) return null;

  return (
    <div
      className={`fixed bottom-8 right-8 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white py-4 px-6 rounded-xl shadow-2xl z-50 transition-transform duration-300
        ${visible ? "translate-x-0" : "translate-x-[400px]"}`}
    >
      {message}
    </div>
  );
}
