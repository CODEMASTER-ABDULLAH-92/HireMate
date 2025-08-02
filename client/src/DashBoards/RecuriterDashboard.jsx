// import React, { useContext, useEffect, useState } from "react";
// import {
//   Award,
//   Users,
//   FileText,
//   CheckCircle,
//   XCircle,
//   Clock,
//   Plus,
//   Search,
//   Bell,
//   UserCircle,
//   ChevronDown,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// import axios from "axios";
// import { toast } from "react-toastify";
// import Cookies from "js-cookie";
// import { AppContext } from "../Context/ContextApi";
// const RecuriterDashBoard = () => {
//   const { data, url ,totalApplications} = useContext(AppContext);
//   const [scholarData, setScholarData] = useState([]);
//   const recruiterId = localStorage.getItem("recruiterId");
//   console.log("recruiterId::", recruiterId );
  
//   const handleDelete = async (id) => {
//     try {
//       const response = await axios.delete(
//         `${url}/api/scholarship/remove-scholarShipDetails/${id}`
//       );
//       if (response.data.success) {
//         toast.success("Scholarship deleted successfully");
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   const logoutRecuriter = async () => {
//     try {
//       const response = await axios.post(
//         `${url}/api/recruiter/recruiter-logout`,
//         {},
//         { withCredentials: true }
//       );
//       if (response.data.success) {
//         Cookies.remove("tokenR");
//         toast.success(response.data.message);
//         localStorage.removeItem("nameR");
//         localStorage.removeItem("emailR");
//         localStorage.removeItem("recruiterId");
//       }
//     } catch (error) {
//       error("Err in Logout ", error);
//       toast.error(error.response.data.message);
//     }
//   };
//   const getingSingleData = async () => {
//     try {
//       const response = await axios.get(
//         `${url}/api/scholarship/get-single-scholar-info/${recruiterId.trim()}`,{withCredentials:true}
//       );
//       if (response.data.success) {
//         setScholarData(response.data.data);
//       }
//     } catch (error) {
//       console.error("Err in getting Data", error);
//       toast.error(error.response.data.message);
//     }
//   };
//   console.log(scholarData);
  
//   useEffect(() => {
//     getingSingleData();
//   }, []);
//   console.log(scholarData);
  
//   const stats = [
//     {
//       title: "Total Scholarships",
//       value: totalApplications,
//       icon: <Award size={20} className="text-blue-600" />,
//       change: "+5 this month",
//     },
//     {
//       title: "Active Applicants",
//       value: "1,248",
//       icon: <Users size={20} className="text-green-600" />,
//       change: "12% increase",
//     },
//     {
//       title: "Applications",
//       value: "856",
//       icon: <FileText size={20} className="text-purple-600" />,
//       change: "32 new today",
//     },
//     {
//       title: "Approval Rate",
//       value: "68%",
//       icon: <CheckCircle size={20} className="text-yellow-600" />,
//       change: "2% better",
//     },
//   ];

//   // const recentScholarships = [
//   //   { id: 1, name: "Merit Scholarship 2023", status: "active", applications: 245, deadline: "Jun 15, 2023" },
//   //   { id: 2, name: "Need-Based Aid", status: "active", applications: 189, deadline: "Jul 1, 2023" },
//   //   { id: 3, name: "STEM Excellence Award", status: "draft", applications: 0, deadline: "Aug 5, 2023" },
//   //   { id: 4, name: "Sports Scholarship", status: "ended", applications: 112, deadline: "May 1, 2023" },
//   // ];

//   const recentApplications = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       scholarship: "Merit Scholarship",
//       status: "pending",
//       date: "2 hours ago",
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       scholarship: "Need-Based Aid",
//       status: "approved",
//       date: "5 hours ago",
//     },
//     {
//       id: 3,
//       name: "Emma Williams",
//       scholarship: "Merit Scholarship",
//       status: "rejected",
//       date: "1 day ago",
//     },
//     {
//       id: 4,
//       name: "David Kim",
//       scholarship: "Need-Based Aid",
//       status: "pending",
//       date: "1 day ago",
//     },
//   ];

//   const getStatusBadge = (status) => {
//     switch (status) {
//       case "active":
//         return (
//           <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
//             Active
//           </span>
//         );
//       case "draft":
//         return (
//           <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
//             Draft
//           </span>
//         );
//       case "ended":
//         return (
//           <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
//             Ended
//           </span>
//         );
//       case "pending":
//         return (
//           <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
//             Pending
//           </span>
//         );
//       case "approved":
//         return (
//           <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
//             Approved
//           </span>
//         );
//       case "rejected":
//         return (
//           <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
//             Rejected
//           </span>
//         );
//       default:
//         return (
//           <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
//             {status}
//           </span>
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Top Navigation */}
//       <header className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16 items-center">
//             <Link to="/recruiter-dashboard" className="text-xl font-bold text-gray-900 from-red-500 to-blue-500 bg-gradient-to-r">
//               Scholarship Admin Portal
//             </Link>

