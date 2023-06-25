import React from 'react';

import { PrettyChatWindow } from 'react-chat-engine-pretty';
const ChatsPage = (props) => {
    return <div style={{height: '100vh'}}>
      <PrettyChatWindow
        projectId='a2288a9f-17ad-459d-9a87-40b8a1e43da6'
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
        />
    </div>
}

export default ChatsPage