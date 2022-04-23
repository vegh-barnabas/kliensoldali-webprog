import styles from "./Private.module.css";

const Private = ({ logout, username }) => {
  // console.log(styles);
  return (
    <div className={styles.bordered}>
      <h1>Szia, {username}!</h1>
      <div>Formázott tartalom</div>
      <button onClick={logout} className="logoutBtn">
        Kijelentkezés
      </button>
    </div>
  );
};

export default Private;
