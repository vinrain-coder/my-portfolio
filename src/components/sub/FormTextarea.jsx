const FormTextArea = ({ name, value, onChange, placeholder }) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className="max-h-[250px] min-h-[150px] border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-700 outline-none dark:bg-zinc-300"
      placeholder={placeholder}
    ></textarea>
  );
};

export default FormTextArea;
