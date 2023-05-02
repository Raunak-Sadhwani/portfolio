function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***********************
  Menu Component
 ***********************/

const Menu = (props) => {
  return React.createElement(
    "div",
    { className: `menu-container ${props.showMenu}` },
    React.createElement("div", { className: "overlay" }),
    React.createElement(
      "div",
      { className: "menu-items" },
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#welcome-section", onClick: props.toggleMenu },
            "HOME"
          )
        ),

        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#about", onClick: props.toggleMenu },
            "ABOUT"
          )
        ),

        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#projects", onClick: props.toggleMenu },
            "PORTFOLIO"
          )
        ),

        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#contact", onClick: props.toggleMenu },
            "CONTACT"
          )
        )
      ),

      React.createElement(SocialLinks, null)
    )
  );
};

/***********************
  Nav Component
 ***********************/

const Nav = (props) => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "nav",
      { id: "navbar" },
      React.createElement(
        "div",
        { className: "nav-wrapper" },
        React.createElement(
          "p",
          { className: "brand" },
          "Raunak",

          React.createElement("strong", null, " Sadhwani")
        ),

        React.createElement(
          "a",
          {
            onClick: props.toggleMenu,
            className:
              props.showMenu === "active"
                ? "menu-button active"
                : "menu-button",
          },

          React.createElement("span", null)
        )
      )
    )
  );
};

/***********************
  Header Component
 ***********************/

const Header = (props) => {
  return React.createElement(
    "header",
    { id: "welcome-section" },
    React.createElement("div", { className: "forest" }),
    React.createElement("div", { className: "silhouette" }),
    React.createElement("div", { className: "moon" }),
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "h1",
        null,
        React.createElement("span", { className: "line" }, "I am a"),
        React.createElement(
          "span",
          { className: "line xb" },
          "full-stack",
          React.createElement("span", { className: "color xb" }, " web")
        ),

        React.createElement(
          "span",
          { className: "line xb" },
          "& flutter",
          React.createElement("span", { className: "color" }, " dev")
        )

        // React.createElement(
        //   "span",
        //   { className: "line" },
        //   React.createElement("span", { className: "color" }, "&"),
        //   " code."
        // )
      ),

      React.createElement(
        "div",
        { className: "buttons" },
        React.createElement("a", { href: "#projects" }, "my portfolio"),
        React.createElement(
          "a",
          { href: "#contact", className: "cta" },
          "get in touch"
        )
      )
    )
  );
};

/***********************
  About Component
 ***********************/

const About = (props) => {
  return React.createElement(
    "section",
    { id: "about" },
    React.createElement(
      "div",
      { className: "wrapper" },
      React.createElement(
        "article",
        null,
        React.createElement(
          "div",
          { className: "title" },
          React.createElement("h3", null, "Who's this guy?"),
          React.createElement("p", { className: "separator" })
        ),

        React.createElement(
          "div",
          { className: "desc full" },
          React.createElement(
            "h4",
            { className: "subtitle" },
            "My name is Raunak."
          ),
          React.createElement(
            "p",
            null,
            "I am a full stack developer and designer. I love to create things that are both beautiful and functional. I'm a problem solver and I'm always looking for new challenges. My front-end skills are strong, but I also have experience with back-end development. I'm always looking to learn new things and improve my skills."
          ),

          React.createElement(
            "p",
            null,
            "I like making pixel perfect designs and I really enjoy solving problems as well as making things pretty and easy to use. I can't stop learning new things; the more, the better."
          )
        ),

        React.createElement(
          "div",
          { className: "title" },
          React.createElement("h3", null, "What does he do?"),
          React.createElement("p", { className: "separator" })
        ),

        React.createElement(
          "div",
          { className: "desc" },
          React.createElement(
            "h4",
            { className: "subtitle" },
            "I'm a programmer."
          ),
          React.createElement(
            "p",
            null,
            "For the front-end I usually work with Javascript, either standalone or including popular frameworks like VueJS. I also make the web pretty by using Sass, CSS and whenever needed, any of their friends: Bootstrap, etc."
          ),

          React.createElement(
            "p",
            null,
            "For the back-end , I love creating Restful API's as I work in multiple languages and frameworks, but I'm particularly fond of PHP, Laravel, MySQL. I also have experience with Firebase, Nest.js and Flask , and I'm always willing to learn new things."
          )
        ),

        React.createElement(
          "div",
          { className: "desc" },
          React.createElement(
            "h4",
            { className: "subtitle" },
            "Also an app developer."
          ),
          React.createElement(
            "p",
            null,
            "I feel comfortable working with Flutter. I have experience with Android development, and I'm always looking to learn new things."
          ),

          React.createElement(
            "p",
            null,
            "I have less experience in flutter compared to web development, but I'm always looking to improve my skills."
          )
        )
      )
    )
  );
};

