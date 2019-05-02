import React from 'react';

function ChatForm({text, handleChange, handleSend}) {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSend();
        }}
        
        >
            <input 
               value={text}
               onChange={handleChange}
            />
            <button
            // onClick={handleSend}
            >Send</button>

        </form>
    )
}

export default ChatForm;