//             <div className="flex items-center space-x-4">


//               <div className="flex items-center">
//                 <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
//                   {localStorage.getItem("nameR") && localStorage.getItem("nameR").charAt(0).toLocaleUpperCase() || ""}
//                   {localStorage.getItem("nameR") && localStorage.getItem("nameR").charAt(1).toLocaleUpperCase() || ""}
//                 </div>
//                 <div className="relative group inline-block">
//                   <ChevronDown
//                     size={16}
//                     className="ml-1 text-gray-500  md:inline cursor-pointer"
//                   />
//                   <Link
//                     to={"/"}
//                     onClick={() => logoutRecuriter()}
//                     className="absolute top-7 right-0 hidden group-hover:block bg-gray-200 p-2 rounded shadow"
//                   >
//                     Logout
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-gray-500">
//                     {stat.title}
//                   </p>
//                   <p className="text-2xl font-semibold text-gray-900 mt-1">
//                     {stat.value}
//                   </p>
//                   <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
//                 </div>
//                 <div className="p-3 rounded-lg bg-gray-50">{stat.icon}</div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Quick Actions */}
//         <div className="mb-8">
//           <div className="flex flex-wrap gap-3">
//             <Link
//               to={"/dashboard/add-data"}
//               className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
//             >
//               <Plus size={16} />
//               Create New Scholarship
//             </Link>
//             <button className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
//               <FileText size={16} />
//               View All Applications
//             </button>
//           </div>
//         </div>