/***********************
  Project Component
 ***********************/

const Project = (props) => {
  const tech = {
    sass: "fab fa-sass",
    mongodb: "fas fa-database",
    css: "fab fa-css3-alt",
    nuxt: "fab fa-nuxtjs",
    js: "fab fa-js-square",
    react: "fab fa-react",
    vue: "fab fa-vuejs",
    php: "fab fa-php",
    html: "fab fa-html5",
    d3: "far fa-chart-bar",
    node: "fab fa-node-js",
    firebase: "bx bxl-firebase",
    express: "e-img",
    mongo: "m-img",
    nest: "n-img",
    nuxt: "nu-img",
  };

  const link = props.link || "http://";
  const repo = props.repo || "http://";

  return React.createElement(
    "div",
    { className: "project" },
    React.createElement(
      "a",
      {
        className: "project-link",
        href: link,
        target: "_blank",
        rel: "noopener noreferrer",
      },
      React.createElement("img", {
        className: "project-image",
        src: props.img,
        alt: "Screenshot of " + props.title,
      })
    ),

    React.createElement(
      "div",
      { className: "project-details" },
      React.createElement(
        "div",
        { className: "project-tile" },
        React.createElement(
          "p",
          { className: "icons" },
          props.tech
            .split(" ")
            .map((t) =>
              React.createElement("i", { className: tech[t], key: t })
            )
        ),

        props.title,
        " "
      ),

      props.children,
      React.createElement(
        "div",
        { className: "buttons" },
        React.createElement(
          "a",
          { href: repo, target: "_blank", rel: "noopener noreferrer" },
          "View source ",
          React.createElement("i", { className: "fas fa-external-link-alt" })
        ),

        React.createElement(
          "a",
          { href: link, target: "_blank", rel: "noopener noreferrer" },
          "Try it Live ",
          React.createElement("i", { className: "fas fa-external-link-alt" })
        )
      )
    )
  );
};

/***********************
  Projects Component
 ***********************/

