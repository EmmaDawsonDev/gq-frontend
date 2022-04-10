import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import InfoSection from '../../components/Layout/InfoSection'

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <main>
      <InfoSection bg="white">
        <h1 className="h1small">Terms and Conditions</h1>

        <p>Welcome to geoQuizzr!</p>
        <p>These terms and conditions outline the rules and regulations for the use of geoQuizzr, located at geoquizzr.netlify.app</p>
        <p>
          By accessing this website we assume you accept these terms and conditions. Do not continue to use geoQuizzr if you do not agree to
          take all of the terms and conditions stated on this page.
        </p>
        <p>
          The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements:
          “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company's terms and conditions. “The
          Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and
          ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our
          assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of
          provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above
          terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and
          therefore as referring to same.
        </p>

        <h2 className="h2small">Privacy Policy</h2>
        <p>
          geoQuizzr's <Link to="/privacy">Privacy Policy</Link> explains how your personal information is used and protected when using our
          services.
        </p>

        <h2 className="h2small">Cookies</h2>
        <p>This website does not use cookies to store or track any information about users.</p>

        <h2 className="h2small">License</h2>
        <p>MIT License</p>
        <p>Copyright 2022 - Emma Dawson</p>
        <p>
          Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files
          (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify,
          merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
          furnished to do so, subject to the following conditions:
        </p>
        <p>
          The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        </p>
        <p>
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
          LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
          CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
        <h2 className="h2small">Minors</h2>
        <p>
          By using geoQuizzr and agreeing to the terms and conditions you warrant and represent that you are at least 18 years old. Because
          most location-based outdoor games require a cellular data plan or GPS device and the ability to travel to specific locations,
          geoQuizzr are not directed toward anyone under the age of 16. Although individuals under 16 are welcome to play, their parents or
          guardians must own and manage their accounts. If you are under the age of 18 but at least 16, you may only use our services with
          the consent of a parent or legal guardian who agrees to be bound by this Agreement. If you are a parent or guardian and discover
          that your child under the age of 16 has an account not created and managed by you, then you may alert us via email and request
          that we delete that child’s personal information.
        </p>
        <h2 className="h2small">Disclaimer</h2>
        <p>
          You are 100% responsible for following the law when using geoQuizzr in public places. geoQuizzr takes no responsibility for damage
          to property or persons while using the website. Please make sure to follow all local laws while using geoQuizzr and exercise
          common sense and caution. Take account of weather, fitness level, terrain and outdoor experience when using geoQuizzr. All
          checkpoints are placed publicly and accessible at all times. If you find a checkpoint that is not accessible please contact us.
        </p>

        <p>
          As long as geoQuizzr and the information and services on geoquizzr.netlify.app are provided free of charge, we will not be liable
          for any loss or damage of any nature. Our services are provided AS-IS, AS-AVAILABLE and WITHOUT WARRANTY. We make no speicific
          promises about our services.
        </p>
      </InfoSection>
    </main>
  )
}

export default TermsAndConditions
