import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Péter Siket-Szász",
  initials: "PS",
  url: "https://peter.siket-szasz.com",
  location: "Zielona Góra, Poland",
  locationLink: "https://www.google.com/maps/place/zielona_gora",
  description:
    "Software engineer with a passion for excellence. Building fun and useful things.",
  summary:
    "I'm a curious person always looking for a challenge. I've found the best way to grow is to step outside your comfort zone. I've worked in different environments, projects, companies, teams, countries and cultures. I've learned a lot from each experience and I'm always looking for the next one.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Angular",
    "Typescript",
    "Javascript",
    "Tailwind",
    "d3.js",
    "AWS",
    "GraphQL",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "peter.siketszasz@gmail.com",
    tel: "+358407172396",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/peter-siket-szasz",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/peter-siket-szasz/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Netlight",
      href: "https://www.netlight.com/",
      badges: [],
      location: "Berlin, Germany",
      title: "IT Consultant, Web Developer",
      logoUrl: "/nl.jpeg",
      start: "November 2022",
      end: "Oct 2024",
      description:
        "Web developer working on various projects for clients, mostly in the healthcare and pharmaceutical industries. Also working on internal projects to improve the company's processes, tools and culture. Working with React, Next.js, Angular, AWS, Postgres, GraphQL, and more. ",
      },
      {
        company: "TU Berlin",
        href: "https://www.tu.berlin/en/",
        badges: [],
        location: "Berlin, Germany",
        title: "Master Thesis",
        logoUrl: "/tub.png",
        start: "April 2022",
        end: "March 2023",
        description:
          "Performed research on the topic of 'Diagnosis of schizophrenia from EEG using Deep Neural Networks'. Compared the performance of several different deep learning models on the task of diagnosing schizophrenia from EEG data using Python, PyTorch and Pandas.",
      },
    {
      company: "CSC - IT Center for Science",
      badges: [],
      href: "https://csc.fi/en/",
      location: "Espoo, Finland",
      title: "Junior Software Specialist",
      logoUrl: "/csc.svg",
      start: "May 2019",
      end: "September 2021",
      description:
        "Implemented the Finnish Research Information Hub (RIH) to consolidate research information from different sources and provide a unified resource for researchers and organizations to access the data. For understanding the data and providing insights, I developed a data visualization tool using, D3.js supported by ElasticSearch. Worked with Angular, Python, ElasticSearch, D3.js, Flask and more.",
    },
    {
      company: "Dedicated Network Partners (DNWP)",
      href: "https://www.dnwpartners.com/",
      badges: [],
      location: "Espoo, Finland",
      title: "Software Tester",
      logoUrl: "/dnwp.png",
      start: "April 2018",
      end: "April 2019",
      description:
        "Created an automated testing suite for the company's flagship product using Python. The suite was used for functionality, performance and stress testing. It was used to successfully identify several critical issues before they reached the customers.",
    },
    {
      company: "Finnish Defence Forces",
      href: "https://puolustusvoimat.fi/en/frontpage",
      badges: [],
      location: "Ylöjärvi, Finland",
      title: "Researcher",
      logoUrl: "/puolustusvoimat.svg",
      start: "September 2017",
      end: "March 2018",
      description:
        "Implemented unit and integration tests for a large scale software project. The tests were used to find bugs and to ensure the software was functioning correctly. The program and tests were written in MATLAB.",
    },
  ],
  education: [
    {
      school: "EIT Digital Master School - Double degree (Aalto & TUB)",
      href: "https://masterschool.eitdigital.eu/",
      degree: "Master of Science (MSc) - Data Science",
      logoUrl: "/eit.svg",
      start: "2020",
      end: "2023",
    },
    {
      school: "TU Berlin",
      href: "https://www.tu.berlin/en/",
      degree: "Master of Science (MSc) - Data Science",
      logoUrl: "/tub.png",
      start: "2021",
      end: "2023",
    },
    {
      school: "Aalto University",
      href: "https://www.aalto.fi/en",
      degree: "Master of Science (MSc) - Data Science",
      logoUrl: "/Aalto.png",
      start: "2020",
      end: "2023",
    },
    {
      school: "Aalto University",
      href: "https://www.aalto.fi/en",
      degree: "Bachelor of Science (BSc) - Computer Science",
      logoUrl: "/Aalto.png",
      start: "2016",
      end: "2020",
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
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