//         {/* Recent Scholarships */}
//         <div className="bg-white shadow-sm rounded-lg border border-gray-200 mb-8">
//           <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
//             <h2 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
//               <Award size={20} className="text-blue-500" />
//               Recent Scholarships
//             </h2>
//             <button className="text-sm text-blue-600 hover:text-blue-800">
//               View All
//             </button>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Scholarship Name
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Status
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Applications
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Deadline
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {scholarData.map((scholarship) => (
//                   <tr key={scholarship.id}>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="font-medium text-gray-900">
//                         {scholarship.title}
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       {getStatusBadge(scholarship.status)}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-gray-500">
//                       {scholarship.applications}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-gray-500">
//                       {scholarship.deadline}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                       <Link
//                         to={`/dashboard/update-scholarship/${scholarship._id}`}
//                         className="text-blue-600 hover:text-blue-900 mr-3"
//                       >
//                         Edit
//                       </Link>
//                       <button
//                         onClick={() => handleDelete(scholarship._id)}
//                         className="text-red-600 "
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Recent Applications */}
//         <div className="bg-white shadow-sm rounded-lg border border-gray-200">
//           <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
//             <h2 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
//               <FileText size={20} className="text-blue-500" />
//               Recent Applications
//             </h2>
//             <div className="flex items-center">
//               <div className="relative mr-4">
//                 <Search
//                   size={16}
//                   className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Search applications..."
//                   className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition text-sm w-64"
//                 />
//               </div>
//               <button className="text-sm text-blue-600 hover:text-blue-800">
//                 View All
//               </button>
//             </div>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Applicant
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Scholarship
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Status
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Date
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {recentApplications.map((application) => (
//                   <tr key={application.id}>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="font-medium text-gray-900">
//                         {application.name}
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-gray-500">
//                       {application.scholarship}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       {getStatusBadge(application.status)}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-gray-500">
//                       {application.date}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                       <a
//                         href="#"
//                         className="text-blue-600 hover:text-blue-900 mr-3"
//                       >
//                         Review
//                       </a>
//                       {application.status === "pending" && (
//                         <>
//                           <a
//                             href="#"
//                             className="text-green-600 hover:text-green-900 mr-3"
//                           >
//                             Approve
//                           </a>
//                           <a
//                             href="#"
//                             className="text-red-600 hover:text-red-900"
//                           >
//                             Reject
//                           </a>
//                         </>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default RecuriterDashBoard;


import React, { useContext, useEffect, useState } from "react";
import {
  Award,
  Users,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  Plus,
  Search,
  Bell,
  UserCircle,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { AppContext } from "../Context/ContextApi";

const RecuriterDashBoard = () => {
  const { data, url, totalApplications } = useContext(AppContext);
  const [scholarData, setScholarData] = useState([]);
  const recruiterId = localStorage.getItem("recruiterId");
  
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${url}/api/scholarship/remove-scholarShipDetails/${id}`
      );
      if (response.data.success) {
        toast.success("Scholarship deleted successfully");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const logoutRecuriter = async () => {
    try {
      const response = await axios.post(
        `${url}/api/recruiter/recruiter-logout`,
        {},
        { withCredentials: true }
      );
      if (response.data.success) {
        Cookies.remove("tokenR");
        toast.success(response.data.message);
        localStorage.removeItem("nameR");
        localStorage.removeItem("emailR");
        localStorage.removeItem("recruiterId");
      }
    } catch (error) {
      error("Err in Logout ", error);
      toast.error(error.response.data.message);
    }
  };

  const getingSingleData = async () => {
    try {
      const response = await axios.get(
        `${url}/api/scholarship/get-single-scholar-info/${recruiterId.trim()}`,
        { withCredentials: true }
      );
      if (response.data.success) {
        setScholarData(response.data.data);
      }
    } catch (error) {
      console.error("Err in getting Data", error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getingSingleData();
  }, []);

  const stats = [
    {
      title: "Total Scholarships",
      value: totalApplications,
      icon: <Award size={20} className="text-[#B9FF66]" />,
      change: "+5 this month",
      bg: "bg-[#B9FF66]/10",
    },
    {
      title: "Active Applicants",
      value: "1,248",
      icon: <Users size={20} className="text-[#B9FF66]" />,
      change: "12% increase",
      bg: "bg-[#B9FF66]/10",
    },
    {
      title: "Applications",
      value: "856",
      icon: <FileText size={20} className="text-[#B9FF66]" />,
      change: "32 new today",
      bg: "bg-[#B9FF66]/10",
    },
    {
      title: "Approval Rate",
      value: "68%",
      icon: <CheckCircle size={20} className="text-[#B9FF66]" />,
      change: "2% better",
      bg: "bg-[#B9FF66]/10",
    },
  ];

  const recentApplications = [
    {
      id: 1,
      name: "Sarah Johnson",
      scholarship: "Merit Scholarship",
      status: "pending",
      date: "2 hours ago",
    },
    {
      id: 2,
      name: "Michael Chen",
      scholarship: "Need-Based Aid",
      status: "approved",
      date: "5 hours ago",
    },
    {
      id: 3,
      name: "Emma Williams",
      scholarship: "Merit Scholarship",
      status: "rejected",
      date: "1 day ago",
    },
    {
      id: 4,
      name: "David Kim",
      scholarship: "Need-Based Aid",
      status: "pending",
      date: "1 day ago",
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
      case "approved":
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        );
      case "draft":
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
            Draft
          </span>
        );
      case "ended":
      case "rejected":
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        );
      case "pending":
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
            Pending
          </span>
        );
      default:
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Top Navigation */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link 
              to="/recruiter-dashboard" 
              className="text-xl font-bold text-gray-800"
            >
              Scholarship <span className="text-[#B9FF66]">Admin</span> Portal
            </Link>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-[#B9FF66] flex items-center justify-center text-gray-800 font-medium">
                  {localStorage.getItem("nameR")?.charAt(0).toUpperCase() || ""}
                  {localStorage.getItem("nameR")?.charAt(1).toUpperCase() || ""}
                </div>
                <div className="relative group inline-block">
                  <ChevronDown
                    size={16}
                    className="ml-1 text-gray-500 md:inline cursor-pointer"
                  />
                  <Link
                    to={"/"}
                    onClick={() => logoutRecuriter()}
                    className="absolute top-7 right-0 hidden group-hover:block bg-gray-200 p-2 rounded-lg shadow hover:bg-gray-300 transition"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bg} p-6 rounded-2xl shadow-sm border border-gray-200`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-semibold text-gray-800 mt-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                </div>
                <div className="p-3 rounded-full bg-white">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            <Link
              to={"/dashboard/add-data"}
              className="flex items-center gap-2 bg-[#B9FF66] hover:bg-[#A5E55C] text-gray-800 px-4 py-3 rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition"
            >
              <Plus size={16} />
              Create New Scholarship
            </Link>
            <button className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-3 rounded-xl text-sm font-medium shadow-sm hover:shadow-md transition">
              <FileText size={16} />
              View All Applications
            </button>
          </div>
        </div>

        {/* Recent Scholarships */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 mb-8">
          <div className="bg-[#B9FF66] px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
              <Award size={24} />
              Recent Scholarships
            </h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Scholarship Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Applications
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Deadline
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {scholarData.map((scholarship) => (
                    <tr key={scholarship.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">
                          {scholarship.title}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(scholarship.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                        {scholarship.applications}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                        {scholarship.deadline}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link
                          to={`/dashboard/update-scholarship/${scholarship._id}`}
                          className="text-[#B9FF66] hover:text-[#A5E55C] mr-3"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(scholarship._id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Recent Applications */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <div className="bg-[#B9FF66] px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
              <FileText size={24} />
              Recent Applications
            </h2>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search applications..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition text-sm w-64"
                />
              </div>
              <button className="text-sm text-[#B9FF66] hover:text-[#A5E55C] font-medium">
                View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Applicant
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Scholarship
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentApplications.map((application) => (
                    <tr key={application.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">
                          {application.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                        {application.scholarship}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(application.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                        {application.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-[#B9FF66] hover:text-[#A5E55C] mr-3"
                        >
                          Review
                        </a>
                        {application.status === "pending" && (
                          <>
                            <a
                              href="#"
                              className="text-green-600 hover:text-green-800 mr-3"
                            >
                              Approve
                            </a>
                            <a
                              href="#"
                              className="text-red-600 hover:text-red-800"
                            >
                              Reject
                            </a>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecuriterDashBoard;