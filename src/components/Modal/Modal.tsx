import React, { useCallback, useEffect, useState } from 'react'
import ReactPortal from '../Portal/Portal'

import styles from './Modal.module.css'

interface ModalProps {
  display: boolean
  onClose: () => void
  title: string
  children: JSX.Element
}

const Modal = ({ display, title, children, onClose }: ModalProps) => {
  const [closeBtn, setCloseBtn] = useState<HTMLElement | null>()

  let closeButtonRef = useCallback(node => {
    if (node !== null) {
      setCloseBtn(node)
    }
  }, [])

  useEffect(() => {
    if (closeBtn) {
      closeBtn.focus()
    }
    return () => {
      setCloseBtn(null)
    }
  }, [closeBtn])

  useEffect(() => {
    const closeOnEscapeKey = (e: any) => (e.key === 'Escape' ? onClose() : null)
    document.body.addEventListener('keydown', closeOnEscapeKey)
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey)
    }
  }, [onClose])

  const handleClose = (e: any) => {
    const background = document.getElementById('modal-background')
    if (e.key === 'Enter' || e.key === ' ') {
      onClose()
    }
    if (e.target === background) {
      onClose()
    }
  }

  if (!display) {
    return null
  }

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <>
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="dialog_label"
          className={styles.modalBackground}
          id="modal-background"
          onClick={handleClose}
        />
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <button
              id="close-btn"
              className={styles.closeModalBtn}
              tabIndex={0}
              onClick={onClose}
              onKeyDown={handleClose}
              aria-label="Close modal"
              ref={closeButtonRef}
            >
              X
            </button>
          </div>
          <h2 id="dialog_label" className="h2small">
            {title}
          </h2>
          {children}
        </div>
      </>
    </ReactPortal>
  )
}

export default Modal
