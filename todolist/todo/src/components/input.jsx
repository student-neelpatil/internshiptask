

function Input({ value, onChange, placeholder, className = "" }) {
    return (
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black-200 ${className}`}
      />
    );
  }
  
  export default Input;