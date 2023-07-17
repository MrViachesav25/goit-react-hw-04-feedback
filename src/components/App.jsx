
import FeedbackOptions  from './FeedbackOptions';
import Statistics  from './Statistics';
import Section  from './Section';
import Notification  from './Notification';
import { useState } from 'react';

const App = () => {
  
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  

  const handleClick = event => {
      const someBtn = event.target.name;
      if(someBtn === 'good') setGood(good + 1);
      if(someBtn === 'bad') setBad(bad + 1);
      if(someBtn === 'neutral') setNeutral(neutral + 1);
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalValue = countTotalFeedback();
    return totalValue === 0 ? 0 : Math.round((good / totalValue) * 100);
  };

  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={Object.keys({good, bad, neutral})} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
          ) : (
          <Notification message="There is no feedback" />
          )}
      </Section>
    </>)
}

export default App;












