import {
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TelegramIcon from '../components/Icon/TelegramIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Resume Yersultan Nadyrmagambet',
  description: "Site built for Yersultan Nadyrmagambet's online resume presence",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Yersultan Nadyrmagambet.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Almaty-based <strong className="text-stone-100">Android Developer</strong>, currently working
        at <strong className="text-stone-100">KMF</strong>, where I help build mobile-first, domain-driven internal software that makes our staff’s work easier.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I love participating in <strong className="text-stone-100">game jams</strong> and <strong className="text-stone-100">hackathons</strong>,
        learning <strong className="text-stone-100">algorithms</strong>, or spending time with my{' '}
        <strong className="text-stone-100">family</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Passionate about software development with 5 years of specialized experience in Android development. Proficient in algorithms and data structures, adept at collaborating within diverse team sizes. Certified Agile Specialist.`,
  aboutItems: [
    {
      label: 'Location', text: 'Almaty, Kazakhstan', Icon: MapIcon
    },
    {
      label: 'Age', text: '26', Icon: CalendarIcon
    },
    {
      label: 'Nationality', text: 'Kazakh', Icon: FlagIcon
    },
    {
      label: 'Interests', text: 'Game development, Chess, Competetive programming', Icon: SparklesIcon
    },
    {
      label: 'Employment', text: 'KMF', Icon: BuildingOffice2Icon
    },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Kazakh',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Russian',
        level: 10,
      },
    ],
  },
  {
    name: 'Android development',
    skills: [
      {
        name: 'Kotlin',
        level: 10,
      },
      {
        name: 'Clean architecture',
        level: 9,
      },
      {
        name: 'Jetpack Compose',
        level: 8,
      },
      {
        name: 'Java',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Kotlin',
        level: 9,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Sep 2022 - Present',
    location: 'KMF',
    title: 'Senior Android developer',
    content: (
      <ul className="customList">
        <li> Led the development of a multifaceted Android application tailored to empower
          sales professionals in daily task management.</li>
        <li> Implemented MVVM architecture and integrated sockets for real-time data
          communication. </li>
        <li> Successfully generated monthly tasks and provided essential insights about
          new and existing clients, optimizing sales processes.</li>
        <li> Actively mentored junior-level developers, fostering their growth and facilitating
          knowledge transfer within the team.</li>
        <li> Played a pivotal role in designing and implementing intricate business logic to
          enhance application functionality.</li>
        <li> Organized meetups with our primary clients—salespeople—through multiple
          meetings in different cities, utilizing a retrospective style for continuous
          improvement.</li>
        <li> Collaborated effectively within a Kanban environment, ensuring streamlined
          project management and delivery.</li>
      </ul>
    ),
  },
  {
    date: 'Jul 2021 - Sep 2022',
    location: 'KMF',
    title: 'Android developer',
    content: (
      <ul className="customList">
        <li> Engineered a mobile app facilitating eﬃcient data collection for sales
          professionals, featuring robust oﬄine capability.</li>
        <li> Implemented clean architecture and MVVM patterns, optimizing for
          maintainability and scalability.</li>
        <li> Utilized Use Case-driven development principles to enhance project structure.</li>
        <li> Successfully refactored the application to align with Android development best
          practices.</li>
        <li> Integrated data scoring mechanisms for swift responses on loan possibilities.</li>
        <li> Developed an oﬄine mode with a synchronization mechanism for seamless
          functionality in low-connectivity scenarios.</li>
        <li> Collaborated with cross-functional teams for feature development aligned with
          business goals.</li>
        <li> Conducted effective code reviews and provided constructive feedback.</li>
      </ul>
    ),
  },
  {
    date: 'Dec 2019 - Jul 2021',
    location: 'Khan Group',
    title: 'Android developer',
    content: (
      <ul className="customList">
        <li> Contributed to the enhancement of the shop owner's personal cabinet, enabling
          various operations such as goods acceptance and audits.</li>
        <li> Worked on a Java-based legacy project with a primary focus on bug fixes,
          demonstrating the ability to troubleshoot and optimize code.</li>
        <li> Successfully increased crashless user percentage from 95% to 98%, reflecting a
          commitment to improving system stability.</li>
        <li> Spearheaded the development of an oﬄine Point of Sale (POS) application with
          a synchronization mechanism.</li>
        <li> Specialized in integrating and working with Bluetooth printers, fiscalization processes, and bank terminals.</li>
        <li> Collaborated with cross-functional teams to implement features improving
          shop owners' ability to manage revenue and perform various operations
          eﬃciently.</li>
        <li> Ensured the seamless functioning of the oﬄine POS application in
          low-connectivity scenarios through a robust synchronization mechanism.</li>
      </ul>
    ),
  },
  {
    date: 'May 2019 - Dec 2019',
    location: 'ALMANIT',
    title: 'Android developer',
    content: (
      <ul className="customList">
        <li> Developed a personalized cabinet for a broker, enabling access to reports and
          facilitating decision-making.</li>
        <li> Acquired foundational Android development skills during tenure at the starting
          company.</li>
        <li> Worked on a Kotlin-based project using MVP (Model-View-Presenter)
          architecture, Moxy, and RxJava.</li>
        <li> Collaborated closely with a mentor, gaining valuable insights and guidance in
          Android development best practices.</li>
        <li> Contributed to the project's success by implementing features that enhanced
          the broker's ability to analyze reports and make informed decisions.</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Amanzhol Yergali',
      text: "I've had the pleasure of collaborating with Yersultan on various projects, and it's clear that his skills surpass the typical Android developer role. Yersultan not only excels in Android development but also demonstrates remarkable proficiency in backend development and project design. His versatility and ability to thrive in different facets of development make him an invaluable asset to any team. Witnessing Yersultan's expertise in both frontend and backend aspects of our projects has been truly impressive. I wholeheartedly recommend him for his outstanding contributions to mobile application development.",
      image: 'https://media.licdn.com/dms/image/v2/C4E03AQH-gIkTUS-p6g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1614566161728?e=1739404800&v=beta&t=vvcImuLZbVcLuXcVmryHjwKTYHwzKTyP6nSTOGSyO9g',
    },
    {
      name: 'Arman Turalin',
      text: "It was a great pleasure working with Yersultan in the past. He has great programming and algorithm skills, besides he is a good team player. Yersultan is able to find creative solutions to complex technical issues. Any organization would be lucky to have Yersultan as their Software Engineer. He is a hardworking and dedicated person who will complete your project in a given time frame. I would recommend and endorse Yersultan.",
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQFEaRNWxo9l5Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1730892985688?e=1739404800&v=beta&t=-AFMZvukqTRFDYyPprAPicNWQO3eLI3bWrdRH_qoXhs',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to contact me wherever you’re most comfortable.',
  items: [
    {
      type: ContactType.Email,
      text: 'nadyrcoop@gmail.com',
      href: 'mailto:nadyrcoop@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Almaty, Kazakhstan',
      href: 'https://maps.app.goo.gl/Q8YzYQYGLGa8TmBeA',
    },
    {
      type: ContactType.Instagram,
      text: '@nadyrcoop',
      href: 'https://www.instagram.com/nadyrcoop/',
    },
    {
      type: ContactType.Github,
      text: 'rng74',
      href: 'https://github.com/rng74',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {
    label: 'Github', Icon: GithubIcon, href: 'https://github.com/rng74'
  },
  {
    label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/yers/'
  },
  {
    label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/nadyrcoop/'
  },
  {
    label: 'Telegram', Icon: TelegramIcon, href: 'https://t.me/NYers'
  },
];
