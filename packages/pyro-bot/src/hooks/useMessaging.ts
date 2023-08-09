import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";

export interface MessageType {
    message: string;
    from: 'user' | 'bot';
}

const API_BASE_URL = "http://pyreactors-api.hackathon.local:5000/";

const HEADERS = {
    "Content-type": "application/json; charset=UTF-8"
};

export const useMessaging = (botName: string, onChange: ChangeEventHandler<HTMLInputElement>, input: string, apiKey: string, apiSecret: string) => {
    const [messageList, setMessageList] = useState<MessageType[]>([{
        message: `Hey ya, I'am ${botName}. How may I assist you today ?`,
        from: 'bot'
    }]);

    const onSendMessage = async () => {
        const body = JSON.stringify({
            userinput: input,
        });
        const response = await fetch(`${API_BASE_URL}/input_data/`, { method: "POST", body, headers: HEADERS });
        const data = await response.json();
        setMessageList((curr) => [
            ...curr,
            { from: 'bot', message: data.response },
        ]);
    }
      
    const sendMessage = async () => {
        try {
            if(!input) return;
            setMessageList((curr) => [
                ...curr,
                { from: "user", message: input },
            ]);
            onChange({ target: { value: "", }, } as ChangeEvent<HTMLInputElement>);
            await onSendMessage();
        } catch(err) {
            console.log('Error while sending the message', err);
        }
    };

    return {
        messageList,
        sendMessage,
    };
}
