import React from "react";
import s from "./Menu.module.scss";
import icon from "../../../img/Arrow.svg";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../redux/posts/actions";

const Menu = ({ stateBlock, stateButton, changeState }) => {
  const dispatch = useDispatch();
  const names = useSelector((state) => state.post.names);
  const post = useSelector((state) => state.post.post);

  React.useEffect(() => {
    if (window.innerWidth <= 1280) {
      changeState();
    }
    dispatch(actions.getNamePosts());
  }, [dispatch]);

  return (
    <aside className={s.aside}>
      <div className={s.wrapper}>
        <button
          className={stateButton ? s.active + " " + s.button : s.button}
          onClick={changeState}
        >
          <img src={icon} alt="bt" className={s.icon} />
        </button>
        {stateBlock && (
          <div className={s.block}>
            {names.length > 0 && (
              <div className={s.container}>
                <div className={s.block_item}>
                  <h3 className={s.title}>Важные:</h3>
                  <div className={s.container_list}>
                    <ul className={s.menu_list}>
                      {names
                        .filter(({ category }) => Number(category) === 1)
                        .map(({ id, title }) => {
                          return (
                            <li
                              onClick={() => dispatch(actions.getPost(id))}
                              key={id}
                              className={s.menu_list__item}
                              style={{
                                listStyle: id === post?.id && "disc",
                              }}
                            >
                              {title}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>

                <div className={s.block_item}>
                  <h3 className={s.title}>Второстепенные:</h3>
                  <div className={s.container_list}>
                    <ul className={s.menu_list}>
                      {names
                        .filter(({ category }) => Number(category) === 2)
                        .map(({ id, title }) => {
                          return (
                            <li
                              onClick={() => dispatch(actions.getPost(id))}
                              key={id}
                              className={s.menu_list__item}
                              style={{
                                listStyle: id === post?.id && "disc",
                              }}
                            >
                              {title}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </aside>
  );
};

export default Menu;
