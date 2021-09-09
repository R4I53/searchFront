import React from "react";
import s from "./Menu.module.scss";
import icon from "../../../img/Arrow.svg";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../redux/posts/actions";

const Menu = () => {
  const dispatch = useDispatch();
  const stableDispatch = React.useCallback(dispatch, []);
  const names = useSelector((state) => state.post.names);
  const post = useSelector((state) => state.post.post);
  const [activeButton, setActiveButton] = React.useState(true);
  const [activeBlock, setActiveBlock] = React.useState(true);

  const changeActive = () => {
    setActiveButton((prev) => !prev);
    setActiveBlock((prev) => !prev);
  };

  React.useEffect(() => {
    stableDispatch(actions.getNamePosts());
  }, [stableDispatch]);

  return (
    <aside className={s.aside}>
      <div className={s.wrapper}>
        <button
          className={activeButton ? s.active + " " + s.button : s.button}
          onClick={changeActive}
        >
          <img src={icon} alt="bt" className={s.icon} />
        </button>
        {activeBlock && (
          <div className={s.block}>
            {names.length > 0 && (
              <div className={s.container}>
                <div className={s.block_item}>
                  <h3 className={s.title}>Важные:</h3>
                  <div className={s.container_list}>
                    <ul className={s.menu_list}>
                      {names.map(({ id, title, category }) => {
                        if (category === 1) {
                          return (
                            <li
                              onClick={() => dispatch(actions.getPost(id))}
                              key={id}
                              className={s.menu_list__item}
                              style={{
                                listStyle: id === post.id && "disc",
                              }}
                            >
                              {title}
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                </div>

                <div className={s.block_item}>
                  <h3 className={s.title}>Важные:</h3>
                  <div className={s.container_list}>
                    <ul className={s.menu_list}>
                      <li className={s.menu_list__item}>Паритет</li>
                      <li className={s.menu_list__item}>Дарья Бульба</li>
                      <li className={s.menu_list__item}>
                        Александра Пакарклис
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={s.block_item}>
                  <h3 className={s.title}>Важные:</h3>
                  <div className={s.container_list}>
                    <ul className={s.menu_list}>
                      <li className={s.menu_list__item}>Паритет</li>
                      <li className={s.menu_list__item}>Дарья Бульба</li>
                      <li className={s.menu_list__item}>
                        Александра Пакарклис
                      </li>
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
