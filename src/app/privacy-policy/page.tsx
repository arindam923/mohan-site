import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">
          Privacy Policy for MDAllTechSolution
        </h1>

        <p className="mb-4">
          Welcome to MDAllTechSolution! Your privacy is critically important to
          us. MDAllTechSolution is located in India and is committed to
          protecting your privacy and ensuring you have a positive experience on
          our website. This Privacy Policy outlines how we collect, use, and
          safeguard your personal information.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
        <p className="mb-4">
          MDAllTechSolution collects minimal personal information from our
          users, specifically:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Full Name</strong>: For identification purposes when
            contacting or setting up meetings.
          </li>
          <li>
            <strong>Email Address</strong>: To facilitate communication and
            coordination for meetings or inquiries.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">
          How We Use Your Information
        </h2>
        <p className="mb-4">
          The information we collect is used solely for the following purposes:
        </p>
        <ol className="list-decimal pl-5 mb-4">
          <li>
            <strong>Communication</strong>: To respond to inquiries, provide
            information, and set up meetings as requested by you.
          </li>
          <li>
            <strong>Service Improvement</strong>: To enhance our services based
            on feedback and interactions.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mb-3">Data Protection</h2>
        <p className="mb-4">
          We take appropriate measures to protect your personal information from
          unauthorized access, use, or disclosure. MDAllTechSolution employs a
          variety of security technologies and procedures to help safeguard your
          personal information.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Sharing of Information</h2>
        <p className="mb-4">
          MDAllTechSolution does not share, sell, or lease your personal
          information to third parties. We will only disclose your personal
          information if required by law or in response to a valid legal
          process.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Data Retention</h2>
        <p className="mb-4">
          We retain your personal information only as long as necessary to
          fulfill the purposes outlined in this Privacy Policy unless a longer
          retention period is required or permitted by law.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Access</strong>: Request a copy of the personal information
            we hold about you.
          </li>
          <li>
            <strong>Correction</strong>: Request correction of any inaccuracies
            in your personal information.
          </li>
          <li>
            <strong>Deletion</strong>: Request the deletion of your personal
            information, subject to legal and contractual obligations.
          </li>
        </ul>
        <p className="mb-4">
          To exercise any of these rights, please contact us using the details
          provided below.
        </p>

        <h2 className="text-2xl font-semibold mb-3">
          Changes to This Privacy Policy
        </h2>
        <p className="mb-4">
          MDAllTechSolution reserves the right to update or change this Privacy
          Policy at any time. Any changes will be posted on this page, and we
          will notify you of significant changes via email if we have your
          contact information.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at:
        </p>
        <address className="mb-4">
          <strong>MDAllTechSolution</strong>
          <br />
          Jaipur,Rajasthan
          <br />
          Email:{" "}
          <a
            href="mailto:contact@mdalltechsolutions.com"
            className="text-primary hover:underline"
          >
            contact@mdalltechsolutions.com
          </a>
        </address>

        <p className="mb-4">This Privacy Policy is effective as of [Date].</p>

        <p className="mb-4">
          By using our website and services, you acknowledge that you have read
          and understood this Privacy Policy and agree to its terms.
        </p>

        <p className="mb-4">
          <strong>MDAllTechSolution</strong>
          <br />
          We develop amazing Websites for your business
          <br />
          <a
            href="https://www.mdalltechsolutions.co"
            className="text-primary hover:underline"
          >
            https://www.mdalltechsolutions.co
          </a>
        </p>
      </div>
    </div>
  );
}
