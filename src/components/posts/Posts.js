import React from "react";
import s from "./Posts.module.scss";
import photo from "../../img/Daria.jpg";

const Posts = () => {
  return (
    <section>
      <div className={s.block}>
        <div className={s.container}>
          <div className={s.block_photo}>
            <img className={s.block_photo__item} src={photo} alt="фото" />
          </div>
          <h2 className={s.title}>Дарья Бульба</h2>
          <div className={s.text}>
            В 2016 году 6 августа в китайском городе Шанхай пропала 20-ти летняя
            модель Дарья Бульба. Девушке постоянно приходили сообщения с
            незнакомого номера. Насколько известно, ей пришло сообщение с
            просьбой о встрече, в тот же вечер она решила согласиться на неё. В
            последний раз ее видели на камерах наружного наблюдения, но так и не
            получилось узнать куда она направилась, потому что дальше она
            находилась в "слепой" зоне. Соседка по комнате сообщила, что Дарья
            не вернулась. Полиция закрыло это дело так ничего и не узнав, а
            модельное агенство просто забыло этот случай. Родственники и друзья
            Даши долгие месяца пытались найти хоть какие нибудь новости, но всё
            безуспешно. Позже поклонники стали замечать, что на страницу Дарьи
            переодически кто то заходит, хотя как уверяют доступа к аккаунту
            Даши не было ни у кого. Последний раз на ее странице вк была какая
            либо активность 25 августа 2019 года в 16:45 с устройства IPhone.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
