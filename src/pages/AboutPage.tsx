const AboutPage = () => {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Superstars Club</h1>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Learn more about our history, mission, and the values that drive our community.
          </p>
        </div>
        <div className="prose prose-lg mx-auto text-gray-700 text-left">
          <h2>Our Mission</h2>
          <p>
            Our mission is to inspire and empower every member to shine in their unique way. We provide a supportive and dynamic environment where individuals can explore their talents, develop leadership skills, and build lifelong friendships.
          </p>
          <h2>Our History</h2>
          <p>
            Founded in 2010, the Superstars Club started as a small group of friends with a shared passion for community service and personal development. Over the years, we have grown into a vibrant organization that hosts numerous events, workshops, and outreach programs, positively impacting hundreds of lives.
          </p>
          <h2>Our Values</h2>
          <p>We are guided by our core values of integrity, collaboration, innovation, and inclusivity. We believe in creating a space where everyone feels welcome and valued.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
