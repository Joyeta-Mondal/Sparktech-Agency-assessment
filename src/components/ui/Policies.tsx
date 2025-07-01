// import { Card, CardContent } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Clock, CreditCard, Ban, Users, Baby, DollarSign } from 'lucide-react';

// interface PolicyItem {
//   id: string;
//   title: string;
//   icon: React.ReactNode;
//   content: {
//     availability?: string;
//     description?: string;
//     childPolicies?: string[];
//     cotPolicies?: string[];
//     additionalInfo?: string[];
//   };
// }

// const Policies: React.FC = () => {
//   const policies: PolicyItem[] = [
//     {
//       id: 'checkin',
//       title: 'Check-in',
//       icon: <Clock className="h-5 w-5 text-green-600" />,
//       content: {
//         availability: 'Available 24 hours',
//         description: 'Guests are required to show a photo identification and credit card upon check-in. You\'ll need to let the property know in advance what time you\'ll arrive.'
//       }
//     },
//     {
//       id: 'checkout',
//       title: 'Check-out',
//       icon: <Clock className="h-5 w-5 text-blue-600" />,
//       content: {
//         availability: 'Available 24 hours'
//       }
//     },
//     {
//       id: 'cancellation',
//       title: 'Cancellation/ prepayment',
//       icon: <CreditCard className="h-5 w-5 text-orange-600" />,
//       content: {
//         description: 'Cancellation and prepayment policies vary according to accommodation type. Please check what conditions may apply to each option when making your selection.'
//       }
//     },
//     {
//       id: 'children',
//       title: 'Children and beds',
//       icon: <Baby className="h-5 w-5 text-purple-600" />,
//       content: {
//         childPolicies: [
//           'Children of any age are welcome.',
//           'Children 12 years and above will be charged as adults at this property.',
//           'To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.'
//         ],
//         cotPolicies: [
//           'The number of extra beds allowed is dependent on the option you choose.',
//           'Please check your selected option for more information.',
//           'There are no cots available at this property.',
//           'All extra beds are subject to availability.'
//         ]
//       }
//     },
//     {
//       id: 'age',
//       title: 'No age restriction',
//       icon: <Users className="h-5 w-5 text-teal-600" />,
//       content: {
//         description: 'There is no age requirement for check-in'
//       }
//     },
//     {
//       id: 'pets',
//       title: 'Pets',
//       icon: <Ban className="h-5 w-5 text-red-600" />,
//       content: {
//         description: 'Pets are not allowed.'
//       }
//     },
//     {
//       id: 'payment',
//       title: 'Cash only',
//       icon: <DollarSign className="h-5 w-5 text-green-600" />,
//       content: {
//         description: 'This property only accepts cash payments.'
//       }
//     }
//   ];

//   const renderPolicyContent = (policy: PolicyItem) => {
//     const { content } = policy;
    
//     return (
//       <div className="space-y-3">
//         {/* Availability Badge */}
//         {content.availability && (
//           <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
//             {content.availability}
//           </Badge>
//         )}
        
//         {/* Main Description */}
//         {content.description && (
//           <p className="text-gray-600 text-sm leading-relaxed">
//             {content.description}
//           </p>
//         )}
        
//         {/* Child Policies */}
//         {content.childPolicies && (
//           <div className="space-y-2">
//             <h4 className="font-medium text-gray-900 text-sm">Child policies</h4>
//             <ul className="space-y-1">
//               {content.childPolicies.map((policy, index) => (
//                 <li key={index} className="text-gray-600 text-sm">
//                   {policy}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
        
//         {/* Cot and Extra Bed Policies */}
//         {content.cotPolicies && (
//           <div className="space-y-2">
//             <h4 className="font-medium text-gray-900 text-sm">Cot and extra bed policies</h4>
//             <ul className="space-y-1">
//               {content.cotPolicies.map((policy, index) => (
//                 <li key={index} className="text-gray-600 text-sm">
//                   {policy}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
        
//         {/* Additional Info */}
//         {content.additionalInfo && (
//           <div className="space-y-1">
//             {content.additionalInfo.map((info, index) => (
//               <p key={index} className="text-gray-600 text-sm">
//                 {info}
//               </p>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4 bg-white">
//       {/* Header */}
//       <div className="mb-6">
//         <h2 className="text-2xl font-bold text-gray-900">Policies</h2>
//       </div>

