import React, {Component} from "react";
import { ref, set, onValue} from "firebase/database";
import { db } from "../firebase";

class Chat extends Component {

    constructor() {
        super(); //con esto heredas todo lo que tiene la clase Component
        this.state = {
            message: '', //alamacena el mensaje del input
            messages: [
                {id:0, text:'text1'},
                {id:1, text:'text2'},
                {id:2, text:'text3'}
            ]
        }
    }

    updateMessage(e){
        //console.log(e.target.value);
        this.setState({message: e.target.value});
    }
   
    componentDidMount() {
        //Conección con Firebase
        const messageRef = ref(db, 'messages/');
        onValue(messageRef, (snapshot) => {
            const data = snapshot.val();
            this.setState({
                messages: data
            });
          });
    }

    handleSubmit(e){
        e.preventDefault();
        const list = this.state.messages;
        const newMessage = {
            id: this.state.messages.length,
            text: this.state.message
        };
        console.log(newMessage);
        list.push(newMessage);

        set(ref(db, `messages/${newMessage.id}`), newMessage);
        this.setState({message: ''});
        this.setState({messages: list})
    }

    render() {

        const { messages } = this.state;
        const messagesList = messages.map(message => {
            return <li key={message.id}>{message.text}</li>
        })

        return(
            <div>
                <ul>
                    {messagesList}
                </ul>

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" value={this.state.message} onChange={this.updateMessage.bind(this)}/>
                    <button>
                        Send
                    </button>
                </form>
            </div>
        );
    }
}

export default Chat;