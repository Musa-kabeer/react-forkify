import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';

const ErrorMessage = () => {
  return (
    <div className="error">
      <div>
        <WarningAmberRoundedIcon />
      </div>
      <p>No recipes found for your query. Please try again!</p>
    </div>
  );
};

export default ErrorMessage;
