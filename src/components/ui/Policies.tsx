import React from 'react';
import {
  Clock,
  CreditCard,
  Ban,
  Users,
  Baby,
  DollarSign,
} from "lucide-react";

interface PolicyItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: {
    availability?: string;
    description?: string;
    childPolicies?: string[];
    cotPolicies?: string[];
    additionalInfo?: string[];
  };
}

const Policies: React.FC = () => {
  const policies: PolicyItem[] = [
    {
      id: "checkin",
      title: "Check-in",
      icon: <Clock className="h-5 w-5 text-[#007DD0]" />,
      content: {
        availability: "Available 24 hours",
        description:
          "Guests are required to show a photo identification and credit card upon check-in. You'll need to let the property know in advance what time you'll arrive.",
      },
    },
    {
      id: "checkout",
      title: "Check-out",
      icon: <Clock className="h-5 w-5 text-[#007DD0]" />,
      content: {
        availability: "Available 24 hours",
      },
    },
    {
      id: "cancellation",
      title: "Cancellation/ prepayment",
      icon: <CreditCard className="h-5 w-5 text-[#007DD0]" />,
      content: {
        description:
          "Cancellation and prepayment policies vary according to accommodation type. Please check what conditions may apply to each option when making your selection.",
      },
    },
    {
      id: "children",
      title: "Children and beds",
      icon: <Baby className="h-5 w-5 text-[#007DD0]" />,
      content: {
        childPolicies: [
          "Children of any age are welcome.",
          "Children 12 years and above will be charged as adults at this property.",
          "To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.",
        ],
        cotPolicies: [
          "The number of extra beds allowed is dependent on the option you choose.",
          "Please check your selected option for more information.",
          "There are no cots available at this property.",
          "All extra beds are subject to availability.",
        ],
      },
    },
    {
      id: "age",
      title: "No age restriction",
      icon: <Users className="h-5 w-5 text-[#007DD0]" />,
      content: {
        description: "There is no age requirement for check-in",
      },
    },
    {
      id: "pets",
      title: "Pets",
      icon: <Ban className="h-5 w-5 text-[#007DD0]" />,
      content: {
        description: "Pets are not allowed.",
      },
    },
    {
      id: "payment",
      title: "Cash only",
      icon: <DollarSign className="h-5 w-5 text-[#007DD0]" />,
      content: {
        description: "This property only accepts cash payments.",
      },
    },
  ];

  const renderPolicyContent = (policy: PolicyItem) => {
    const { content } = policy;

    return (
      <div className="space-y-3">
        {content.availability && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-[#007DD0] border border-blue-200">
            {content.availability}
          </span>
        )}

        {content.description && (
          <p className="text-gray-700 text-sm leading-relaxed">
            {content.description}
          </p>
        )}

        {content.childPolicies && (
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 text-sm">Child policies</h4>
            <div className="space-y-1">
              {content.childPolicies.map((policy, index) => (
                <p key={index} className="text-gray-700 text-sm leading-relaxed">
                  {policy}
                </p>
              ))}
            </div>
          </div>
        )}

        {content.cotPolicies && (
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 text-sm">
              Cot and extra bed policies
            </h4>
            <div className="space-y-1">
              {content.cotPolicies.map((policy, index) => (
                <p key={index} className="text-gray-700 text-sm leading-relaxed">
                  {policy}
                </p>
              ))}
            </div>
          </div>
        )}

        {content.additionalInfo && (
          <div className="space-y-1">
            {content.additionalInfo.map((info, index) => (
              <p key={index} className="text-gray-700 text-sm leading-relaxed">
                {info}
              </p>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="lg:px-[100px] mx-auto px-4 py-6 bg-white">
      <h2 className="text-[25px] font-bold text-[#252525] mb-6">Policies</h2>

      <div className="space-y-0 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        {policies.map((policy, index) => (
          <div
            key={policy.id}
            className={`${
              index !== policies.length - 1 ? 'border-b border-gray-200' : ''
            } hover:bg-gray-50 transition-colors duration-150`}
          >
            <div className="p-4 sm:p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Title + Icon */}
                <div className="flex items-center gap-3 md:min-w-[220px] md:w-[220px] flex-shrink-0">
                  {policy.icon}
                  <h3 className="font-medium text-gray-900 text-base">
                    {policy.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="flex-1 md:pl-4">
                  {renderPolicyContent(policy)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Policies;