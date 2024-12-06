const FormButton = ({ loading, text }) => {
  return (
    <button
      type="submit"
      className="w-full border border-yellow-500 rounded-md bg-yellow-600 px-4 py-2 text-md font-light tracking-wider text-white outline-none hover:bg-yellow-500 transition-colors cursor-pointer"
      disabled={loading}
    >
      {loading ? "Sending..." : text}
    </button>
  );
};

export default FormButton;
