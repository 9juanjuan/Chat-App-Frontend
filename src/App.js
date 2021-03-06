import React from 'react';
import ChatList from './ChatList';
import ChatForm from './ChatForm';
import axios from 'axios';
import qs from 'qs';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      text: ''
    }
  }
 componentDidMount() {



  setInterval(async ()=> {
    const {data}= await axios.get('/api') 
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
      <ChatForm 
      text={this.state.text}
      handleChange={this._setText}
      handleSend={this._sendMessage}
      />
      </div>
    );
  }
  _setText = (text) => {
    console.log('App _setText got called')
    this.setState({
      text
    })
  }

   _sendMessage = async() => {
    console.log('App_sendMessage got called')
    axios({
      method: 'post',
      url: '/api',
      data: qs.stringify({
        message: this.state.text
      }),
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
      }
    });
    this.setState({
      text: ''
    })
  }
}

export default App;
