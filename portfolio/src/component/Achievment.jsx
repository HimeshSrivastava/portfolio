const Achievement = () => {
  return (
    <div className="px-6 md:px-28 py-10">
      {/* Title */}
      <div className="mb-8">
        <h3 className="font-extrabold text-3xl md:text-4xl text-orange-800 text-center md:text-left">
          Achievements
        </h3>
      </div>

      {/* Achievement List */}
      <div className="shadow-lg rounded-lg p-6 md:p-10">
        <ul className="space-y-6 text-lg md:text-xl font-semibold text-yellow-900">
          <li className="hover:text-orange-600 transition duration-200">
            1. Awarded the Certificate of Excellence from the prestigious{" "}
            <span className="text-orange-700 font-bold">Illumanti event</span>.
          </li>
          <li className="hover:text-orange-600 transition duration-200">
            2. Selected as an{" "}
            <span className="text-orange-700 font-bold">
              open-source contributor in GSSoC
            </span>{" "}
            (GirlScript Summer of Code), contributing to 50+ innovative
            projects.
          </li>
          <li className="hover:text-orange-600 transition duration-200">
            3. Selected as a{" "}
            <span className="text-orange-700 font-bold">
              Campus Ambassador for Shaastra, IIT Madras
            </span>.
          </li>
          <li className="hover:text-orange-600 transition duration-200">
            4. Shortlisted for the{" "}
            <span className="text-orange-700 font-bold">
              Smart India Hackathon (SIH)
            </span>{" "}
            as part of Team Alpha, demonstrating innovative problem-solving
            skills.
          </li>
          <li className="hover:text-orange-600 transition duration-200">
            5. Completed an internship at{" "}
            <span className="text-orange-700 font-bold">Bedwellin</span>, a
            USA-based startup, where I gained practical experience working on
            real-world projects and collaborating with an international team.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Achievement;
