import React, {useState} from 'react';
import styled from 'styled-components';
import Picker from 'emoji-picker-react';
import { IoMdSend } from 'react-icons/io';
import { BsEmojiSmileFill} from 'react-icons/bs';

const ChatInput = ({handleSendMsg}) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); 
  const [msg, setMsg] = useState('');
  
  const handleEmojiPickerHideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (event, emoji) => {
    let message = msg;
    message += emoji.emoji;
    setMsg(message);
  };

  const sendChat = (event) =>{
    event.preventDefault();
    if(msg.length > 0) {
      handleSendMsg(msg);
      setMsg('');
    }
  };

  return (
    <Container>
        <div className='button-container'>
            <div className='emoji'>
              <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
              {
                showEmojiPicker && <Picker onEmojiClick={handleEmojiClick}/>
              }
            </div>
        </div>
        <form className='input-container' onSubmit={(e) => sendChat(e)}>
           <input type='text' placeholder='type your message here' value={msg} onChange={(e) => setMsg(e.target.value)} />
           <button className='submit'>
              <IoMdSend />
           </button>
        </form>
    </Container>
  );
}

const Container = styled.div`
display: grid;
align-items: center;
grid-template-columns: 5% 95%;
background-color: #fff;
padding: 0 2rem;
@media screen and (min-width: 720px) and (max-width: 1080px) {
  padding: 0 1rem;
  gap: 1rem;
}
 .button-container {
    display: flex;
    align-items: center;
    color: black;
    gap: 1rem;
    .emoji{
      position: relative;
      svg {
        font-size: 1.5rem;
        color: #d8b114;
        cursor: pointer;
      }
      .emoji-picker-react {
        position: absolute;
        top: -350px;
        box-shadow: 0 5px 10px gray;
        .emoji-scroll-wrapper::-webkit-scrollbar {
          background-color: white;
          width: 5px;
          &-thumb {
            background-color: #99c2f1;
          }
        }
        .emoji-categories {
          button {
            filter: contrast(0);
          }
        }
        .emoji-search {
          background-color: transparent;
        }
      }
    }
 }
 .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-content: center;
    gap: 2rem;
    background-color: #eeecf1;
    input {
        width: 90%;
        background-color: transparent;
        color: #0d0d35;
        border: none;
        padding-left: 1rem;
        font-size: 1rem;

        &::selection {
            background-color: #dea5a4;
        }
        &:focus {
            outline: none;
        }
    }
    button {
        padding: 0.3rem 2rem;
        border-radius: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: gray;
        border: none;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          padding: 0.3rem 1rem;
          svg {
            font-size: 1rem;
          }
        }
        svg {
            font-size: 2rem;
            color: #fff;
        }
    }
 }
`;
export default ChatInput