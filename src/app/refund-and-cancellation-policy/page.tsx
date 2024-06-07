import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        Refund and Cancellation Policy for MDAllTechSolution
      </h1>

      <p className="mb-4">
        At MDAllTechSolution, we strive to provide our customers with the best
        possible experience. This Refund and Cancellation Policy outlines the
        terms and conditions regarding cancellations and refunds for our
        services.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Order Cancellation</h2>
      <p className="mb-4">
        We understand that circumstances may change, and you may need to cancel
        your order. We accept same-day order cancellations. To cancel your
        order, please contact us within the same day of placing the order. You
        can reach us via email at{" "}
        <a
          href="mailto:contact@mdalltechsolutions.com"
          className="text-primary hover:underline"
        >
          contact@mdalltechsolutions.com
        </a>{" "}
        or by phone at 69860860607.
      </p>
      <p className="mb-4">
        Once we receive your cancellation request, we will process it promptly,
        and you will receive a confirmation email from us.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Refund Policy</h2>
      <p className="mb-4">
        If you cancel your order on the same day of placing it, you are eligible
        for a full refund. The refund process will be initiated immediately
        after we confirm your cancellation request. Please note that the refund
        may take 5-7 business days to reflect in your original method of
        payment, depending on your bank or payment provider.
      </p>
      <p className="mb-4">
        If you do not receive your refund within the specified timeframe, please
        contact us at{" "}
        <a
          href="mailto:contact@mdalltechsolutions.com"
          className="text-primary  hover:underline"
        >
          contact@mdalltechsolutions.com
        </a>{" "}
        or ,69860860607 and we will assist you further.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about our Refund and Cancellation
        Policy, please do not hesitate to contact us:
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
        <br />
        Phone: 69860860607{" "}
      </address>

      <p className="mb-4">
        This Refund and Cancellation Policy is effective as of [Date].
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
  );
}
