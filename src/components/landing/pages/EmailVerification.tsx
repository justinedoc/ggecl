import { useState, useEffect, useRef } from "react";

const EmailVerification = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Handle code input change
  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Verification code submitted: ${code.join("")}`);
  };

  // Handle resend button click
  const handleResend = () => {
    setCanResend(false);
    setResendTimer(30);
    // Simulate sending new code (API call goes here)
    setTimeout(() => setCanResend(true), 30000);
  };

  // Countdown timer
  useEffect(() => {
    if (!canResend) {
      const interval = setInterval(() => {
        setResendTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [canResend]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Verify Your Email</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Enter the 6-digit code sent to your email.</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <div className="flex justify-center space-x-2">
            {code.map((num, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={num}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-12 h-12 border border-gray-300 dark:border-gray-600 rounded-md text-center text-2xl font-bold focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                required
              />
            ))}
          </div>
          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md text-lg transition-all duration-200"
          >
            Verify
          </button>
        </form>
        
        <div className="mt-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">Didn't receive a code?</p>
          <button 
            onClick={handleResend} 
            disabled={!canResend} 
            className={`mt-2 text-lg ${canResend ? 'text-blue-600 hover:underline' : 'text-gray-400 cursor-not-allowed'}`}
          >
            {canResend ? "Resend Code" : `Resend in ${resendTimer}s`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;