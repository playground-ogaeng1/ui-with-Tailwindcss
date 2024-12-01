import { FaMoon, FaSun } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdCancel } from 'react-icons/md';
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faVuejs,
  faNodeJs,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

function App() {
  const isMenuOpen = () => {
    const mobile = document.getElementById('menuAside');

    document.getElementById('menuToggle')?.addEventListener('click', () => {
      mobile?.classList.toggle('translate-x-full');
    });
  };

  const isMenuClose = () => {
    const mobile = document.getElementById('menuAside');

    document.getElementById('closeMenu')?.addEventListener('click', () => {
      mobile?.classList.add('translate-x-full');
    });
  };

  return (
    <div className="scroll-smooth">
      <header className="h-20 sticky top-0 bg-opacity-90 backdrop-blur-lg">
        <nav className="container max-w-4xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex">
            <h1 className="flex items-center space-x-4">홍길동</h1>
            <p>소프트웨어 개발자</p>
          </div>
          <div className="hidden md:flex items-center gap-x-6">
            <a href="#home" className="hover:text-blue-500 transition-colors">
              홈
            </a>
            <a href="#about" className="hover:text-blue-500 transition-colors">
              소개
            </a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">
              기술
            </a>
            <a
              href="#projects"
              className="hover:text-blue-500 transition-colors"
            >
              프로젝트
            </a>
            <a
              href="#contact"
              className="hover:text-blue-500 transition-colors"
            >
              연락처
            </a>
            <button className="text-2xl p-2 w-10 h-10 rounded-full bg-gray-200 focus:outline-none focus:ring focus:ring-blue-500">
              <FaMoon />
            </button>
          </div>
          <button
            id="menuToggle"
            className="p-2 md:hidden text-gray-700 dark:text-white text-2xl"
            onClick={isMenuOpen}
          >
            <RxHamburgerMenu />
          </button>
        </nav>
      </header>

      <aside
        id="menuAside"
        className="md:hidden fixed right-0 bg-slate-400 inset-y-0 w-64 shadow-lg translate-x-full transition-transform duration-300 z-10"
      >
        <button
          className="text-2xl p-2 m-4"
          id="closeMenu"
          onClick={isMenuClose}
        >
          <MdCancel />
        </button>
        <nav className="flex flex-col space-y-4 mt-10 px-6">
          <a href="#home" className="hover:text-blue-500 transition-colors">
            홈
          </a>
          <a href="#about" className="hover:text-blue-500 transition-colors">
            소개
          </a>
          <a href="#skills" className="hover:text-blue-500 transition-colors">
            기술
          </a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">
            프로젝트
          </a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">
            연락처
          </a>
          <button
            onClick={isMenuClose}
            className="text-2xl w-full p-2 h-10 rounded-full bg-gray-200 focus:outline-none focus:ring focus:ring-blue-500"
          >
            <FaMoon />
          </button>
        </nav>
      </aside>

      <main className="bg-gray-300 container max-w-4xl mx-auto px-6 py-12">
        <section
          id="home"
          className="scroll-smooth flex flex-col md:flex-row justify-between items-center mb-12"
          style={{ scrollMarginTop: '4rem' }}
        >
          <div className=" shrink-0 mb-6 mb:mb-0 md:mr-10">
            <img
              className="w-56 h-56 rounded-full border-2 object-cover"
              src="https://api.dicebear.com/9.x/avataaars/svg?seed=Sawyer"
              alt="avatar"
            />
          </div>
          <div className="text-center md:text-right">
            <h1 className="text-4xl font-bold mb-2">홍길동</h1>
            <p className="text-xl mb-4">노는게 좋은 개발자</p>
          </div>
        </section>

        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">소개</h2>
          <div className="grid grid-col-1 md:grid-cols-2 gap-6">
            <article className="bg-gray-100 shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4">교육 및 활동</h3>
              <ul className="text-gray-800 leading-relaxed">
                <li>👉 2020 국내 소프트웨어 관련 주제 대학 강연</li>
                <li>👉 2015 해커톤 대회 우승</li>
                <li>👉 2013 오픈소스 프로젝트 참여</li>
                <li>👉 2012 알로기즘 경연대회 우승</li>
              </ul>
            </article>
            <article className="bg-gray-100 shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4">자격증</h3>
              <ul className="text-gray-800 leading-relaxed">
                <li>👉 2020 정보처리기사</li>
                <li>👉 2015 SQLD</li>
                <li>👉 2013 리눅스</li>
                <li>👉 2012 정보보안기사</li>
              </ul>
            </article>
          </div>
        </section>
        <section
          id="skills"
          className="mb-16 scroll-smooth"
          style={{ scrollMarginTop: '4rem' }}
        >
          <h2 className="text-3xl font-bold mb-6">기술스택</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center bg-gray-100 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
              <FontAwesomeIcon
                icon={faHtml5}
                className="text-red-500 text-4xl"
              />
              <h3 className="text-lg font-semibold">HTML5</h3>
            </div>
            <div className="flex flex-col items-center bg-gray-100 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
              <FontAwesomeIcon
                icon={faCss3}
                className="text-blue-500 text-4xl"
              />
              <h3 className="text-lg font-semibold">CSS3</h3>
            </div>
            <div className="flex flex-col items-center bg-gray-100 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
              <FontAwesomeIcon
                icon={faJs}
                className="text-yellow-500 text-4xl"
              />
              <h3 className="text-lg font-semibold">JavaScript</h3>
            </div>
            <div className="flex flex-col items-center bg-gray-100 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
              <FontAwesomeIcon
                icon={faReact}
                className="text-blue-300 text-4xl"
              />
              <h3 className="text-lg font-semibold">React</h3>
            </div>
            <div className="flex flex-col items-center bg-gray-100 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
              <FontAwesomeIcon
                icon={faVuejs}
                className="text-green-600 text-4xl"
              />
              <h3 className="text-lg font-semibold">Vue.js</h3>
            </div>
            <div className="flex flex-col items-center bg-gray-100 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
              <FontAwesomeIcon
                icon={faNodeJs}
                className="text-green-500 text-4xl"
              />
              <h3 className="text-lg font-semibold">Node.js</h3>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="mb-16 scroll-smooth"
          style={{ scrollMarginTop: '4rem' }}
        >
          <h2 className="text-3xl font-bold mb-6">프로젝트</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                className="w-full h-48 object-cover"
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600"
                alt="전자상거래 플랫폼"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  전자상거래 플랫폼
                </h3>
                <div className="space-x-2 mb-4">
                  <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border-gray-300">
                    React
                  </span>
                  <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border-gray-300">
                    Node.js
                  </span>
                  <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border-gray-300">
                    Express
                  </span>
                  <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border-gray-300">
                    MongoDB
                  </span>
                </div>
                <div className="space-x-2">
                  <a
                    href="#"
                    className="text-sm bg-gray-800 text-white px-3 py-1 rounded-md"
                  >
                    Github
                  </a>
                  <a
                    href="#"
                    className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md"
                  >
                    라이브 데모
                  </a>
                </div>
              </div>
            </article>
            <article className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                className="w-full h-48 object-cover"
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600"
                alt="전자상거래 플랫폼"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  전자상거래 플랫폼
                </h3>
                <div className="space-x-2 mb-4">
                  <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border-gray-300">
                    React
                  </span>
                  <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border-gray-300">
                    Node.js
                  </span>
                  <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border-gray-300">
                    Express
                  </span>
                  <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border-gray-300">
                    MongoDB
                  </span>
                </div>
                <div className="space-x-2">
                  <a
                    href="#"
                    className="text-sm bg-gray-800 text-white px-3 py-1 rounded-md"
                  >
                    Github
                  </a>
                  <a
                    href="#"
                    className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md"
                  >
                    라이브 데모
                  </a>
                </div>
              </div>
            </article>
            <article className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                className="w-full h-48 object-cover"
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600"
                alt="전자상거래 플랫폼"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  전자상거래 플랫폼
                </h3>
                <div className="space-x-2 mb-4">
                  <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border-gray-300">
                    React
                  </span>
                  <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border-gray-300">
                    Node.js
                  </span>
                  <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border-gray-300">
                    Express
                  </span>
                  <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border-gray-300">
                    MongoDB
                  </span>
                </div>
                <div className="space-x-2">
                  <a
                    href="#"
                    className="text-sm bg-gray-800 text-white px-3 py-1 rounded-md"
                  >
                    Github
                  </a>
                  <a
                    href="#"
                    className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md"
                  >
                    라이브 데모
                  </a>
                </div>
              </div>
            </article>
            <article className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                className="w-full h-48 object-cover"
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600"
                alt="전자상거래 플랫폼"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  전자상거래 플랫폼
                </h3>
                <div className="space-x-2 mb-4">
                  <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border-gray-300">
                    React
                  </span>
                  <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border-gray-300">
                    Node.js
                  </span>
                  <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border-gray-300">
                    Express
                  </span>
                  <span className="bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border-gray-300">
                    MongoDB
                  </span>
                </div>
                <div className="space-x-2">
                  <a
                    href="#"
                    className="text-sm bg-gray-800 text-white px-3 py-1 rounded-md"
                  >
                    Github
                  </a>
                  <a
                    href="#"
                    className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md"
                  >
                    라이브 데모
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section
          id="contact"
          className="scroll-smooth"
          style={{ scrollMarginTop: '4rem' }}
        >
          <h2 className="text-3xl font-bold">연락처</h2>
          <div className="grid grid-cols-2 gap-8">
            <form action="contactForm" className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="" className="block mb-1 font-medium">
                  메세지
                </label>
                <textarea
                  id="name"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition-colors"
              >
                이메일 보내기
              </button>
            </form>
            <div className="flex flex-col items-center justify-center gap-y-4">
              <a
                href="#"
                target="_blank"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>Github</span>
              </a>
              <a
                href="#"
                target="_blank"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>Youtube</span>
              </a>
              <a
                href="#"
                target="_blank"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>Instagram</span>
              </a>
              <a
                href="#"
                target="_blank"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>email@gmail.com</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 py-6">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <p>&copy; 2024 개발. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
