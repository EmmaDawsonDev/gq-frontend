import InfoSection from '../../components/Layout/InfoSection'

const PrivacyPolicy = () => {
  return (
    <main>
      <InfoSection bg="white">
        <h1 className="h1small">Privacy Policy</h1>
        <p>This privacy policy will explain how geoQuizzr uses and protects personal data when you use our website.</p>
        <h2 className="h2small">What data do we collect?</h2>
        <p>
          In order to use geoQuizzr you must provide a username, email and password. The website uses geolocation to show you the nearest
          checkpoints but this information is never stored and your location is not tracked once you close the site.
        </p>
        <h2 className="h2small">How do we collect your data?</h2>
        <p>
          You provide the information directly when you register to use geoQuizzr for the first time. Your browser will track your location
          if given permission and the website is open.
        </p>
        <h2 className="h2small">How do we use your data?</h2>
        <p>
          Your data is only used to track which questions you have answered and which question checkpoints are nearby. Your data will never
          be used for advertising purposes. It will not be passed on to third party companies.
        </p>
        <h2 className="h2small">How do we store your data?</h2>
        <p>
          geoQuizzr data is securely stored in an encrypted database in Europe. Your username, email and password are stored as long as you
          have an account with geoQuizzr. Your location information is not stored.
        </p>
        <h2 className="h2small">What are your data protection rights?</h2>
        <p>geoQuizzr follows the rights set out by GDPR.</p>
        <h3 className="h3small">The right to access</h3>
        <p>You have the right to request copies of your personal data.</p>
        <h3 className="h3small">The right to rectification</h3>
        <p>You have the right to correct any information you believe to be inaccurate.</p>
        <h3 className="h3small">The right to erasure</h3>
        <p>You have the right to request that geoQuizzr erase your personal data.</p>
        <p>
          Please make your request to the following email: <a href="/">ADD CONTACT EMAIL HERE</a>
        </p>
        <h2 className="h2small">Cookies</h2>
        <p>geoQuizzr does not use cookies to track users or collect any information about the usage of the website.</p>
        <h2 className="h2small">Changes to the privacy policy</h2>
        <p>
          geoQuizzr keeps its privacy policy under regular review and places any updates on this webpage. This privacy policy was last
          updated on 10 April 2022.
        </p>
        <h2 className="h2small">How to contact us</h2>
        <p>
          Any questions should be sent to: <a href="/">ADD CONTACT EMAIL HERE</a>{' '}
        </p>
      </InfoSection>
    </main>
  )
}

export default PrivacyPolicy
