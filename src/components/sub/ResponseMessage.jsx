const ResponseMessage = ({ message, isError }) => {
  return (
    message && (
      <p
        className={`mt-4 text-center font-medium text-lg ${
          isError ? "text-red-500" : "text-green-500"
        }`}
      >
        {message}
      </p>
    )
  );
};

export default ResponseMessage;
