import styled from '@emotion/styled';

export const FeedbackContainer = styled.ul`
  margin-top: 10px;
  text-align: center;
`;

export const FeedbackItem = styled.li`
  display: inline-block;
  margin-right: 10px;

  & button:hover {
    background-color: rgba(0, 128, 0, 1);
  }

  & button::first-letter {
    text-transform: uppercase;
  }
`;

export const FeedbackBtn = styled.button`
  cursor: pointer;
  background-color: #ffff;
  border-radius: 5px;
  border: 2px solid rgba(80, 128, 128);
  padding: 8px;
  
`;

