export default function ChildComponent(props) {
  const { show } = props;

  return (
    <div className="mt-8">
      {show === "learnMore" ? (
        <>
          <div className=" mx-auto w-5/6">
            <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">
              Track work across the enterprise through an open, collaborative
              platform. Link issues across Jira and ingest data from other
              software development tools, so your IT support and operations
              teams have richer contextual information to rapidly respond to
              requests, incidents, and changes.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.Accelerate critical development work,
              eliminate toil, and deploy changes with ease, with a complete
              audit trail for every change.
            </p>
            <div className="mx-auto w-5/6">
              <ul className="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
                {[
                  "Eliminate toil",
                  "Deploy changes with ease",
                  "Complete audit trail for every change",
                ].map((item, index) => (
                  <li key={index}>
                  
                     {item}
                      <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
                        <li>
                          You might feel like you are being really "organized" o
                        </li>
                        <li>
                          Nested navigation in UIs is a bad idea too, keep
                          things as flat as possible.
                        </li>
                        <li>
                          Nesting tons of folders in your source code is also
                          not helpful.
                        </li>
                      </ol>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <figure className="max-w-screen-md mx-auto text-center">
            <svg
              className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
                "Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
              <img
                className="w-6 h-6 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                  Michael Gough
                </cite>
                <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                  CEO at Google
                </cite>
              </div>
            </figcaption>
          </figure>
        </>
      )}
    </div>
  );
}
