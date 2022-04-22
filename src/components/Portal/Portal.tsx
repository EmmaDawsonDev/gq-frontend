import { useState, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'

interface ReactPortalProps {
  children: JSX.Element
  wrapperId?: string
}

function ReactPortal({ children, wrapperId = 'react-portal-wrapper' }: ReactPortalProps) {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null)

  function createWrapperAndAppendToBody(wrapperId: string) {
    const wrapperElement = document.createElement('div')
    wrapperElement.setAttribute('id', wrapperId)
    document.body.appendChild(wrapperElement)
    return wrapperElement
  }

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId)
    let nodeAdded = false
    if (!element) {
      nodeAdded = true
      element = createWrapperAndAppendToBody(wrapperId)
    }
    setWrapperElement(element)

    // Clean up - delete the programatically created element
    return () => {
      if (nodeAdded && element?.parentNode) {
        element.parentNode.removeChild(element)
      }
    }
  }, [wrapperId])

  // wrapperElement state will be null on very first render.
  if (wrapperElement === null) return null

  return createPortal(children, wrapperElement)
}
export default ReactPortal
