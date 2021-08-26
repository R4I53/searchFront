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
          <h2 className={s.title}>Lorem, ipsum.</h2>
          <div className={s.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            provident earum laboriosam ipsam quaerat laudantium soluta eos ad
            labore voluptatibus non suscipit magnam quam reprehenderit veritatis
            deserunt aliquid distinctio dicta, corporis ducimus. Nostrum, atque
            nisi, ducimus similique illo animi accusamus repellendus ratione,
            consequatur quasi nihil error eius laboriosam tenetur. Quam iusto
            maiores vitae, rerum quo modi reiciendis dolore dicta quod. Veniam
            non ipsam minus aperiam quis! Inventore aliquam cumque ullam,
            impedit voluptates quam. Ea et iure ipsam, neque ullam itaque,
            excepturi accusamus veritatis aperiam placeat harum velit dolores.
            Et tempore culpa minima, ad expedita dolorum itaque corrupti
            pariatur nisi aliquam.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
