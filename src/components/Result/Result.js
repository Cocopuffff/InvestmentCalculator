import styles from "./Result.module.css";

const Result = (props) => {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>YEAR NUMBER</td>
          <td>TOTAL SAVINGS END OF YEAR</td>
          <td>INTEREST GAINED IN YEAR</td>
          <td>TOTAL INTEREST GAINED</td>
          <td>TOTAL INVESTED CAPITAL</td>
        </tr>
      </tbody>
      {props.calculations.map((calculation) => 
        <tbody>
          <tr>
            <td>{calculation.year}</td>
            <td>{calculation.savingsEndOfYear.toFixed(0)}</td>
            <td>{calculation.yearlyInterest.toFixed(0)}</td>
            <td>{calculation.totalInterest.toFixed(0)}</td>
            <td>{calculation.totalInvestedCapital.toFixed(0)}</td>
          </tr>
        </tbody>
    )}
    </table>
  );
};

export default Result;
