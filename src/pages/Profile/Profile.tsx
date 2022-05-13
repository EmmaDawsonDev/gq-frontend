import { useState, useEffect } from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { updateUser, updateUserPassword, deleteUser } from '../../store/user/userSlice.actions'
import climb from '../../assets/icons/climb.png'
import edit from '../../assets/icons/edit-pencil.png'
import Modal from '../../components/Modal/Modal'
import styles from './Profile.module.css'
import { clearError } from '../../store/requestState/requestStateSlice'

const Profile = () => {
  const user = useAppSelector(state => state.user.user)
  const error = useAppSelector(state => state.requestState.error)

  const [editUsername, setEditUsername] = useState<boolean>(false)
  const [updatedUsername, setUpdatedUsername] = useState<string>(user?.username || '')
  const [editEmail, setEditEmail] = useState<boolean>(false)
  const [updatedEmail, setUpdatedEmail] = useState<string>(user?.email || '')
  const [editPassword, setEditPassword] = useState<boolean>(false)
  const [updatedPassword, setUpdatedPassword] = useState<string>('')
  const [confirmUpdatedPassword, setConfirmUpdatedPassword] = useState<string>('')
  const [passwordMatch, setPasswordMatch] = useState<boolean>(true)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [focusedNode, setFocusedNode] = useState<any>(null)

  const numberQuestionsAnswered = user!.score / 5

  const dispatch = useAppDispatch()

  // Clear any errors when page first loads
  useEffect(() => {
    dispatch(clearError())
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    updatedPassword === confirmUpdatedPassword ? setPasswordMatch(true) : setPasswordMatch(false)
  }, [updatedPassword, confirmUpdatedPassword])

  const handleSaveUpdatedUser = (e: React.FormEvent<HTMLFormElement>, dataType: 'username' | 'email' | 'password') => {
    e.preventDefault()
    if (dataType === 'username' && updatedUsername.trim()) {
      dispatch(updateUser({ username: updatedUsername.trim() }))
    }
    if (dataType === 'email' && updatedEmail.trim()) {
      dispatch(updateUser({ email: updatedEmail.trim() }))
    }
    if (dataType === 'password' && updatedPassword.trim() === confirmUpdatedPassword.trim()) {
      dispatch(updateUserPassword({ password: updatedPassword.trim() }))
      setEditPassword(false)
    }
  }

  const handleDelete = () => {
    dispatch(deleteUser())
  }

  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFocusedNode(e.target)
    setShowModal(true)
  }

  useEffect(() => {
    if (!showModal && focusedNode) {
      focusedNode.focus()
    }
  }, [focusedNode, showModal])

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
            <p className={styles.text}>{user?.username}</p>
            <button aria-label="edit username" className={styles.iconBtn} onClick={() => setEditUsername(true)} type="button">
              <img src={edit} alt="edit icon"></img>
            </button>
          </div>
        )}
        {editUsername && (
          <form className={styles.flexRow} onSubmit={e => handleSaveUpdatedUser(e, 'username')}>
            <label htmlFor="updateUsername" className={styles.boldLabel}>
              Username:
            </label>
            <input
              type="text"
              required
              id="updateUsername"
              name="updateUsername"
              value={updatedUsername}
              onChange={e => setUpdatedUsername(e.target.value)}
            />
            <div>
              <button className={styles.saveBtn} type="submit">
                Save
              </button>
              <button className={styles.cancelBtn} type="button" onClick={() => setEditUsername(false)}>
                Cancel
              </button>
            </div>
          </form>
        )}

        {!editEmail && (
          <div className={styles.flexRow}>
            <p className={styles.bold}>Email:</p>
            <p className={styles.text}>{user?.email}</p>
            <button aria-label="edit email" className={styles.iconBtn} type="button" onClick={() => setEditEmail(true)}>
              <img src={edit} alt="edit icon"></img>
            </button>
          </div>
        )}
        {editEmail && (
          <form className={styles.flexRow} onSubmit={e => handleSaveUpdatedUser(e, 'email')}>
            <label htmlFor="updateEmail" className={styles.boldLabel}>
              Email:
            </label>
            <input
              type="email"
              required
              id="updateEmail"
              name="updateEmail"
              value={updatedEmail}
              onChange={e => setUpdatedEmail(e.target.value)}
            />
            <div>
              <button className={styles.saveBtn} type="submit">
                Save
              </button>
              <button className={styles.cancelBtn} type="button" onClick={() => setEditEmail(false)}>
                Cancel
              </button>
            </div>
          </form>
        )}
        {!editPassword && (
          <div className={styles.flexRow}>
            <p className={styles.bold}>Password:</p>
            <p className={styles.text}>********</p>
            <button aria-label="edit Password" className={styles.iconBtn} type="button" onClick={() => setEditPassword(true)}>
              <img src={edit} alt="edit icon"></img>
            </button>
          </div>
        )}
        {editPassword && (
          <form onSubmit={e => handleSaveUpdatedUser(e, 'password')}>
            <div className={styles.flexRow}>
              <label htmlFor="updatePassword" className={styles.boldLabel}>
                New password (at least 8 characters):
              </label>
              <input
                type="Password"
                required
                id="updatePassword"
                name="updatePassword"
                minLength={8}
                value={updatedPassword}
                onChange={e => setUpdatedPassword(e.target.value)}
              />
            </div>
            <div className={styles.flexRow}>
              <label htmlFor="confirmUpdatePassword" className={styles.boldLabel}>
                Confirm new password:
              </label>
              <input
                type="Password"
                required
                id="confirmUpdatePassword"
                name="confirmUpdatePassword"
                minLength={8}
                value={confirmUpdatedPassword}
                onChange={e => setConfirmUpdatedPassword(e.target.value)}
              />
              {!passwordMatch && <p className={styles.error}>The passwords do not match</p>}
            </div>
            <div className={styles.flexRow}>
              <button className={styles.saveBtn} type="submit">
                Save
              </button>
              <button className={styles.cancelBtn} type="button" onClick={() => setEditPassword(false)}>
                Cancel
              </button>
            </div>
          </form>
        )}
        <button onClick={openModal} className={styles.deleteBtn}>
          Delete account
        </button>
      </section>
      <Modal
        display={showModal}
        onClose={() => {
          setShowModal(false)
        }}
        title="Are you sure you want to delete your account?"
      >
        <>
          <p>This is irreversible. All your data will be removed permanently from the game.</p>
          <button onClick={handleDelete} className={styles.saveBtn}>
            Yes, I'm sure
          </button>
          <button onClick={() => setShowModal(false)} className={styles.cancelBtn}>
            Cancel
          </button>
        </>
      </Modal>
    </main>
  )
}

export default Profile
