import React from "react";
import Banner from "../../componets/website/Banner";
import { companyDetails } from "../../constant";

const PrivacyPolicy = () => {
  return (
    <>
      <Banner page="Privacy Policy" />
      <div className="wrapper py-[5rem]">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-primary mb-4">Privacy Policy</h1>
              <p className="text-gray-600 mb-4">
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <p className="text-gray-700">
                VELANDIRCH AI ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website or use our services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Fill out contact forms on our website</li>
                <li>Request quotes or consultations</li>
                <li>Subscribe to our newsletters</li>
                <li>Apply for employment opportunities</li>
                <li>Engage with our services</li>
              </ul>
              <p className="text-gray-700 mb-4">
                This information may include your name, email address, phone number, company name, 
                and any other information you choose to provide.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on each page</li>
                <li>Referring website</li>
                <li>Device information</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide and maintain our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Analyze usage patterns and trends</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and abuse</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience. 
                Cookies are small text files stored on your device that help us:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve website functionality and performance</li>
              </ul>
              <p className="text-gray-700 mb-4">
                You can control cookie settings through your browser preferences. However, 
                disabling cookies may affect the functionality of our website.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                We may use third-party services that collect, monitor, and analyze data, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Google Analytics for website analytics</li>
                <li>Social media platforms for marketing purposes</li>
                <li>Email service providers for communications</li>
                <li>Payment processors for financial transactions</li>
              </ul>
              <p className="text-gray-700 mb-4">
                These third-party services have their own privacy policies, and we encourage 
                you to review them.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Encryption of sensitive data</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication procedures</li>
                <li>Secure data transmission protocols</li>
              </ul>
              <p className="text-gray-700 mb-4">
                However, no method of transmission over the internet or electronic storage 
                is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information only for as long as necessary to fulfill 
                the purposes outlined in this Privacy Policy, unless a longer retention period 
                is required or permitted by law.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to delete your personal information</li>
                <li>The right to restrict processing of your information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="text-gray-700 mb-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our website and services are not intended for children under the age of 13. 
                We do not knowingly collect personal information from children under 13. 
                If you are a parent or guardian and believe your child has provided us with 
                personal information, please contact us immediately.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of 
                any changes by posting the new Privacy Policy on this page and updating the 
                "Last updated" date. We encourage you to review this Privacy Policy periodically 
                to stay informed about how we protect your information.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Company:</strong> {companyDetails.name}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> {companyDetails.email}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> {companyDetails.phone}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Address:</strong> {companyDetails.address}
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Governing Law</h2>
              <p className="text-gray-700 mb-4">
                This Privacy Policy is governed by and construed in accordance with the laws 
                of India. Any disputes arising from this Privacy Policy will be subject to 
                the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
