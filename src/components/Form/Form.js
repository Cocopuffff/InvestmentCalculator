import { useState } from 'react';
import styles from './Form.module.css';

const Form = (props) => {
  const [input, setInput] = useState({
    'current-savings': '',
    'yearly-contribution': '',
    'expected-return': '',
    'duration': '',
  });

  const formChangeHandler = event => {
    const { id, value } = event.target;
    setInput({
      ...input,
      [id]: value,
    });
  };
  
  const formSubmitHandler = event => {
    event.preventDefault();
    props.onSubmitForm(input);
    setInput({
      'current-savings': '',
      'yearly-contribution': '',
      'expected-return': '',
      'duration': '',
    });
  }

  const formResetHandler = () => {
    setInput({
      'current-savings': '',
      'yearly-contribution': '',
      'expected-return': '',
      'duration': '',
    });
  }

  return (
    <form className={styles.form} onSubmit={formSubmitHandler} onReset={formResetHandler}>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" value={input['current-savings']} onChange={formChangeHandler} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" value={input['yearly-contribution']} onChange={formChangeHandler} />
        </p>
      </div>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" value={input['expected-return']} onChange={formChangeHandler} />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" value={input['duration']} onChange={formChangeHandler} />
        </p>
      </div>
      <p className={styles.actions}>
        <button type="reset" className={styles.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;