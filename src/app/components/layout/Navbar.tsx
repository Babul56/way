export default function Navbar() {
  return (
    <header className="main-header">
      <nav className="relative px-6 md:px-10 lg:px-44 py-6 lg:py-10 flex justify-between items-center">
        <a className="text-3xl font-bold leading-none" href="index.html">
          <img src="images/logo.png" alt="Logo" className="w-20 h-auto" />
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-lime-700 p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/4 md:left-1/3 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <a
              className="text-lg font-medium text-gray-800 hover:text-lime-700"
              href="index.html"
            >
              Home
            </a>
          </li>
          <li>
            <div className="dropdown relative inline-block">
              <button className="bg-transparent border-0 text-base font-medium text-gray-800 hover:text-lime-700">
                <div className="flex justify-center items-center">
                  <span className="mr-1">
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-800 hover:text-lime-700"
                    >
                      Project
                    </a>
                  </span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </button>
              <ul className="dropdown-menu hidden absolute rounded-md shadow-lg bg-white z-10 px-8 py-4">
                <li className="my-3">
                  <a
                    href="html/project-ongoing.html"
                    className="text-md font-medium text-gray-800 hover:text-lime-700 flex items-center"
                  >
                    <i className="fa-solid fa-square mr-2"></i>Ongoing
                    <span className="ml-2">Project</span>
                  </a>
                </li>
                <li className="my-3">
                  <a
                    href="html/project-upcoming.html"
                    className="text-md font-medium text-gray-800 hover:text-lime-700 flex items-center"
                  >
                    <i className="fa-solid fa-square mr-2"></i>Upcoming
                    <span className="ml-2">Project</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a
              className="text-lg font-medium text-gray-800 hover:text-lime-700"
              href="html/blog.html"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="text-lg font-medium text-gray-800 hover:text-lime-700"
              href="html/about.html"
            >
              About Us
            </a>
          </li>
        </ul>
        <a
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-1.5 px-6 bg-none hover:bg-white text-lg text-gray-900 font-medium  rounded-3xl transition duration-200 border border-solid border-black"
          href="html/contact.html"
        >
          Contact Us
        </a>
        <button
          className="hidden lg:inline-block py-1.5 px-6 bg-lime-300 text-lg hover:bg-lime-500 text-gray-900 font-medium rounded-3xl transition duration-200"
          data-popup-open="popup-1"
        >
          Sign up
        </button>
        <div className="popup z-50" data-popup="popup-1">
          <div className="popup-inner">
            <div className="flex justify-center items-center mb-8">
              <a
                //    onclick="toggleVisibility('Menu1')"
                className="cursor-pointer pr-8 border-r-2"
              >
                LOGIN
              </a>
              <a
                //   onclick="toggleVisibility('Menu2')";
                className="cursor-pointer pl-8"
              >
                REGISTER
              </a>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-2xl" id="Menu1">
            <form
              id="login"
              className="text-md bg-lime-300 p-4"
              method="POST"
              action="login"
            >
              <div className="border rounded mb-4 shadow appearance-none">
                <input
                  className="w-full py-2 px-3 text-black leading-normal rounded"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="user name or email address"
                />
              </div>
              <div className="border rounded mb-4 shadow appearance-none">
                <input
                  className="w-full py-2 px-3 text-black leading-normal rounded"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-center items-center h-10">
                <button>
                  <a
                    href="index.html"
                    className="text-white hover:text-black bg-lime-500 hover:bg-white rounded py-2 px-8"
                  >
                    Log In
                  </a>
                </button>
              </div>
            </form>
          </div>
          <div className="hidden" id="Menu2">
            <form
              id="register"
              className="text-md bg-lime-300 p-4"
              method="POST"
              action="register"
            >
              <div className="border rounded mb-4 shadow appearance-none">
                <input
                  className="w-full py-2 px-3 text-black leading-normal rounded"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="border rounded mb-4 shadow appearance-none">
                <input
                  className="w-full py-2 px-3 text-black leading-normal rounded"
                  id="email"
                  name="name"
                  type="text"
                  placeholder="Your Email Address"
                />
              </div>
              <div className="border rounded mb-4 shadow appearance-none">
                <input
                  className="w-full py-2 px-3 text-black leading-normal rounded"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-center items-center h-10">
                <button>
                  <a
                    href="index.html"
                    className="text-white hover:text-black bg-lime-500 hover:bg-white rounded py-2 px-8"
                  >
                    Register
                  </a>
                </button>
              </div>
            </form>
            <div className="xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-5 my-5">
              <p className="text-black">
                Already have an account?{" "}
                <a
                  //    onclick="toggleVisibility('Menu1')";
                  className="cursor-pointer font-bold hover:underline"
                >
                  Login here
                </a>
              </p>
            </div>
          </div>
          <a className="popup-close" data-popup-close="popup-1" href="register">
            x
          </a>
          ,
          <div className="navbar-menu relative z-50 hidden">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
              <div className="flex items-center mb-8">
                <a
                  className="mr-auto text-3xl font-bold leading-none"
                  href="index.html"
                >
                  <img
                    src="images/logo.png"
                    alt="Logo"
                    className="w-20 h-auto"
                  />
                </a>
                <button className="navbar-close">
                  <svg
                    className="h-6 w-6 text-lime-700 cursor-pointer hover:text-lime-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div>
                <ul>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm font-semibold text-gray-800 hover:bg-lime-100 hover:text-gray-950 rounded"
                      href="index.html"
                    >
                      Home
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm font-semibold text-gray-800 hover:bg-lime-100 hover:text-gray-950 rounded"
                      href="#"
                    >
                      Project
                    </a>
                  </li>
                  <div className="ml-10">
                    <li className="my-3">
                      <a
                        href="html/project-ongoing.html"
                        className="text-md font-medium text-gray-800 hover:text-lime-700 flex items-center"
                      >
                        <i className="fa-solid fa-square mr-2"></i>Ongoing
                        <span className="ml-2">Project</span>
                      </a>
                    </li>
                    <li className="my-3">
                      <a
                        href="html/project-upcoming.html"
                        className="text-md font-medium text-gray-800 hover:text-lime-700 flex items-center"
                      >
                        <i className="fa-solid fa-square mr-2"></i>Upcoming
                        <span className="ml-2">Project</span>
                      </a>
                    </li>
                  </div>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm font-semibold text-gray-800 hover:bg-lime-100 hover:text-gray-950 rounded"
                      href="html/blog.html"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-sm font-semibold text-gray-800 hover:bg-lime-100 hover:text-gray-950 rounded"
                      href="html/about.html"
                    >
                      About Us
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-auto">
                <div className="pt-6">
                  <a
                    className="block px-4 py-3 mb-3 leading-loose text-md text-center text-gray-950  font-medium bg-gray-200 hover:bg-gray-300 rounded-xl"
                    href="html/contact.html"
                  >
                    Contact Us
                  </a>
                  <button
                    className="w-full px-4 py-3 bg-lime-300 leading-loose text-md hover:bg-lime-500 text-gray-900 font-medium rounded-xl transition duration-200"
                    data-popup-open="popup-1"
                  >
                    Sign up
                  </button>
                  <div className="popup z-50" data-popup="popup-1">
                    <div className="popup-inner">
                      <div className="flex justify-center items-center mb-8">
                        {/* <a onclick="toggleVisibility('Menu1')"; className="cursor-pointer pr-8 border-r-2">LOGIN</a>
                              <a onclick="toggleVisibility('Menu2')"; className="cursor-pointer pl-8">REGISTER</a> */}
                      </div>
                      <div
                        className="bg-gray-100 rounded-lg shadow-2xl"
                        id="Menu1"
                      >
                        <form
                          id="login"
                          className="text-md bg-lime-300 p-4"
                          method="POST"
                          action="login"
                        >
                          <div className="border rounded mb-4 shadow appearance-none">
                            <input
                              className="w-full py-2 px-3 text-black leading-normal rounded"
                              id="name"
                              name="name"
                              type="text"
                              placeholder="user name or email address"
                            />
                          </div>
                          <div className="border rounded mb-4 shadow appearance-none">
                            <input
                              className="w-full py-2 px-3 text-black leading-normal rounded"
                              id="password"
                              name="password"
                              type="password"
                              placeholder="Password"
                            />
                          </div>
                          <div className="flex justify-center items-center h-10">
                            <button>
                              <a
                                href="index.html"
                                className="text-white hover:text-black bg-lime-500 hover:bg-white rounded py-2 px-8"
                              >
                                Log In
                              </a>
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="hidden" id="Menu2">
                        <form
                          id="register"
                          className="text-md bg-lime-300 p-4"
                          method="POST"
                          action="register"
                        >
                          <div className="border rounded mb-4 shadow appearance-none">
                            <input
                              className="w-full py-2 px-3 text-black leading-normal rounded"
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Your Name"
                            />
                          </div>
                          <div className="border rounded mb-4 shadow appearance-none">
                            <input
                              className="w-full py-2 px-3 text-black leading-normal rounded"
                              id="email"
                              name="name"
                              type="text"
                              placeholder="Your Email Address"
                            />
                          </div>
                          <div className="border rounded mb-4 shadow appearance-none">
                            <input
                              className="w-full py-2 px-3 text-black leading-normal rounded"
                              id="password"
                              name="password"
                              type="password"
                              placeholder="Password"
                            />
                          </div>
                          <div className="flex justify-center items-center h-10">
                            <button>
                              <a
                                href="index.html"
                                className="text-white hover:text-black bg-lime-500 hover:bg-white rounded py-2 px-8"
                              >
                                Register
                              </a>
                            </button>
                          </div>
                        </form>
                        <div className="xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-5 my-5">
                          {/* <p className="text-black">
                                      Already have an account? <a onclick="toggleVisibility('Menu1')"; className="cursor-pointer font-bold hover:underline">Login here</a>.
                                  </p> */}
                        </div>
                      </div>
                      <a
                        className="popup-close"
                        data-popup-close="popup-1"
                        href="#"
                      >
                        x
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
}
