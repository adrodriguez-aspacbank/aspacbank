import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const NotFound: React.FC = () => {
  return (
    <>
      <Seo
        title="Page Under Maintenance | ASPAC Bank"
        description="This page is currently under maintenance or coming soon. Return to the ASPAC Bank homepage to continue banking with us."
        canonical="https://www.aspacbank.com/404"
        noindex
      />

      <main className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-6 py-24 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Under Maintenance
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            This page is under maintenance
          </h1>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            We're working on this page and it will be back soon. In the
            meantime, let's get you back to safe banking.
          </p>
          <Link
            to="/"
            className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-primary/90 transition"
          >
            Back to Homepage
          </Link>
        </div>
      </main>
    </>
  );
};

export default NotFound;
