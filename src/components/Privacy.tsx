import React from "react";
import { useLanguage } from "../context/language-context";
// import { Link } from "react-router-dom";

const Privacy = () => {
  const { language } = useLanguage();

  return (
    <React.Fragment>
      {language === "DE" ? (
        <article className="flex flex-col gap-6 max-w-[70vw] break-words">
          <h1>Datenschutz&shy;erkl&auml;rung</h1>
        </article>
      ) : (
        <article className="flex flex-col gap-6 max-w-[70vw] break-words">
          <h1>Privacy Policy</h1>
          <h2>1. Introduction</h2>

<p>Welcome to my Portfolio website. This Privacy Policy is designed to help you understand how your personal information is collected, used, and safeguarded when you visit or interact with this website.</p>

<h3>2. Information Collected</h3>
<p>Personal Information: We may collect personal information such as your name, email address, and other contact details when you voluntarily submit them through our contact form or other communication channels.<br></br>

Automated Information: Like many websites, we collect non-personal information automatically, such as your IP address, browser type, and operating system. This information helps us improve the functionality and user experience of our website.</p>

<h3>3. Use of Information</h3>

<p>We use the collected information for the following purposes:<br></br>

To respond to your inquiries and provide the services you request.<br></br>
To improve and optimize our website's performance and user experience.<br></br>
To send periodic emails regarding updates, new projects, or other relevant information (if you have opted to receive such communications).</p>
<h3>4. Cookies and Tracking Technologies</h3>

<p>We may use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings, but disabling them may affect certain functionalities.</p>

<h3>5. Data Sharing</h3>

<p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except for the purpose of providing the requested services or as required by law.</p>

<h3>6. Security Measures</h3>

<p>We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction.</p>

<h3>7. Third-Party Links</h3>

<p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of those websites.</p>

<h3>8. Your Choices</h3>

<p>You have the right to access, correct, or delete your personal information. If you have any questions or requests regarding your data, please contact us using the information provided below.</p>

<h3>9. Changes to This Privacy Policy</h3>

<p>I reserve the right to update and modify this Privacy Policy. Any changes will be effective immediately upon posting the revised policy on this page.</p>

<h3>10. Contact Information</h3>

<p>If you have any questions or concerns about this Privacy Policy, please contact me at my email.</p>

<h3>Thank you for visiting Alvin's Portfolio!</h3>







        </article>
      )}
    </React.Fragment>
  );
};

export default Privacy;
