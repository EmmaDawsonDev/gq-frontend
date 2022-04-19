import { useState, useEffect } from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { updateUser } from '../../store/user/userSlice.actions'
import climb from '../../assets/icons/climb.png'
import edit from '../../assets/icons/edit-pencil.png'
import styles from './Profile.module.css'

const Profile = () => {
  const user = useAppSelector(state => state.user.user)
  const error = useAppSelector(state => state.requestState.error)

  const [editUsername, setEditUsername] = useState<boolean>(false)
  const [updatedUsername, setUpdatedUsername] = useState<string>(user?.username || '')
  const [editEmail, setEditEmail] = useState<boolean>(false)
  const [updatedEmail, setUpdatedEmail] = useState<string>(user?.email || '')

  const numberQuestionsAnswered = user!.score / 5

  const dispatch = useAppDispatch()

  const handleSaveUpdatedUser = (dataType: 'username' | 'email') => {
    if (dataType === 'username') {
      dispatch(updateUser({ username: updatedUsername }))
    }
    if (dataType === 'email') {
      dispatch(updateUser({ email: updatedEmail }))
    }
  }

  useEffect(() => {
    if (error) {
      document.getElementById('errorContainer')?.focus()
    }
  }, [error])

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
        {error && (
          <div className={styles.errorContainer} tabIndex={-1} id="errorContainer">
            <p className={styles.formError}>{error}</p>
          </div>
        )}
        {!editUsername && (
          <div className={styles.flexRow}>
            <p className={styles.bold}>Username:</p>
            <p>{user?.username}</p>
            <button aria-label="edit username" className={styles.iconBtn} onClick={() => setEditUsername(true)}>
              <img src={edit} alt="edit icon"></img>
            </button>
          </div>
        )}
        {editUsername && (
          <div className={styles.flexRow}>
            <label htmlFor="updateUsername" className={styles.boldLabel}>
              Username:
            </label>
            <input
              type="email"
              required
              id="updateUsername"
              name="updateUsername"
              value={updatedUsername}
              onChange={e => setUpdatedUsername(e.target.value)}
            />
            <button className={styles.saveBtn} onClick={() => handleSaveUpdatedUser('username')}>
              Save
            </button>
            <button className={styles.cancelBtn} onClick={() => setEditUsername(false)}>
              Cancel
            </button>
          </div>
        )}

        {!editEmail && (
          <div className={styles.flexRow}>
            <p className={styles.bold}>Email:</p>
            <p>{user?.email}</p>
            <button aria-label="edit email" className={styles.iconBtn} onClick={() => setEditEmail(true)}>
              <img src={edit} alt="edit icon"></img>
            </button>
          </div>
        )}
        {editEmail && (
          <div className={styles.flexRow}>
            <label htmlFor="updateUsername" className={styles.boldLabel}>
              Email:
            </label>
            <input
              type="text"
              required
              id="updateEmail"
              name="updateEmail"
              value={updatedEmail}
              onChange={e => setUpdatedEmail(e.target.value)}
            />
            <button className={styles.saveBtn} onClick={() => handleSaveUpdatedUser('email')}>
              Save
            </button>
            <button className={styles.cancelBtn} onClick={() => setEditEmail(false)}>
              Cancel
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default Profile
