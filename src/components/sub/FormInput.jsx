const FormInput = ({ name, value, onChange, placeholder, type = "text" }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-700 outline-none dark:bg-zinc-300"
      placeholder={placeholder}
    />
  );
};

export default FormInput;
