import PropTypes from 'prop-types';
import { FeedbackContainer, FeedbackItem, FeedbackBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <FeedbackContainer>
        {options.map(option => (
        <FeedbackItem key={option}>
            <FeedbackBtn name={option} type="button" onClick={onLeaveFeedback}>
            {option}
            </FeedbackBtn>
        </FeedbackItem>
        ))}
      </FeedbackContainer>
    );
  };

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}


export default FeedbackOptions;
