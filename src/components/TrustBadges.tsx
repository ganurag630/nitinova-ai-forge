
import React from 'react';

const TrustBadges = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Trusted By Industry Leaders</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* These would normally be images of actual logos. Using placeholder styled divs for now */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center text-gray-500 font-semibold">AWS</div>
            <span className="text-sm text-gray-600">AWS Partner</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center text-gray-500 font-semibold">MS</div>
            <span className="text-sm text-gray-600">Microsoft Gold</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center text-gray-500 font-semibold">GCP</div>
            <span className="text-sm text-gray-600">Google Cloud</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center text-gray-500 font-semibold">ISO</div>
            <span className="text-sm text-gray-600">ISO 27001</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center text-gray-500 font-semibold">GDPR</div>
            <span className="text-sm text-gray-600">GDPR Compliant</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center text-gray-500 font-semibold">HIPAA</div>
            <span className="text-sm text-gray-600">HIPAA Ready</span>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            Recognized by <span className="font-medium">CIO Review</span> as a <span className="font-medium">Top 10 AI Solutions Provider</span> for 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
