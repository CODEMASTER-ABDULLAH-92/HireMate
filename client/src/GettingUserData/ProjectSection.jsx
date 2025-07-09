import React, { useState } from "react";
import { FaGithub, FaLink, FaLinkedin, FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectsPortfolio = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    liveLink: "",
    githubRepo: "",
    linkedinPost: "",
    featuredImage: null,
    previewImage: null
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
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
      linkedinPost: "",
      featuredImage: null,
      previewImage: null
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            My Development Projects
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Showcase your best work to potential employers and clients
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project Form */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden lg:col-span-1">
            <div className="bg-blue-600 px-6 py-4">
              <h2 className="text-xl font-semibold text-white">
                {isEditing ? "Edit Project" : "Add New Project"}
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
                  required
                />
              </div>

              {/* Live Link */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium flex items-center gap-2">
                  <FaLink className="text-blue-500" />
                  Live Demo URL
                </label>
                <input
                  type="url"
                  name="liveLink"
                  value={formData.liveLink}
                  onChange={handleInputChange}
                  placeholder="https://your-project.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
                />
              </div>

              {/* Featured Image */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  Featured Image
                </label>
                <input
                  type="file"
                  name="featuredImage"
                  onChange={handleFileChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
                  accept="image/*"
                />
              </div>

              {/* Preview Image */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  Preview Images (Multiple)
                </label>
                <input
                  type="file"
                  name="previewImage"
                  onChange={handleFileChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
                  accept="image/*"
                  multiple
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition flex items-center justify-center gap-2"
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
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <h3 className="text-xl font-medium text-gray-600">
                  No projects added yet
                </h3>
                <p className="text-gray-500 mt-2">
                  Add your first project using the form on the left
                </p>
              </div>
            ) : (
              projects.map((project, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  {/* Project Header */}
                  <div className="bg-gray-800 px-6 py-4">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300">{project.technologies}</p>
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
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                        >
                          <FiExternalLink /> Live Demo
                        </a>
                      )}
                      {project.githubRepo && (
                        <a
                          href={project.githubRepo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-800 hover:text-gray-600"
                        >
                          <FaGithub /> GitHub
                        </a>
                      )}
                      {project.linkedinPost && (
                        <a
                          href={project.linkedinPost}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-700 hover:text-blue-900"
                        >
                          <FaLinkedin /> LinkedIn Post
                        </a>
                      )}
                    </div>

                    {/* Images Placeholder */}
                    {project.featuredImage && (
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-700 mb-2">Featured Image</h4>
                        <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center text-gray-400">
                          Image Preview
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 rounded-lg flex items-center gap-2"
                      >
                        <FaEdit /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-red-100 text-red-700 hover:bg-red-200 px-4 py-2 rounded-lg flex items-center gap-2"
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