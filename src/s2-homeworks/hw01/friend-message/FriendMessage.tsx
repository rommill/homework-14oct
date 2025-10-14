import React from "react";
import s from "./FriendMessage.module.css";
import { MessageType } from "../HW1";

export type FriendMessagePropsType = {
  message: MessageType;
};

// Создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessagePropsType) => {
  return (
    <div
      id={"hw1-friend-message-" + props.message.id}
      className={s.friendMessage}
    >
      <div className={s.friendImageAndText}>
        {/* НОВЫЙ КОНТЕЙНЕР: Оборачиваем аватар и время */}
        <div className={s.avatarAndTimeContainer}>
          <img
            id={"hw1-friend-avatar-" + props.message.id}
            src={props.message.user.avatar}
            alt={props.message.user.name + " avatar"}
            className={s.friendAvatar}
          />
          <div
            id={"hw1-friend-time-" + props.message.id}
            className={s.friendTime}
          >
            {/* Время перенесено сюда */}
            {props.message.message.time}
          </div>
        </div>
        {/* КОНЕЦ НОВОГО КОНТЕЙНЕРА */}

        <div className={s.friendText}>
          <div
            id={"hw1-friend-name-" + props.message.id}
            className={s.friendName}
          >
            {props.message.user.name}
          </div>
          <pre
            id={"hw1-friend-text-" + props.message.id}
            className={s.friendMessageText}
          >
            {props.message.message.text}
          </pre>
        </div>
      </div>
      {/* СТАРОЕ РАСПОЛОЖЕНИЕ ВРЕМЕНИ УДАЛЕНО */}
    </div>
  );
};

export default FriendMessage;
