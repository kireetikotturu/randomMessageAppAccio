import { useState } from "react";
import Form from "./components/Form";
import MessageList from "./components/MessageList";

const App = () => {
  const [refresh, setRefresh] = useState(false)
  const onRefresh = ()=>{
    setRefresh(prev=>!prev)
  }
  return (
    <div className="app">
      <div className="container">
        <Form onRefresh = {onRefresh}/>
        <MessageList refresh = {refresh}/>
      </div>
    </div>
  );
};

export default App;
