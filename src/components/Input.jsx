import React, { useState } from 'react';

const Input = () => {
  const [purchasePrice, setPurchasePrice] = useState( '');
  const [downPayment, setDownPayment] = useState(' ');
  const [repaymentTime, setRepaymentTime] = useState( '');
  const [interestRate, setInterestRate] = useState(' ');
  const [loanAmount, setLoanAmout] = useState(' ');
  const [perMonth, setPerMonth] = useState(' ');

  const handleCalculation = () => {
        const loanAmount = purchasePrice - downPayment;
        const p = loanAmount;
        const r = interestRate/100;
        const n = repaymentTime;
        const numerator = p * (r * Math.pow(1 + r, n));
        const denominator = Math.pow(1 + r, n) - 1;
        const perMonth = numerator / denominator;
        setLoanAmout(loanAmount);
        setPerMonth(perMonth);
  }

  return (
        <div className="flex items-center justify-center h-screen">
                 <div className='text-start w-1/2 border-2 rounded p-6'>
      <section>
        <div>
          <p>Purchase Price</p>
          <input
            type="number"
            value={purchasePrice}
            onChange={event => setPurchasePrice(event.target.value)}
            class=" my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <p>Down Payment</p>
          <input
            type="number"
            value={downPayment}
            onChange={event => setDownPayment(event.target.value)}
            class="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <p>Repayment Time</p>
          <input
            type="number"
            value={repaymentTime}
            onChange={event => setRepaymentTime(event.target.value)}
            class="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <p>Interest Rate</p>
          <input
            type="number"
            value={interestRate}
            onChange={event => setInterestRate(event.target.value)}
            class="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <button onClick={handleCalculation} className="my-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Calculate</button>
        <p className='text-xl font-mono'>Loan Amount <br /> {loanAmount}</p>
        <p className='text-xl font-mono'>Per Month Loan Amount <br /> {perMonth}</p>
        
      </section>
    </div>

        </div>
   
  );
};

export default Input;
