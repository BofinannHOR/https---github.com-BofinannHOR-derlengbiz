import React from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../../components/NavBar";

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <div className="PrivacyPolicy lg:mx-36 flex flex-col text-slate-700 lg:p-10 mt-5 p-5 leading-relaxed tracking-wide">
        <Head>
          <title>គោលការណ៍​នៃភាព​ឯកជន</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div className="flex flex-row justify-between">
          {" "}
          <h2>Privacy Policy</h2>
          <div className=" w-auto ">
            <button className=" w-20 mr-3">
              <Link href="/privacy-policy">
                <a>ខ្មែរ</a>
              </Link>{" "}
            </button>
            <button className="w-20 rounded-lg p-1 bg-slate-800 text-white">
              {" "}
              <Link href="/privacy-policy/en" locale="en">
                <a>អង់គ្លេស</a>
              </Link>
            </button>
          </div>
        </div>
        <p>Last updated: 17/07/2020</p>
        <h3 className="mb-1 mt-4">Introduction</h3>
        <p>
          We know that sharing your personal information with us is based on
          trust. We take this seriously and are committed to ensuring that we
          respect your privacy when you visit our website or use our services.
          Please review this Statement carefully to learn about our privacy
          practices. We operate an online service that provides users with
          recommendations for travel and travel planning, including hotels,
          holiday rentals and other accommodations, attractions and experiences,
          restaurants, flights, cruises, tours and lots more. To start with an
          important fact: We shall never sell your email address to 3rd parties
          - period. We will only share your details with 3rd parties that you
          expressly consent to being shared with. We take your right to privacy
          seriously and want you to feel comfortable using our platform
          (website, apps and other digital services). This Privacy Policy deals
          with personally identifiable information (referred to as "Data" below)
          that may be collected by us on our site. This Policy does not apply to
          other entities that we do not own or control or persons that are not
          our employees, agents or within our control. Please take time to read
          our Terms and Conditions.
        </p>
        <h3 className="mb-1 mt-4">1. Processing of Data</h3>
        <p>
          Derleng processes your personal data that we receive from you as part
          of our business relationship. The information and data concerning you
          are necessary for the management of your order / your booking and
          additional services. Personal data includes your personal details
          (e.g. name, address, contact details, nationality). In addition, this
          may include order / booking data (e.g. payment orders), data from the
          fulfilment of our contractual obligation (e.g. insurance details),
          advertising and documentation data (e.g. br /owser records), register
          data, image and sound data (e.g. telephone recordings), information
          from your electronic communication with us (e.g. cookies) as well as
          data for compliance with legal requirements. Please take note that
          your user name, e-mail address, or other submissions that you make on
          this site may contain your real name or other personally identifiable
          information and, as a result, may appear on this site. Like many
          platforms, we may also automatically receive general information that
          is contained in our server log files such as your IP address and
          cookie information. Information about how advertising may be served on
          this site (if at all) is set forth below. Derleng uses 3rd party
          payment gateways, there are Payway of ABA Bank, Pipay, Wing, to ensure
          your personal and sensitive credit card information is securely
          stored. Your credit card details are NOT stored on Derleng, instead
          your information is securely stored and encrypted with these 3rd party
          companies when every booking you have made will be redirected to their
          payment platform to process the payment. Derleng and its employees are
          unable to view your cardholder information as these payment gateway
          companies truncate your credit card details.
        </p>
        <h3 className="mb-1 mt-4">
          2. Use of Data, Purposes and Legal Basis of the Data Processing
        </h3>
        <p>
          We process your personal data for the order management / your booking
          and the execution of your orders and all activities required for the
          operation and management of a tour br /oker. We may use Data to
          customize and improve your user experience on this site and to contact
          you. We will make efforts so that your Data will not be provided to
          third parties unless: (i) provided for otherwise in this Privacy
          Policy; (ii) we obtain your consent, such as when you choose to opt-in
          or opt-out to the sharing of Data; (iii) a service provided on our
          site requires the interaction with or is provided by a third party, by
          way of example an Application Service Provider; (iv) pursuant to legal
          process or law enforcement; (v) we find that your use of this site
          violates our this Policy, Terms and Conditions, other usage guidelines
          or as deemed reasonably necessary by us to protect our legal rights
          and/or property; (vi) or (vi) this site is purchased by a third party
          whereby that third party will be able to use the Data in the same
          manner as we can as set forth in this Policy. In the event you choose
          to use links that appear on our site to visit other platforms, you are
          advised to read the privacy policies that appear on those sites.
        </p>
        <h3 className="mb-1 mt-4">3. Recipients of Data</h3>
        <p>
          We will transfer your data to the tour operator who will carry out the
          tour you booked. Your data may therefore be transferred to a party
          outside Cambodia (a “third country”), if the tour operator you chose
          resides in a third country and / or the tour takes place in a third
          country. By choosing an tour operator in a third country / a tour that
          takes place in a third country you are aware of the fact that the
          transfer of personal data to a third country is necessary for the
          performance of the contract between you and Derleng and / or the
          implementation of pre-contractual measures taken at your request, and
          / or necessary for the conclusion or performance of a contract
          concluded in your interest between Derleng and the tour operator. We
          share personal data with advertising partners, including your email
          address, as part of the marketing of our services through third
          parties (to ensure that relevant advertisements are shown to the right
          audience). We strive to only share email addresses in hashed form to
          enable the matching of your email address with an existing customer
          database so that your email address cannot be used for other purposes.
        </p>
        <h3 className="mb-1 mt-4">4. Information Security</h3>
        <p>
          Our Website and App has stringent security measures in place to
          protect the loss, misuse, and alteration of the information under our
          control. Whenever you change or access your account information, we
          offer the use of a secure server. Once your information is in our
          possession we adhere to strict security guidelines, protecting it
          against unauthorized access.
        </p>
        <h3 className="mb-1 mt-4">5. Cookies</h3>
        <p>
          Like many platforms, we set and use cookies to enhance your user
          experience, such as retaining your personal settings. Advertisements
          may appear on our platform and, if so, may set and access cookies on
          your computer and is subject to the privacy policy of those parties
          providing the advertisement.
        </p>
        <h3 className="mb-1 mt-4">6. Children</h3>
        <p>
          We do not allow persons who are ages eighteen or younger to become
          members of this site or application.
        </p>
        <h3 className="mb-1 mt-4">
          7. Editing or Deleting Your Account Information
        </h3>
        <p>
          We provide you with the ability to edit the information in your
          account by signing into your Account. You may request deletion of your
          user account by contacting us. Content or other data that you may have
          provided to us and that is not contained within your user account,
          such as posts that may appear within our forums, may continue to
          remain on our site at our discretion even though your user account is
          deleted. Please see our Terms and Conditions.
        </p>
        <h3 className="mb-1 mt-4">8. Changes to this Privacy Policy</h3>
        <p>
          We may make changes to this Policy from time to time without
          notification.
        </p>
        <h3 className="mb-1 mt-4">9. NO GUARANTEES</h3>
        <p>
          While this Privacy Policy states our standards for maintenance of Data
          and we will make efforts to meet them, we are not in a position to
          guarantee these standards. There may be factors beyond our control
          that may result in disclosure of data. As a consequence, we disclaim
          any warranties or representations relating to maintenance or
          nondisclosure of Data.
        </p>
        <h3 className="mb-1 mt-4">10. Contact Information</h3>
        <p>
          If you have any questions about this Policy or our platform, please
          feel free to at the following address:
        </p>
        Derleng Travel Technology Co., Ltd
        <br />
        #0677, Group 25, Banteay Chas, Slor Kram, Siem Reap, Cambodia 17251
        <br />
        Phone: <a href="tel:+85569955545">(+855) 69 955 545</a>
        <br />
        Or by email:{" "}
        <a href="mailto::service@derleng.biz">service@derleng.biz</a>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
