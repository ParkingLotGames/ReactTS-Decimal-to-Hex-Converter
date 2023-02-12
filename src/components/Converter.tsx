import React, { useState } from "react";

const DecimalToHex: React.FC = () => {
  const [decimal, setDecimal] = useState("");
  const [hex, setHex] = useState("");

  const handleDecimalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDecimal(e.target.value);
    setHex(Number(e.target.value).toString(16));
  };

  return (
    <div className="flex flex-col items-center p-4">
      <input
        type="text"
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-64 appearance-none leading-normal"
        placeholder="Enter Decimal Number"
        value={decimal}
        onChange={handleDecimalChange}
      />
      <p className="mt-4 text-xl font-medium">Hexadecimal: {hex.toUpperCase()}</p>
    </div>
  );
};

export default DecimalToHex;
