import { Component} from 'react';
import FeedbackOptions  from './FeedbackOptions';
import Statistics  from './Statistics';
import Section  from './Section';
import Notification  from './Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (event) => {
      const someBtn = event.target.name;
      this.setState(prevState => ({
        [someBtn]: prevState[someBtn] + 1,
      }));
  };

  countTotalFeedback() {
    const arrValues = Object.values(this.state);
    return arrValues.reduce((total, el) => 
    (total += el));
  };

  countPositiveFeedbackPercentage() {
    const good = this.state.good;
    const totalValue = this.countTotalFeedback();
    return totalValue === 0 ? 0 : Math.round((good / totalValue) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    
    return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick} />
      </Section>
      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedback}
          />
          ) : (
          <Notification message="There is no feedback" />
          )}
      </Section>
    </>)
  }
}












