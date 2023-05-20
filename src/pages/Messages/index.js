import React from "react";
import routeMain from "./routes.js";
import LSidebar from "../../components/LSidebar";
import RSidebar from "../../components/RSidebar";
import MessageItem from "./MessageItem";
import CompanionItem from "./CompanionItem/index.js";
import MessageList from "./MessageList";
import AddMessageForm from "./AddMessageForm/AddMessageForm.js";
import WidgetFriends from "../../components/Widgets/WidgetFriends";
import WidgetPeople from "../../components/Widgets/WidgetsPeople";
import WidgetYofamiliar from "../../components/Widgets/WidgetYofamiliar";
import "./styles.scss";

const Messages = (props) => {
    
    console.log("Hello message")

    let companion = props.usersList
        .map( companion => <CompanionItem
            key={companion.id} 
            id={companion.id}
            avatar={companion.avatar}
            name={companion.name}
            surname={companion.surname}

        />)

    let messages = props.messagesPage.messages
        .map(message => <MessageItem
            key={message.id}
            id={message.id}
            message={message.message}
            avatar={message.avatar}
            im={message.im}
        />)

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }
    return (
        <section className="wrapContent">
            <LSidebar 
                content={
                    <div className="companions">{companion}</div>
                }
            />
            {messages.length > 0 && <MessageList messages={messages}/>}
            
            <div className="wrapTextareaMessages">

                <AddMessageForm onSubmit={addNewMessage}/>

            </div>

            <RSidebar 
                content={
                    <>
                        <WidgetFriends friends={props.friends}/>
                        <div className="wrapMessageWidgetYofamiliar"><WidgetYofamiliar users={props.users}/></div>
                        <div className="wrapMessgeWidgetPeople"><WidgetPeople users={props.users}/></div>
                    </>
                }

            />
        </section>
    )
}

export {routeMain};
export default Messages;