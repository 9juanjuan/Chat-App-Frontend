import React from 'react';
import ChatList from './ChatList';
import axios from 'axios';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }
 componentDidMount() {



  setInterval(async ()=> {
    const {data}= await axios.get('/api') 
    console.log(data)
    this.setState({
      messages: data
    });
   
  }, 2000)
}


  //  const {data}= await axios.get('/api') 
  //  console.log(data)
  //  this.setState({
  //    messages: data
  //  });
  // }
  
  render() {
    return (
      <div className="App">
      <h1> Chat app</h1>
      <ChatList messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