const Projects = (props) => {
  return React.createElement(
    "section",
    { id: "projects" },
    React.createElement(
      "div",
      { className: "projects-container" },
      React.createElement(
        "div",
        { className: "heading" },
        React.createElement("h3", { className: "title" }, "My Works"),
        React.createElement("p", { className: "separator" }),
        React.createElement(
          "p",
          { className: "subtitle" },
          "Here's a list of ",
          React.createElement("u", null, "most"),
          " of the projects I've been working on lately. All of these were built in 2022",
          ", where I've been coding and learning for almost every other day."
        )
      ),

      React.createElement(
        "div",
        { className: "projects-wrapper" },
        React.createElement(
          Project,
          {
            title: "Relaxury: Empowering Quality Businesses",
            img: "images/relaxury.png",
            tech: "css js vue php",
            link: "https://relaxury.web.app/",
            repo: "",
          },

          React.createElement(
            "small",
            null,
            "Built using VueJS, PHP, CSS, and more."
          ),

          React.createElement(
            "p",
            null,
            "This is a full-stack major project where you can build yourself a website for your business under 1 min."
          )
        ),
        React.createElement(
          Project,
          {
            title: "RDIVAS: Passion for fashion",
            img: "images/rdivas.png",
            tech: "js css vue nest",
            link: "https://rdivas.in",
            repo: "https://github.com/Raunak-Hacker/rdivas/",
          },

          React.createElement(
            "small",
            null,
            "Built using VueJS, NestJS, CSS, and more."
          ),

          React.createElement(
            "p",
            null,
            "This is a full-stack project I made for a client. It's a fashion store that sells clothes and accessories. My Primary work was to build the front-end, I made whole front-end and whole admin panel using VueJS. "
          )
        ),
        React.createElement(
          Project,
          {
            title: "World Chat",
            img: "https://github.com/Raunak-Hacker/world-chat-MEVN/blob/master/word-chat.png?raw=true",
            tech: "mongo express vue node",
            link: "https://chat.raunak.me/",
            repo: "https://github.com/Raunak-Hacker/world-chat-MEVN",
          },

          React.createElement(
            "small",
            null,
            "Built using MongoDB, Express, VueJS, NodeJS"
          ),

          React.createElement(
            "p",
            null,
            "This is a full-stack project I made for fun. It's a chat app that allows users to chat with each other. I implemented web sockets to make it real-time. "
          )
        ),
        React.createElement(
          Project,
          {
            title: "Babiesworld",
            img: "images/baby.png",
            tech: "html css js php",
            link: "https://babiesworld.co.in/",
            repo: "",
          },

          React.createElement(
            "small",
            null,
            "Built using HTML, CSS, JS and PHP"
          ),

          React.createElement(
            "p",
            null,
            "This is a static website I made for a client. It's a portfolio website that displays photos of babies, clicked by the client. To promote her business, she wanted a website, so I made this for her. "
          )
        ),
        React.createElement(
          Project,
          {
            title: "Miraj Pain Management",
            img: "images/miraj.png",
            tech: "js css vue nuxt",
            link: "https://www.mirajpainmanagement.com/",
            repo: "https://github.com/Raunak-Hacker/doctor",
          },

          React.createElement("small", null, "Built using VueJS, NuxtJS, CSS"),

          React.createElement(
            "p",
            null,
            "This is my second freelance project, in which I built a stunning static pixel perfect website for Miraj Pain Management Hospital according to their design, owned by Dr. Hema Datar. This project was given to me by TF Strategies Pvt. Ltd. "
          )
        ),
        React.createElement(
          Project,
          {
            title: "NCK Synopsis",
            img: "images/nck.png",
            tech: "css vue nest",
            link: "https://nck-synopsis.web.app/",
            repo: "https://github.com/Raunak-Hacker/college-synopsis-generator/",
          },

          React.createElement("small", null, "Built using VueJS & NestJs"),

          React.createElement(
            "p",
            null,
            "Made a platform to help students of my college to upload their synopsis and get it reviewed by their guides. Users can download their synopsis in pdf and admin can download excel sheet of all the synopsis."
          )
        ),
        React.createElement(
          Project,
          {
            title: "AIO: Convenience Comfort Safety",
            img: "images/aio.png",
            tech: "js  css  vue firebase",
            link: "https://aio-buddy.web.app/",
            repo: "https://github.com/Raunak-Hacker/AIO-Buddy/",
          },

          React.createElement(
            "small",
            null,
            "Built using VueJS, CSS, Firebase"
          ),

          React.createElement(
            "p",
            null,
            "To Empower small scale businesses, help people to know nearby places and help people to connect with different kind of activities."
          )
        ),
        React.createElement(
          Project,
          {
            title: "Online Quiz App",
            img: "images/quiz.png",
            tech: "html css js php",
            link: "https://quiz17.epizy.com/",
            repo: "https://github.com/Raunak-Hacker/online_quiz",
          },

          React.createElement(
            "small",
            null,
            "Built using HTML, CSS, JS, PHP, MySQL"
          ),

          React.createElement(
            "p",
            null,
            "This is a simple online quiz app, where you can play quiz on different topics of programming. Soon you will be able to add your own questions and share it with your friends."
          )
        ),
        React.createElement(
          Project,
          {
            title: "Incquet",
            img: "images/incq.png",
            tech: "vue css js",
            link: "https://raunak-incquet.web.app/products/",
            repo: "https://github.com/Raunak-Hacker/Incquet",
          },

          React.createElement(
            "small",
            null,
            "Built using VueJs, fetching data from API"
          ),

          React.createElement(
            "p",
            null,
            "This is a assignment project, where I have to fetch data from API and display it on the screen. I have used VueJs for this project."
          )
        )
      )
    )
  );
};

/***********************
  Contact Component
 ***********************/

