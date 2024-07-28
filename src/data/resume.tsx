import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Abhishek Saini",
  initials: "DV",
  url: "https://dillion.io",
  location: "Chandigarh, India",
  locationLink: "https://maps.app.goo.gl/ndJpaivvnCvbSjv37",
  description:
    "I am a proficient software developer with a BTech in Computer Science, known for my technical expertise and strong UI/UX design skills.",
  summary:
    "I create robust, dynamic web applications, excelling in delivering seamless user experiences and functional designs. With extensive experience in graphic and UI/UX design and a deep understanding of SDLC methodology, my versatility and problem-solving abilities ensure high-quality digital solutions that bridge the gap between design and technology",
  avatarUrl: "my.png",
  skills: [
    "Java",
    "Python",
    "Angular",
    "React",
    "Typescript",
    "Javascript",
    "HTML5",
    "CSS",
    "Tailwind",
    "Bootstrap",
    "C++",
    "C",
    "Mysql",
    "Json",
    "API"
  ],
  tools:[
    "Git",
    "Intellij",
    "Visual Studio",
    "Netbeans",
    "Vercel",
    "Netlify",
    "Docker",
    "AWS",
    "Kubernetes",
    "Photoshop",
    "Figma",
    "Adobe Illustrator",
    "Corel Draw",
    "Canva",
    "Tomcat"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
    { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "saini03april@gmail.com",
    tel: "+91 7060876247",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abhisheksaini03",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abhisheksaini03/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "email",
        url: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTJnnfFTbkZnnPMXWfhvjkqbCHbsmFwKXMNnMjdcqfCJFHkxvDRkxcPJDfwgFzGQnqzMqq",
        icon: Icons.email,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/channel/UCcCHdEYdAwIFgguPDMibiog",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "saini03april@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Godigitify Nexus",
      href: "https://www.godigitify.com/",
      badges: [],
      location: "Chandigarh",
      title: "Business Development Consultant",
      logoUrl: "/godi.png",
      start: "January 2024",
      end: "Present",
      description:
        "As a Business Development Consultant at Godigitify, I identify new business opportunities, foster client relationships, develop growth strategies, create compelling pitches, and devise innovative marketing and branding solutions. Leveraging my technical and design expertise, I deliver effective business solutions.",
    },
    {
      company: "Techlearns",
      badges: [],
      href: "https://www.techlearns.in/",
      location: "Chandigarh",
      title: "Technical Trainer",
      logoUrl: "/tech.png",
      start: " September 2023",
      end: "January 2024",
      description:
        "As a Technical Trainer at TechLearns Academy, I design and deliver comprehensive training programs, create engaging course materials, conduct hands-on sessions, and provide ongoing support. By staying updated with industry trends, I ensure the curriculum is relevant and effective, helping students build strong technical foundations and advance their careers."},
    {
      company: "Caelius Consulting",
      href: "https://www.caeliusconsulting.com/",
      badges: [],
      location: "Mohali",
      title: "Technical Associate",
      logoUrl: "/cel.png",
      start: "March 2023",
      end: "September 2023",
      description:
        "As a Technical Associate at Caelius Consultancy, I specialize as a MuleSoft Developer, designing and implementing integration solutions using the MuleSoft Anypoint Platform. I develop APIs, integrate systems, and ensure smooth data flow to enhance business processes and operational efficiency.",
    },
    {
      company: "Edu4Sure",
      href: "https://edu4sure.com/",
      badges: [],
      location: "Noida",
      title: "Software Engineer",
      logoUrl: "/edu.png",
      start: "January 2023",
      end: "March 2023",
      description:
        "As a Software Developer at Edu4Sure, I am at the forefront of creating innovative educational software. My work involves coding, designing system architecture, and enhancing application performance. I collaborate with a diverse team to ensure the delivery of high-quality software solutions that transform the educational experience. Proficiency in key programming languages, strong problem-solving skills, and effective communication are essential.",
    },
    {
      company: "DigitalStopag",
      href: "https://digitalstopag.com/",
      badges: [],
      location: "Remote",
      title: "Wordpress Engineer",
      logoUrl: "/dig.png",
      start: "October 2022",
      end: "January 2023",
      description:
        "As a WordPress Engineer at DigitalStopAg, I specialize in designing, developing, and managing WordPress-based websites and applications. My role involves customizing themes and plugins, optimizing site performance, and ensuring a seamless user experience. I collaborate with clients and team members to deliver visually appealing and functional websites that meet business needs. Key responsibilities include troubleshooting issues, implementing best practices for security and SEO, and staying updated with the latest WordPress trends and technologies. Strong skills in PHP, HTML, CSS, and JavaScript are essential for this position.",
    },

  ],
  education: [
    {
      school: "Swami Vivekanand Institute of Engineering & Technology",
      href: "https://sviet.ac.in/",
      degree: "Bachelor of Technology (BTech) in Computer Science (CSE)",
      logoUrl: "/disg.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "Anand Swaroop Arya Saraswati Vidya Mandir",
      href: "http://asasvm100.com/default.aspx",
      degree: " Higher Secondary Education (HSC)",
      logoUrl: "/sch.png",
      start: "2019",
      end: "2021",
    },
    {
      school: "Anand Swaroop Arya Saraswati Vidya Mandir",
      href: "http://asasvm100.com/default.aspx",
      degree: "High School (HS) ",
      logoUrl: "/sch.png",
      start: "2018",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons : [
    {
      title: "CGCJ-Hackathon",
      dates: "April 17th, 2023",
      location: "Chandigarh",
      description:
        "During the CGCJ-Hackathon, our team developed an innovative project under tight deadlines, showcasing our ability to collaborate effectively and deliver a functional product. The hackathon provided an intense and stimulating environment where we tackled real-world problems with creative solutions, enhancing our technical skills and teamwork.",
      image:
        "/cc.png",
    },
    {
      title: "Google IO Extended",
      dates: "January 13th, 2023",
      location: "Chandigarh",
      description:
        "Our team successfully organized Google I/O Extended at our college, providing students with the opportunity to experience the latest in technology and innovation from Google. This event included keynote sessions, workshops, and hands-on activities, allowing participants to engage with cutting-edge developments and enhance their technical skills.",
      image:
        "/io.png",
    },
    {
      title: "Google Developer Student Club",
      dates: "December 29th, 2022",
      location: "Chandigarh",
      description:
        "As the Event Lead for the Google Developer Student Club, I organized tech events, workshops, and hackathons, fostering a community of student developers and enhancing their skills and industry knowledge.",
      image:
        "/goo.png",
    },
    {
      title: "Bharatechxperience",
      dates: "November 26th, 2022",
      location: "Chandigarh",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "/bhr.png",
    },
    {
      title: "Parivartan",
      dates: "March 29, 2022",
      location: "Chandigarh",
      description:
        "My team and I secured second place in the Parivartan coding competition, demonstrating our strong problem-solving skills and effective teamwork.",
      image:
        "https://i.ytimg.com/vi/0_m2FUzyzKs/maxresdefault.jpg",
    },
  ],
  
} as const;
