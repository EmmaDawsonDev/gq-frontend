import { useAppSelector } from '../../hooks/useAppSelector'
import climb from '../../assets/icons/climb.png'
import styles from './Profile.module.css'

const Profile = () => {
  const user = useAppSelector(state => state.user.user)
  const numberQuestionsAnswered = user!.score / 5
  return (
    <main>
      <section className={styles.profileContainer}>
        <h1 className="h1small">Welcome, {user?.username}!</h1>
        <p>
          You have collected <span className={styles.points}>{user?.score}</span> points.
        </p>
        {numberQuestionsAnswered === 0 ? (
          <p>You have not answered any questions yet.</p>
        ) : numberQuestionsAnswered === 1 ? (
          <p>You have answered {numberQuestionsAnswered} question!</p>
        ) : (
          <p>You have answered {numberQuestionsAnswered} questions!</p>
        )}
        <img src={climb} alt="Person climbing up a cliff" />
      </section>
      <section className={styles.profileContainer}>
        <h2>User information</h2>
        <div className={styles.flexRow}>
          <p className={styles.bold}>Username:</p>
          <p>{user?.username}</p>
        </div>
        <div className={styles.flexRow}>
          <p className={styles.bold}>Email:</p>
          <p>{user?.email}</p>
        </div>
      </section>
    </main>
  )
}

export default Profile