const Contact = (props) => {
  return React.createElement(
    "section",
    { id: "contact" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "heading-wrapper" },
        React.createElement(
          "div",
          { className: "heading" },
          React.createElement(
            "p",
            { className: "title" },
            "Want to ",
            React.createElement("br", null),
            "contact me?"
          ),

          React.createElement("p", { className: "separator" }),
          React.createElement(
            "p",
            { className: "subtitle" },
            "Please, use the form below or send an email to ",
            "",
            React.createElement("br"),
            React.createElement(
              "span",
              { className: "mail" },
              "raunak200308",

              React.createElement("i", { className: "fas fa-at at" }),
              "gmail",

              React.createElement("i", { className: "fas fa-circle dot" }),
              "com"
            ),
            ":"
          )
        ),

        React.createElement(SocialLinks, null)
      ),

      React.createElement(
        "form",
        { id: "contact-form", action: "#" },
        React.createElement("input", {
          placeholder: "Name",
          name: "name",
          type: "text",
          required: true,
        }),
        React.createElement("input", {
          placeholder: "Email",
          name: "email",
          type: "email",
          required: true,
        }),
        React.createElement("textarea", {
          placeholder: "Message",
          type: "text",
          name: "message",
        }),
        React.createElement("input", {
          className: "button",
          id: "submit",
          value: "Submit",
          type: "button",
        })
      )
    )
  );
};
// submit add event listener

/***********************
  Footer Component
 ***********************/

const Footer = (props) => {
  return React.createElement(
    "footer",
    null,
    React.createElement(
      "div",
      { className: "wrapper" },
      React.createElement("h3", null, "THANKS FOR VISITING"),
      React.createElement(
        "p",
        null,
        "\xA9 ",
        new Date().getFullYear(),
        " Raunak Sadhwani."
      ),
      React.createElement(SocialLinks, null)
    )
  );
};

/***********************
  Social Links Component
 ***********************/

const SocialLinks = (props) => {
  return React.createElement(
    "div",
    { className: "social" },
    React.createElement(
      "a",
      {
        href: "https://www.linkedin.com/in/raunak-sadhwani/",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link to author's Linkedin profile",
      },

      " ",
      React.createElement("i", { className: "fab fa-linkedin" })
    ),

    React.createElement(
      "a",
      {
        id: "profile-link",
        href: "https://github.com/Raunak-Hacker/",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link to author's GitHub Profile",
      },

      " ",
      React.createElement("i", { className: "fab fa-github" })
    ),

    React.createElement(
      "a",
      {
        href: "https://www.upwork.com/freelancers/~01d45f0d5b8ce672c9",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link to author's Upwork Profile",
      },

      " ",
      React.createElement("i", { className: "bx bxl-upwork" })
    ),
    React.createElement(
      "a",
      {
        href: "https://www.youtube.com/@Raufle1",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link to author's Youtube Profile",
      },

      " ",
      React.createElement("i", { className: "bx bxl-youtube" })
    )
  );
};

/***********************
  Main Component
 ***********************/

class App extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      menuState: false,
    });
    _defineProperty(
      this,
      "toggleMenu",

      () => {
        this.setState((state) => ({
          menuState: !state.menuState
            ? "active"
            : state.menuState === "deactive"
            ? "active"
            : "deactive",
        }));
      }
    );
  }

  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(Menu, {
        toggleMenu: this.toggleMenu,
        showMenu: this.state.menuState,
      }),
      React.createElement(Nav, {
        toggleMenu: this.toggleMenu,
        showMenu: this.state.menuState,
      }),
      React.createElement(Header, null),
      React.createElement(About, null),
      React.createElement(Projects, null),
      React.createElement(Contact, null),
      React.createElement(Footer, null)
    );
  }

  componentDidMount() {
    const navbar = document.querySelector("#navbar");
    const header = document.querySelector("#welcome-section");
    const forest = document.querySelector(".forest");
    const silhouette = document.querySelector(".silhouette");
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
        header.style.visibility =
          header.style.visibility === "hidden" && "visible";
      else header.style.visibility = "hidden";

      if (scrollPos + 100 >= window.innerHeight)
        navbar.classList.add("bg-active");
      else navbar.classList.remove("bg-active");
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: "start",
              behavior: "smooth",
            });
          });
        }
      }
    })();
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));

document.getElementById("submit").addEventListener("click", () => {
  window.location.href = "mailto:raunak200308@gmail.com";
});
