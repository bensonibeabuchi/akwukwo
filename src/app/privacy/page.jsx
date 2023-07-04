import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className="w-[1500px] mx-auto p-24 ">
        <h2 className="p-8 text-center">Privacy Policy</h2>
        <div className="text-lg font-medium">
          <p className="py-4">
            This Privacy Policy describes how we collect, use, and handle your
            personal information when you visit our website.
          </p>

          <ul className="py-4 space-y-8">
            <li>
              <p className="font-semibold">Information Collection and Use</p>
              <p>
                We may collect personal information from you when you
                voluntarily submit it through our website. This may include your
                name, email address, phone number, or any other information you
                provide to us.
              </p>
              <p>
                We use this information solely for the purpose of communicating
                with you and providing the services you requested. We will never
                sell, rent, or share your personal information with third
                parties without your consent, except as required by law.
              </p>
            </li>
            <li>
              <p className="font-semibold">Log Data</p>
              <p>
                When you visit our website, our servers may automatically log
                certain information, such as your IP address, browser type,
                referring/exit pages, and the date and time of your visit. This
                information is used for analyzing trends, administering the
                site, and gathering demographic information. It is not linked to
                any personally identifiable information.
              </p>
            </li>
            <li>
              <p className="font-semibold">Cookies</p>
              <p>
                Our website may use cookies to enhance your browsing experience.
                A cookie is a small text file stored on your computer&apos;s hard
                drive that helps analyze web traffic or lets you know when you
                visit a particular site. Cookies allow web applications to
                respond to you as an individual. You can choose to accept or
                decline cookies. Most web browsers automatically accept cookies,
                but you can usually modify your browser settings to decline
                cookies if you prefer.
              </p>
            </li>
            <li>
              <p className="font-semibold">Data Security</p>
              <p>
                We take reasonable precautions to protect your personal
                information from unauthorized access, use, or disclosure.
                However, please note that no data transmission over the internet
                or electronic storage method is 100% secure. Therefore, while we
                strive to use commercially acceptable means to protect your
                personal information, we cannot guarantee its absolute security.
              </p>
            </li>
            <li>
              <p className=" font-semibold">External Links</p>
              <p>
                Our website may contain links to external sites that are not
                operated by us. We have no control over the content and
                practices of these sites and are not responsible for their
                privacy policies. We encourage you to review the privacy
                policies of any external sites you visit.
              </p>
            </li>
            <li>
              <p className="font-semibold">Changes to This Privacy Policy</p>
              <p>
                We reserve the right to update or change our Privacy Policy at
                any time. Any changes will be posted on this page. Your
                continued use of our website after any modifications to the
                Privacy Policy constitutes your acceptance of those changes.
              </p>
            </li>
            <li>
              <p>Contact Us</p>
              <p>
                If you have any questions or concerns about our Privacy Policy,
                please contact us at .
              </p>
            </li>
          </ul>
          <p className="">
            By using our website, you signify your acceptance of this Privacy
            Policy. If you do not agree to this Privacy Policy, please do not
            use our website.
          </p>
        </div>
      </div>
    </div>
  );
}
