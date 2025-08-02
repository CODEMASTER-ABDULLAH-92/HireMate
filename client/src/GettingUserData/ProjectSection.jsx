import React, { useState } from "react";
import { FaGithub, FaLink, FaLinkedin, FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectsPortfolio = () => {
  const [projects, setProjects] = useState([
    // Sample projects for demonstration
    {
      title: "E-commerce Website",
      description: "A full-featured online store with cart functionality and payment processing.",
      technologies: "React, Node.js, MongoDB, Stripe API",
      liveLink: "https://example-ecommerce.com",
      githubRepo: "https://github.com/user/ecommerce-site",
      linkedinPost: "https://linkedin.com/posts/ecommerce-project"
    },
    {
      title: "Task Management App",
      description: "Productivity application for organizing daily tasks with drag-and-drop interface.",
      technologies: "React, Firebase, Tailwind CSS",
      liveLink: "https://taskmanager.example.com",
      githubRepo: "https://github.com/user/task-manager"
    }
  ]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    liveLink: "",
    githubRepo: "",
    linkedinPost: ""
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isEditing) {
      // Update existing project
      const updatedProjects = [...projects];
      updatedProjects[editIndex] = formData;
      setProjects(updatedProjects);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Add new project
      setProjects([...projects, formData]);
    }
    
    // Reset form
    setFormData({
      title: "",
      description: "",
      technologies: "",
      liveLink: "",
      githubRepo: "",
      linkedinPost: ""
    });
  };

  const handleEdit = (index) => {
    setFormData(projects[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            My <span className="text-[#B9FF66]">Development</span> Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcase your best work to potential employers and clients with a clean, modern portfolio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project Form */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden lg:col-span-1 border border-gray-200">
            <div className="bg-[#B9FF66] px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-900">
                {isEditing ? "✏️ Edit Project" : "➕ Add New Project"}
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Project Title */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  Project Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition"
                  required
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition"
                  required
                ></textarea>
              </div>

              {/* Technologies */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  Technologies Used <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="technologies"
                  value={formData.technologies}
                  onChange={handleInputChange}
                  placeholder="React, Node.js, MongoDB, etc."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition"
                  required
                />
              </div>

              {/* Live Link */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium flex items-center gap-2">
                  <FaLink className="text-[#B9FF66]" />
                  Live Demo URL
                </label>
                <input
                  type="url"
                  name="liveLink"
                  value={formData.liveLink}
                  onChange={handleInputChange}
                  placeholder="https://your-project.com"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition"
                />
              </div>

              {/* GitHub Repo */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium flex items-center gap-2">
                  <FaGithub className="text-gray-800" />
                  GitHub Repository
                </label>
                <input
                  type="url"
                  name="githubRepo"
                  value={formData.githubRepo}
                  onChange={handleInputChange}
                  placeholder="https://github.com/your-username/project"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition"
                />
              </div>

              {/* LinkedIn Post */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium flex items-center gap-2">
                  <FaLinkedin className="text-blue-700" />
                  LinkedIn Post (Optional)
                </label>
                <input
                  type="url"
                  name="linkedinPost"
                  value={formData.linkedinPost}
                  onChange={handleInputChange}
                  placeholder="https://linkedin.com/posts/your-project"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#B9FF66] focus:border-[#B9FF66] outline-none transition"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#B9FF66] hover:bg-[#A5E55C] text-gray-900 font-medium py-3 px-4 rounded-xl transition flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                {isEditing ? (
                  <>
                    <FaEdit /> Update Project
                  </>
                ) : (
                  <>
                    <FaPlus /> Add Project
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Projects List */}
          <div className="lg:col-span-2 space-y-6">
            {projects.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200">
                <h3 className="text-xl font-medium text-gray-600">
                  No projects added yet
                </h3>
                <p className="text-gray-500 mt-2">
                  Add your first project using the form on the left
                </p>
              </div>
            ) : (
              projects.map((project, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                  {/* Project Header */}
                  <div className="bg-gray-900 px-6 py-4">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-[#B9FF66]">{project.technologies}</p>
                  </div>

                  {/* Project Body */}
                  <div className="p-6">
                    {/* Description */}
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700 mb-1">Description</h4>
                      <p className="text-gray-600">{project.description}</p>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          <FiExternalLink /> Live Demo
                        </a>
                      )}
                      {project.githubRepo && (
                        <a
                          href={project.githubRepo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-800 hover:text-gray-600 hover:underline"
                        >
                          <FaGithub /> GitHub
                        </a>
                      )}
                      {project.linkedinPost && (
                        <a
                          href={project.linkedinPost}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-700 hover:text-blue-900 hover:underline"
                        >
                          <FaLinkedin /> LinkedIn Post
                        </a>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-[#B9FF66] hover:bg-[#A5E55C] text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 transition"
                      >
                        <FaEdit /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 transition"
                      >
                        <FaTrash /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPortfolio;