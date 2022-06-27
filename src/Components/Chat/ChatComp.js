import React from "react";
import RecieveComp from "./RecieveComp";
import SenderComp from "./SenderComp";

export default function ChatComp({ image }) {
  const chats = [
    {
      type: "received",
      img: "chat1.png",
      name: "Goddess 😎😎🤎",
      text: "Hey I'm Bridget",
    },
    {
      name: "Jesigirl70",
      text: "hi everyone,i’m new here",
      type: "received",
      img: "Ellipse 2.png",
    },
    {
      type: "send",
      img: "Ellipse 18.png",
      name: "Goddess 😎😎🤎",
      text: "Hey I'm Bridget",
      image: "morning.png",
      isOnline: false,
    },
    {
      type: "send",
      img: "chat1.png",
      name: "Goddess 😎😎🤎",
      text: "Hey I'm Bridget",
      isOnline: true,
      // image: 'morning.png'
    },
    {
      type: "received",
      img: "chat1.png",
      name: "Jesigirl70🤎",
      text: "Hey I'm Bridget",
      image: 'Rectangle 135.png'
    },
    {
      type: "send",
      img: "chat1.png",
      name: "James 😎🤎",
      text: "Hey I'm Bridget",
      isOnline: false,
    },

    ,
    {
      type: "received",
      img: "chat1.png",
      name: "Mark 😎😎🤎",
      text: "Hey I'm Mark, I'm new here",
      isOnline: true,
    },

    ,
    {
      type: "send",
      img: "chat1.png",
      name: "James🤎",
      text: "Hey I'm Bridget",
      isOnline: true,
    },
  ];

  // chat = JSON.parse(chats)

  // chats.forEach((data) => {
  return (
    <div className="container mb-5 pb-5" style={Style.wrap}>
      {chats.map((data) =>
        data.type == "received" ? (
          <RecieveComp
            img={require("../../img/" + data.img)}
            name={data.name}
            text={data.text}
            image={data.image ? require("../../img/" + data.image) : ""}
            isOnline={data.isOnline == true ? Style.isOnline : Style.isOffline}
          />
        ) : (
          <SenderComp
            img={require("../../img/" + data.img)}
            name={data.name}
            text={data.text}
            image={data.image ? require("../../img/" + data.image) : ""}
            isOnline={data.isOnline == true ? Style.isOnline : Style.isOffline}
          />
        )
      )}
    </div>
  );
}

const Style = {
  wrap: {
    overflowX: "auto",
    padding: "15px",
  },
  isOnline: {
    width: "16px",
    height: "16px",
    backgroundColor: "#34A853",
    borderRadius: "16px",
  },

  isOffline: {
    width: "16px",
    height: "16px",
    backgroundColor: "black",
    borderRadius: "16px",
  },
};
