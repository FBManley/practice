import React, { useEffect, useState } from 'react';

 function MessageList() {
    const [messages, setMessages] = useState([]) //we want 'messages' state to eventually be an array of message objects, so we can set initial state to be treated as an array.

    useEffect(() => {
      fetch('https:localhost:3001/messages')
    .then(r => r.json())
    .then(data => console.log(data)) 
    }, [])
    console.log({ messages });
    
   

  return (
    <div>Fetch</div>
  )
};
export default MessageList;