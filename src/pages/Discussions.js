import React from 'react';
import Main from '../components/Main';
import { ChatEngine, getOrCreateChat } from 'react-chat-engine';
import '../scss/pages/chat.scss';

const REACT_APP_PROJECT_ID = '1bc15ea3-148c-40ab-8889-c780f3aeb01f'
//const REACT_APP_PROJECT_KEY = '1d8c0659-1282-4c3b-8a92-e6bd7e094d9d'
const REACT_APP_USER_SECRET = 'enpm613'
//const REACT_APP_CHAT_SECRET = 'enpm613'
//const REACT_APP_CHAT_ID = '137220'

const Discussions = (props) => {
    // The useState hook initially sets the username to an empty string
    const [username, setUsername] = React.useState('')
    //Custom function that will implement the getOrCreateChat function that to select username to chat with
    //only when the correct credentials(user  secret, project id, username) are passed will the application be rendered
    const implementingDirectChat = (credentials) => {
        getOrCreateChat(
            credentials,
            // function will only work if the app is a Direct Messaging one, hence setting 'is_direct_chat' to true and consequentially setting a list of usernames to search from.
            { is_direct_chat: true, usernames: [username] },
            () => setUsername('')
        )
    }

    const displayChatInterface = (credentials) => {
        return (
            <div>
                <input
                    type="text"
                    placeholder='Find username'
                    value={username} //prop from the useState hook
                    // A controlled function that sets the username to what the user types in the input field
                    onChange={(e) => setUsername(e.target.value)}
                />

                {/* clicking button will call the implementingDirectChat function that displays a list of usernames to create or find an existing chat.  */}
                <button onClick={() => implementingDirectChat(credentials)}>
                    Create Chat
                </button>

            </div>
        )
    }

    return (
        <Main
            title="Discussions"
            description="To discuss ideas and topics"
            userType={props.userType}
            setUserType={props.setUserType}
        >
            <ChatEngine
                height='100vh'
                userName='gellerross'
                // Accessing the stored environment variables in .env file
                userSecret={REACT_APP_USER_SECRET}
                projectID={REACT_APP_PROJECT_ID}
                displayNewChatInterface={(credentials) => displayChatInterface(credentials)}
            />
        </Main>
    )
}

export default Discussions;