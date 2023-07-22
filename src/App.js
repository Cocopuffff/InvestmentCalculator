import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Result from "./components/Result/Result";

import { useState } from "react";

function App() {
  const [result, setResult] = useState('');

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];
    let totalInterest = 0;
    let totalInvestedCapital = 0;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      totalInvestedCapital += yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest: totalInterest,
        totalInvestedCapital: totalInvestedCapital,
      });
    }
    console.log(yearlyData);
    setResult(yearlyData);
    // do something with yearlyData ...
  };

  return (
    <div>
      <Header />

      <Form onSubmitForm={calculateHandler}/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {result === '' ? <p id='prompt'>Get started by submitting the form above!</p>: <Result calculations={result} />}
    </div>
  );
}

export default App;