//       {/* Policies Grid */}
//       <div className="border border-gray-200 rounded-lg divide-y divide-gray-200 px-4 space-y-1">
//         {policies.map((policy, index) => (
//           <Card key={policy.id} className="border-l-0 border-r-0 border-t-0 rounded-none shadow-none border-b border-gray-200 last:border-b-0">
//             <CardContent className="p-0">
//               <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-1">
//                 {/* Left Column - Policy Title */}
//                 <div className="lg:col-span-1">
//                   <div className="flex items-center gap-3">
//                     {policy.icon}
//                     <h3 className="font-semibold text-gray-900 text-base">
//                       {policy.title}
//                     </h3>
//                   </div>
//                 </div>

//                 {/* Right Column - Policy Content */}
//                 <div className="lg:col-span-2">
//                   {renderPolicyContent(policy)}
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

     
//     </div>
//   );
// };

// export default Policies;



import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      icon: <Clock className="h-5 w-5 text-green-600" />,
      content: {
        availability: "Available 24 hours",
        description:
          "Guests are required to show a photo identification and credit card upon check-in. You'll need to let the property know in advance what time you'll arrive.",
      },
    },
    {
      id: "checkout",
      title: "Check-out",
      icon: <Clock className="h-5 w-5 text-blue-600" />,
      content: {
        availability: "Available 24 hours",
      },
    },
    {
      id: "cancellation",
      title: "Cancellation/ prepayment",
      icon: <CreditCard className="h-5 w-5 text-orange-600" />,
      content: {
        description:
          "Cancellation and prepayment policies vary according to accommodation type. Please check what conditions may apply to each option when making your selection.",
      },
    },
    {
      id: "children",
      title: "Children and beds",
      icon: <Baby className="h-5 w-5 text-purple-600" />,
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
      icon: <Users className="h-5 w-5 text-teal-600" />,
      content: {
        description: "There is no age requirement for check-in",
      },
    },
    {
      id: "pets",
      title: "Pets",
      icon: <Ban className="h-5 w-5 text-red-600" />,
      content: {
        description: "Pets are not allowed.",
      },
    },
    {
      id: "payment",
      title: "Cash only",
      icon: <DollarSign className="h-5 w-5 text-green-600" />,
      content: {
        description: "This property only accepts cash payments.",
      },
    },
  ];

  const renderPolicyContent = (policy: PolicyItem) => {
    const { content } = policy;

    return (
      <div className="space-y-3 mt-2">
        {content.availability && (
          <Badge
            variant="secondary"
            className="bg-green-50 text-green-700 border-green-200"
          >
            {content.availability}
          </Badge>
        )}

        {content.description && (
          <p className="text-gray-600 text-sm leading-relaxed">
            {content.description}
          </p>
        )}

        {content.childPolicies && (
          <div className="space-y-2">
            <h4 className="font-medium text-gray-900 text-sm">Child policies</h4>
            <ul className="list-disc list-inside space-y-1">
              {content.childPolicies.map((policy, index) => (
                <li key={index} className="text-gray-600 text-sm">
                  {policy}
                </li>
              ))}
            </ul>
          </div>
        )}

        {content.cotPolicies && (
          <div className="space-y-2">
            <h4 className="font-medium text-gray-900 text-sm">
              Cot and extra bed policies
            </h4>
            <ul className="list-disc list-inside space-y-1">
              {content.cotPolicies.map((policy, index) => (
                <li key={index} className="text-gray-600 text-sm">
                  {policy}
                </li>
              ))}
            </ul>
          </div>
        )}

        {content.additionalInfo && (
          <div className="space-y-1">
            {content.additionalInfo.map((info, index) => (
              <p key={index} className="text-gray-600 text-sm">
                {info}
              </p>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 bg-white">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Policies</h2>

      <div className="space-y-4">
        {policies.map((policy) => (
          <Card
            key={policy.id}
            className="border border-gray-200 rounded-lg shadow-sm"
          >
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                {/* Title + Icon */}
                <div className="flex items-center gap-3 min-w-[180px]">
                  {policy.icon}
                  <h3 className="font-semibold text-gray-900 text-base">
                    {policy.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="flex-1">{renderPolicyContent(policy)}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Policies;
