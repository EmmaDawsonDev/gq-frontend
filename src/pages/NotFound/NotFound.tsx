import InfoSection from '../../components/Layout/InfoSection'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main>
      <InfoSection bg="white">
        <h1>404 Page Not Found</h1>
        <Link to="/">Back to homepage</Link>
      </InfoSection>
    </main>
  )
}

export default NotFound
