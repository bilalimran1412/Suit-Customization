const Message = ({ message, type }) => {
    // Tailwind styles for success and error messages
    const messageStyles = {
      success: 'bg-green-500 text-white',
      error: 'bg-red-500 text-white',
    };
  
    return (
      <div
        className={`p-4 mb-4 rounded-md ${message ? messageStyles[type] : ''}`}
        role="alert"
      >
        {message}
      </div>
    );
  };
  
export default Message
  