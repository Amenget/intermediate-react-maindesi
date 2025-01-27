

export default function News() {

    const news = [
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "12/12/2021",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, justo sit amet fermentum sollicitudin, libero eros mattis mi, a luctus nunc nulla id libero. Curabitur ut nisl auctor",
        imgSrc:
          "https://imgs.search.brave.com/wWbEDngx791DtEOUBw-6rQ7rpOFu6jfwsFD9eFyW0Zk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTE3/MTI3MzkvcGhvdG8v/c29jY2VyLWJhbGwu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUFqVEl2SHk3NlRs/OFZJMWNIcldMblRp/bjJCbHpYeVN2SXVs/UkhXd21KN3M9",
      },
      {
        title:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "11/11/2021",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "12/12/2021",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, justo sit amet fermentum sollicitudin, libero eros mattis mi, a luctus nunc nulla id libero. Curabitur ut nisl auctor",
        imgSrc:
          "https://imgs.search.brave.com/wWbEDngx791DtEOUBw-6rQ7rpOFu6jfwsFD9eFyW0Zk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTE3/MTI3MzkvcGhvdG8v/c29jY2VyLWJhbGwu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUFqVEl2SHk3NlRs/OFZJMWNIcldMblRp/bjJCbHpYeVN2SXVs/UkhXd21KN3M9",
      },
      {
        title:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "11/11/2021",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imgsrc:""
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "12/12/2021",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, justo sit amet fermentum sollicitudin, libero eros mattis mi, a luctus nunc nulla id libero. Curabitur ut nisl auctor",
        imgSrc:
          "https://imgs.search.brave.com/wWbEDngx791DtEOUBw-6rQ7rpOFu6jfwsFD9eFyW0Zk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTE3/MTI3MzkvcGhvdG8v/c29jY2VyLWJhbGwu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUFqVEl2SHk3NlRs/OFZJMWNIcldMblRp/bjJCbHpYeVN2SXVs/UkhXd21KN3M9",
      },
      {
        title:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "11/11/2021",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imgSrc:""
      },
    ];

    return (
      <>
        {news.slice(0, 3).map((item) => (
          <div className=" w-3/4 m-4 mx-auto border border-1 rounded-md border-cyan-500">
            <img
              className="h-auto max-w-full mx-auto mt-8 p-4 rounded-lg"
              src={item.imgSrc}
              alt="image description"
            />
            <h1 className="text-4xl font-bold text-center text-gray-100 mt-4">
              {item.title}
            </h1>
            <p className="text-sm text-center text-gray-300 mt-4">
              {item.date}
            </p>
            <p className="text-xl text-gray-400 text-center mt-4">
              {item.description}
            </p>
          </div>
        ))}

        <div className="flex items-center justify-center mt-8 gap-4">
          {news.slice(4).map((item) => (
            <>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" src={item.src} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.description}.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </>
          ))}
        </div>
      </>
    );

}