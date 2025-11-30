export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'Real-time Analytics Pipeline',
      description: 'Built a scalable data pipeline processing 1M+ events daily using Apache Kafka and Python.',
      tech: ['Python', 'Kafka', 'PostgreSQL', 'Docker'],
      year: 2024,
    },
    {
      id: 2,
      title: 'Customer Insights Dashboard',
      description: 'Developed an interactive dashboard for business intelligence using React and D3.js.',
      tech: ['React', 'D3.js', 'SQL', 'Tableau'],
      year: 2023,
    },
    {
      id: 3,
      title: 'ETL Optimization',
      description: 'Optimized data warehouse queries, reducing query time by 70% using indexing strategies.',
      tech: ['SQL', 'Redshift', 'Python', 'AWS'],
      year: 2023,
    },
    {
      id: 4,
      title: 'Predictive Modeling System',
      description: 'Implemented ML models for customer churn prediction with 85% accuracy.',
      tech: ['Python', 'scikit-learn', 'SQL', 'TensorFlow'],
      year: 2022,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="px-6 sm:px-12 py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Featured Projects</h1>
          <p className="text-lg text-gray-400">
            A collection of data engineering and analytics projects that showcase my expertise in building scalable solutions.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 sm:px-12 py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-800 p-8 rounded-lg hover:border-gray-600 transition group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold group-hover:text-blue-400 transition">{project.title}</h3>
                <span className="text-sm text-gray-500">{project.year}</span>
              </div>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-gray-900 text-gray-300 px-3 py-1 rounded-full border border-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
