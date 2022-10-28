import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>Massas Restaurante</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          aut quidem ad nisi mollitia dolor expedita eaque perspiciatis
          praesentium earum, possimus rem quaerat, magnam sit, deserunt
          consectetur beatae voluptate? Tempora?
        </p>
      </div>
      <div className={styles.image}></div>
    </header>
  );
};

export default Header;
