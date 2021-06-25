/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "Collin Jensen",
  title: "Hello, there",
  subTitle: emoji(
    "I'm a young, passionate Data Scientist with a love for space, technology, film, and gaming. Actively looking for work. If you're curious what I can do, you're in the right place."
  ),
  resumeLink:
    "https://drive.google.com/file/d/18913jYmBY94nB2iPj6qzC6l-6BRkczX4/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/collinjensen",
  linkedin: "https://www.linkedin.com/in/collin-jensen-b29766146/",
  gmail: "collin@collinjensen.com",
  twitter: "https://twitter.com/watchgodreload",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  skills: [
    emoji("⚡ Data cleaning and feature engineering"),
    emoji("⚡ Data visualization"),
    emoji("⚡ Machine learning / predictive modelling")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Data Cleaning",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "Data Visualization",
      fontAwesomeClassname: "fas fa-chart-pie"
    },
    {
      skillName: "Excel",
      fontAwesomeClassname: "fas fa-file-excel"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lambda School",
      logo: require("./assets/images/lambdaLogo.png"),
      subHeader: "Data Science",
      duration: "August 2020 - June 2021",
      desc: "Lambda School is a 6+ month Computer Science & Software Engineering Academy that provides an immersive hand-on curriculum with a focus on computer science, web development, and data science.",
      descBullets: [
        "Data analysis",
        "Machine learning",
        "Natural Language Processing",
        "Computer Science"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Cleaning and Feature Engineering", //Insert stack or technology you have experience in
      progressPercentage: "85%", //Insert relative proficiency in percentage
      note: "Take a look",
      link: "https://collinjensencom.wordpress.com/2021/01/06/trying-to-predict-whether-ill-like-a-movie/"
    },
    {
      Stack: "Data Visualization",
      progressPercentage: "79%",
      note: "Click here to view",
      link: "https://collinjensencom.wordpress.com/2021/01/06/trying-to-predict-whether-ill-like-a-movie/"
    },
    {
      Stack: "Machine Learning / Predictive Modelling",
      progressPercentage: "75%",
      note: "Click me",
      link: "https://collinjensencom.wordpress.com/2021/01/06/trying-to-predict-whether-ill-like-a-movie/"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Center Operations Technician",
      company: "Pure Storage",
      companylogo: require("./assets/images/pureLogo.png"),
      date: "May 2020 – June 2021",
      desc: "Managed inbound and outbound shipments of server hardware. Racked, stacked, and cabled servers in testing environments. Configured, deployed, fixed, and rehabilitated various testbeds according to engineer requirements."
    },
    {
      role: "Assistant Manager",
      company: "Thanksgiving Point",
      companylogo: require("./assets/images/thanksgivingpointLogo.png"),
      date: "August 2017 – June 2019",
      desc: "Helped in managing a team of 40+ by overseeing staffing across several different sites, training, and creating workflows and processes to get the best out of our employees and deliver exceptional experiences to our guests."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",

  blogs: [
    {
      url: "https://collinjensencom.wordpress.com/2021/01/06/trying-to-predict-whether-ill-like-a-movie/",
      title: "Trying to predict whether I'll like a movie",
      description: "so i can stop wasting time watching movies like Grown Ups 2"
    },
    {
      url: "https://collinjensencom.wordpress.com/2020/10/26/where-should-i-go-for-movie-reviews/",
      title: "Where should I go for movie reviews?",
      description: "IMDb? Rotten Tomatoes? Let's find out"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  email_address: "collin@collinjensen.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
