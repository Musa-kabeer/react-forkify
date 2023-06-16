import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';

const WelcomeMessage = () => {
  return (
    <div className="message">
      <div>
        <SentimentSatisfiedAltOutlinedIcon />
      </div>
      <p>
        Start by searching for a recipe or an ingredient. Have fun!
      </p>
    </div>
  );
};

export default WelcomeMessage;
