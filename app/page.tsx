export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-bold tracking-tighter">
        a16z Speedrun Tips & Community
      </h1>
      <p className="mb-6 text-lg text-gray-600">
        Open-source resource for founders and community members working on applying to the a16z Speedrun program
      </p>
      
      <div className="mb-8 rounded-lg bg-red-50 border border-red-200 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <span className="text-red-600 text-xl">⚠️</span>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">
              Important Disclaimer
            </h3>
            <div className="mt-2 text-sm text-red-700">
              <p>
                <strong>This repository is NOT affiliated with, endorsed by, or related to the a16z Speedrun program in any way.</strong> 
                This is an unofficial, community-driven resource. Always refer to the 
                <a href="https://speedrun.a16z.com/" target="_blank" rel="noopener noreferrer" className="underline">
                  official a16z Speedrun website
                </a> for accurate information.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8 rounded-lg bg-blue-50 p-6">
        <h2 className="mb-4 text-2xl font-semibold">About a16z Speedrun</h2>
        <p className="mb-4">
          The a16z Speedrun program is a 12-week accelerator that invests up to $1M in new startups. 
          Join a community of 500+ founders and get access to mentorship, resources, and funding.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded bg-white p-4">
            <h3 className="font-semibold">💰 Up to $1M Investment</h3>
            <p className="text-sm text-gray-600">Direct investment from a16z speedrun</p>
          </div>
          <div className="rounded bg-white p-4">
            <h3 className="font-semibold">👥 1:1 Mentorship</h3>
            <p className="text-sm text-gray-600">Hands-on coaching with industry leaders</p>
          </div>
          <div className="rounded bg-white p-4">
            <h3 className="font-semibold">🌍 Global Community</h3>
            <p className="text-sm text-gray-600">500+ founders from around the world</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Quick Links</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <a 
            href="https://speedrun.a16z.com/apply" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block rounded-lg border border-blue-200 p-4 hover:bg-blue-50"
          >
            <h3 className="font-semibold text-blue-600">🚀 Apply Now</h3>
            <p className="text-sm text-gray-600">Applications for SR006 are open until September 28, 2025</p>
          </a>
          <a 
            href="https://speedrun.a16z.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block rounded-lg border border-gray-200 p-4 hover:bg-gray-50"
          >
            <h3 className="font-semibold">📖 Official Website</h3>
            <p className="text-sm text-gray-600">Learn more about the program</p>
          </a>
        </div>
      </div>

      <div className="rounded-lg bg-green-50 p-6">
        <h2 className="mb-4 text-2xl font-semibold">How to Contribute</h2>
        <p className="mb-4">
          This is a community-driven resource. We welcome contributions from current applicants, 
          program alumni, and anyone with valuable insights about the a16z Speedrun program.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="font-semibold mb-2">Share Your Experience</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Application tips and strategies</li>
              <li>• Interview insights</li>
              <li>• Program experience (if alum)</li>
              <li>• Resource recommendations</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Get Started</h3>
            <ol className="text-sm text-gray-600 space-y-1">
              <li>1. Fork this repository</li>
              <li>2. Create a new branch</li>
              <li>3. Add your content</li>
              <li>4. Submit a pull request</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
