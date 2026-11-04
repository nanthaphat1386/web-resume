// Bilingual (EN / TH) content source for the resume / portfolio site.
// `sharedProfile` holds identity details that don't change between languages
// (name, contact info, links). Everything else lives in `content.en` / `content.th`
// with an identical shape so each section component can just read `t.<section>`.
//
// Replace placeholder values with real information before publishing.

export type Locale = "en" | "th";

export const sharedProfile = {
  name: "Nanthaphat Nikam",
  nameTh: "นันทพัทธ์ นิคำ",
  location: "Nonthaburi, Thailand",
  email: "nanthaphat1386@gmail.com",
  phone: "092-783-1218",
  // TODO: replace with your real profile URLs — not provided in the source resume.
  github: "https://github.com/nanthaphat1386",
  resumeUrl: "/resume.pdf",
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type Experience = {
  jobTitle: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
};

export type Project = {
  name: string;
  description: string;
  role: string;
  technologies: string[];
  features: string[];
  platform: string;
  link?: { label: string; url: string };
};

export type EducationItem = {
  degree: string;
  university: string;
  field: string;
  year: string;
  gpa?: string;
};

export type LanguageSkill = {
  label: string;
  level: string;
};

export type NavLink = { href: string; label: string };

export type SiteContent = {
  meta: {
    name: string;
    title: string;
    description: string;
  };
  nav: {
    links: NavLink[];
    downloadResume: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    title: string;
    headline: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    techBadges: string[];
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    focusHeading: string;
    focusAreas: string[];
  };
  experience: {
    eyebrow: string;
    heading: string;
    responsibilitiesLabel: string;
    achievementsLabel: string;
    technologiesLabel: string;
    items: Experience[];
  };
  skills: {
    eyebrow: string;
    heading: string;
    categories: SkillCategory[];
  };
  projects: {
    eyebrow: string;
    heading: string;
    featuresLabel: string;
    technologiesLabel: string;
    items: Project[];
  };
  education: {
    eyebrow: string;
    heading: string;
    graduatedLabel: string;
    gpaLabel: string;
    certificationsHeading: string;
    languagesHeading: string;
    items: EducationItem[];
    certifications: string[];
    languages: LanguageSkill[];
  };
  achievements: {
    eyebrow: string;
    heading: string;
    items: string[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    description: string;
    details: {
      type: "email" | "phone" | "github" | "linkedin" | "location";
      label: string;
      value: string;
    }[];
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      successMessage: string;
      errorMessage: string;
    };
  };
  footer: {
    rights: string;
    tagline: string;
  };
};

const en: SiteContent = {
  meta: {
    name: sharedProfile.name,
    title: `${sharedProfile.name} — Mobile Developer & Full Stack Developer`,
    description:
      "Reliable programmer with hands-on experience improving software stability through testing, debugging, and clean-code practices, building cross-platform mobile applications with Flutter and React Native and backend services with Go and PHP.",
  },
  nav: {
    links: [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#experience", label: "Experience" },
      { href: "#skills", label: "Skills" },
      { href: "#projects", label: "Projects" },
      { href: "#education", label: "Education" },
      { href: "#contact", label: "Contact" },
    ],
    downloadResume: "Download Resume",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
  },
  hero: {
    title: "Mobile Developer & Full Stack Developer",
    headline: "Building Reliable Software Through Clean Code and Careful Testing",
    description:
      "Reliable programmer with hands-on experience improving software stability through testing, debugging, and clean-code practices, building cross-platform mobile applications with Flutter and React Native and backend services with Go and PHP.",
    ctaPrimary: "View My Work",
    ctaSecondary: "Download Resume",
    techBadges: ["TypeScript", "Go", "PHP", "Dart", "React Native", "Flutter"],
  },
  about: {
    eyebrow: "About Me",
    heading: "Dependable software built with clean, tested code",
    paragraphs: [
      "I'm a Programmer and Mobile Developer & Full Stack Developer based in Nonthaburi, Thailand, focused on building dependable software through rigorous testing, debugging, and clean-code practices. I work across SQL databases, Git-based workflows, and backend services to support efficient development and accurate data handling.",
      "My experience spans backend development with Go and PHP, RESTful API design, and database optimization across PostgreSQL, SQL Server, and MySQL, as well as cross-platform mobile development with Flutter and React Native for production fleet-management applications.",
      "I bring strong collaboration skills and close attention to detail, working through code reviews and structured debugging to help teams maintain high standards, resolve issues quickly, and deliver measurable improvements to software quality and stability.",
    ],
    focusHeading: "Core Focus Areas",
    focusAreas: [
      "Software testing & debugging",
      "Clean code & code review practices",
      "RESTful API design & integration",
      "Database optimization (PostgreSQL, SQL Server, MySQL)",
      "Cross-platform mobile development (Flutter, React Native)",
      "Role-Based Access Control (RBAC)",
      "WebView performance optimization",
      "Google Maps & real-time GPS telemetry integration",
    ],
  },
  experience: {
    eyebrow: "Professional Experience",
    heading: "Where I've built software products",
    responsibilitiesLabel: "Responsibilities",
    achievementsLabel: "Key Achievements",
    technologiesLabel: "Technologies",
    items: [
      {
        jobTitle: "Programmer",
        company: "Mappointasia Logistics Solutions Company",
        location: "Thailand",
        period: "October 2025 – Present",
        responsibilities: [
          "Developed, tested, and maintained software applications using clean, efficient code to support business requirements",
          "Debugged and resolved software defects, improving application stability and reducing recurring issues",
          "Participated in code reviews to ensure adherence to coding standards, best practices, and maintainable architecture",
          "Built and integrated RESTful APIs and backend services using Go/PHP to enable seamless data exchange",
          "Used version control systems such as Git and GitHub to manage source code and support team collaboration",
          "Assisted in database queries and data manipulation tasks using PostgreSQL and MySQL to support application functionality",
        ],
        achievements: [
          "Reduced recurring software defects by introducing structured debugging and code review practices",
          "Delivered RESTful API integrations between Go/PHP backend services, enabling seamless data exchange across systems",
          "Maintained accurate PostgreSQL and MySQL data handling supporting daily business operations",
        ],
        technologies: ["TypeScript", "Go", "PHP", "Dart", "PostgreSQL", "MySQL", "Git", "GitHub"],
      },
    ],
  },
  skills: {
    eyebrow: "Technical Skills",
    heading: "Tools and technologies I work with",
    categories: [
      {
        title: "Programming Languages",
        skills: ["TypeScript", "Go", "PHP", "Dart"],
      },
      {
        title: "Frameworks & Libraries",
        skills: ["React", "React Native", "Flutter"],
      },
      {
        title: "Databases",
        skills: ["PostgreSQL", "SQL Server", "MySQL"],
      },
      {
        title: "Tools & Environment",
        skills: ["Git", "GitHub", "DBeaver", "Visual Studio", "Postman", "Figma", "Android Studio"],
      },
      {
        title: "Key Concepts",
        skills: ["RESTful API Design", "Database Optimization", "Role-Based Access Control (RBAC)"],
      },
    ],
  },
  projects: {
    eyebrow: "Projects",
    heading: "Selected work",
    featuresLabel: "Key Features",
    technologiesLabel: "Technologies used",
    items: [
      {
        name: "eZView MOVE",
        description:
          "A system management module for fleet operations, featuring role-based access control and a responsive admin dashboard.",
        role: "Developer",
        platform: "Web",
        technologies: ["React", "TypeScript", "RESTful API", "RBAC"],
        features: [
          "Role-Based Access Control (RBAC)",
          "Admin vs. staff permission separation",
          "Responsive dashboard UI",
          "Seamless navigation across desktop and mobile browsers",
        ],
      },
      {
        name: "eZView +",
        description:
          "A cross-platform mobile application for vehicle tracking and fleet management via real-time GPS telemetry.",
        role: "Mobile Developer",
        platform: "Android · iOS",
        technologies: ["Flutter", "Google Maps API", "REST API", "WebView"],
        features: [
          "Real-time GPS telemetry tracking",
          "Live map navigation and tracking views",
          "WebView performance optimization",
          "Vehicle status and route history",
          "App Store Connect & Google Play Console deployment",
        ],
      },
    ],
  },
  education: {
    eyebrow: "Education",
    heading: "Academic background",
    graduatedLabel: "Graduated",
    gpaLabel: "GPA",
    certificationsHeading: "Certifications",
    languagesHeading: "Languages",
    items: [
      {
        degree: "Bachelor of Computer Science",
        university: "Mahasarakham University",
        field: "Computer Science",
        year: "2025",
        gpa: "3.04",
      },
    ],
    certifications: [
      // Add certifications here, e.g. "Google Associate Android Developer"
    ],
    languages: [
      { label: "English", level: "Good" },
      { label: "Thai", level: "Native" },
    ],
  },
  achievements: {
    eyebrow: "Achievements",
    heading: "Highlights",
    items: [
      "Delivered measurable improvements to application stability through structured testing and debugging",
      "Built and integrated RESTful APIs and backend services using Go and PHP",
      "Implemented Role-Based Access Control (RBAC) for a production fleet management system",
      "Optimized WebView performance for a cross-platform mobile application",
      "Managed mobile application builds and deployment on App Store Connect and Google Play Console",
      "Collaborated with teams via Git and GitHub to maintain clean, well-reviewed code",
    ],
  },
  contact: {
    eyebrow: "Contact",
    heading: "Let's Work Together",
    description:
      "I'm open to opportunities involving mobile application development, software engineering, and challenging technical projects.",
    details: [
      { type: "email", label: "Email", value: sharedProfile.email },
      { type: "phone", label: "Phone", value: sharedProfile.phone },
      { type: "github", label: "GitHub", value: sharedProfile.github.replace("https://", "") },
      // { type: "linkedin", label: "LinkedIn", value: sharedProfile.linkedin.replace("https://", "") },
      { type: "location", label: "Location", value: sharedProfile.location },
    ],
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your full name",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about the opportunity...",
      submit: "Send Message",
      submitting: "Sending...",
      successMessage: "Thanks for reaching out — I'll get back to you soon.",
      errorMessage: "Please fill in all fields before sending.",
    },
  },
  footer: {
    rights: "All rights reserved.",
    tagline: "Mobile Developer & Full Stack Developer · Flutter · React Native · Go · PHP",
  },
};

const th: SiteContent = {
  meta: {
    name: sharedProfile.nameTh,
    title: `${sharedProfile.nameTh} — นักพัฒนาแอปพลิเคชันมือถือและเว็บไซต์`,
    description:
      "โปรแกรมเมอร์ที่เชื่อถือได้ มีประสบการณ์ตรงในการปรับปรุงความเสถียรของซอฟต์แวร์ผ่านการทดสอบ ดีบัก และการเขียนโค้ดที่สะอาด พัฒนาแอปพลิเคชันมือถือแบบข้ามแพลตฟอร์มด้วย Flutter และ React Native รวมถึงบริการแบ็กเอนด์ด้วย Go และ PHP",
  },
  nav: {
    links: [
      { href: "#home", label: "หน้าแรก" },
      { href: "#about", label: "เกี่ยวกับฉัน" },
      { href: "#experience", label: "ประสบการณ์" },
      { href: "#skills", label: "ทักษะ" },
      { href: "#projects", label: "โปรเจกต์" },
      { href: "#education", label: "การศึกษา" },
      { href: "#contact", label: "ติดต่อ" },
    ],
    downloadResume: "ดาวน์โหลดเรซูเม่",
    openMenu: "เปิดเมนูนำทาง",
    closeMenu: "ปิดเมนูนำทาง",
  },
  hero: {
    title: "นักพัฒนาแอปพลิเคชันมือถือและเว็บไซต์",
    headline: "สร้างซอฟต์แวร์ที่เชื่อถือได้ด้วยโค้ดที่สะอาดและการทดสอบที่รอบคอบ",
    description:
      "โปรแกรมเมอร์ที่เชื่อถือได้ มีประสบการณ์ตรงในการปรับปรุงความเสถียรของซอฟต์แวร์ผ่านการทดสอบ ดีบัก และการเขียนโค้ดที่สะอาด พัฒนาแอปพลิเคชันมือถือแบบข้ามแพลตฟอร์มด้วย Flutter และ React Native รวมถึงบริการแบ็กเอนด์ด้วย Go และ PHP",
    ctaPrimary: "ดูผลงานของฉัน",
    ctaSecondary: "ดาวน์โหลดเรซูเม่",
    techBadges: ["TypeScript", "Go", "PHP", "Dart", "React Native", "Flutter"],
  },
  about: {
    eyebrow: "เกี่ยวกับฉัน",
    heading: "ซอฟต์แวร์ที่เชื่อถือได้ สร้างด้วยโค้ดที่สะอาดและผ่านการทดสอบ",
    paragraphs: [
      "ฉันเป็นโปรแกรมเมอร์และนักพัฒนาแอปพลิเคชันมือถือและเว็บไซต์ ประจำจังหวัดนนทบุรี มุ่งเน้นการสร้างซอฟต์แวร์ที่เชื่อถือได้ผ่านการทดสอบอย่างเข้มงวด การดีบัก และการเขียนโค้ดที่สะอาด ฉันทำงานร่วมกับฐานข้อมูล SQL ระบบควบคุมเวอร์ชันด้วย Git และบริการแบ็กเอนด์ เพื่อสนับสนุนการพัฒนาที่มีประสิทธิภาพและการจัดการข้อมูลที่ถูกต้อง",
      "ประสบการณ์ของฉันครอบคลุมการพัฒนาแบ็กเอนด์ด้วย Go และ PHP การออกแบบ RESTful API และการปรับแต่งฐานข้อมูลทั้ง PostgreSQL, SQL Server และ MySQL รวมถึงการพัฒนาแอปพลิเคชันมือถือแบบข้ามแพลตฟอร์มด้วย Flutter และ React Native สำหรับแอปพลิเคชันบริหารจัดการกองยานพาหนะระดับโปรดักชัน",
      "ฉันมีทักษะการทำงานร่วมกับทีมที่ดีและความละเอียดรอบคอบ โดยใช้ code review และการดีบักอย่างเป็นระบบ เพื่อช่วยให้ทีมรักษามาตรฐานที่สูง แก้ไขปัญหาได้อย่างรวดเร็ว และส่งมอบการปรับปรุงคุณภาพซอฟต์แวร์ที่วัดผลได้",
    ],
    focusHeading: "จุดเน้นหลัก",
    focusAreas: [
      "การทดสอบและดีบักซอฟต์แวร์",
      "การเขียนโค้ดที่สะอาดและ code review",
      "การออกแบบและเชื่อมต่อ RESTful API",
      "การปรับแต่งฐานข้อมูล (PostgreSQL, SQL Server, MySQL)",
      "การพัฒนาแอปพลิเคชันมือถือแบบข้ามแพลตฟอร์ม (Flutter, React Native)",
      "การควบคุมสิทธิ์การเข้าถึงตามบทบาท (RBAC)",
      "การปรับปรุงประสิทธิภาพ WebView",
      "การเชื่อมต่อ Google Maps และข้อมูล GPS แบบเรียลไทม์",
    ],
  },
  experience: {
    eyebrow: "ประสบการณ์ทำงาน",
    heading: "ผลงานการพัฒนาซอฟต์แวร์ที่ผ่านมา",
    responsibilitiesLabel: "ความรับผิดชอบ",
    achievementsLabel: "ผลงานสำคัญ",
    technologiesLabel: "เทคโนโลยีที่ใช้",
    items: [
      {
        jobTitle: "Programmer",
        company: "Mappointasia Logistics Solutions Company",
        location: "ประเทศไทย",
        period: "ตุลาคม 2568 – ปัจจุบัน",
        responsibilities: [
          "พัฒนา ทดสอบ และดูแลแอปพลิเคชันซอฟต์แวร์ด้วยโค้ดที่สะอาดและมีประสิทธิภาพเพื่อสนับสนุนความต้องการทางธุรกิจ",
          "ดีบักและแก้ไขข้อบกพร่องของซอฟต์แวร์ ปรับปรุงความเสถียรของแอปพลิเคชันและลดปัญหาที่เกิดซ้ำ",
          "ร่วม code review เพื่อให้แน่ใจว่าเป็นไปตามมาตรฐานการเขียนโค้ด แนวทางปฏิบัติที่ดี และสถาปัตยกรรมที่ดูแลง่าย",
          "สร้างและเชื่อมต่อ RESTful API และบริการแบ็กเอนด์ด้วย Go/PHP เพื่อให้การแลกเปลี่ยนข้อมูลเป็นไปอย่างราบรื่น",
          "ใช้ระบบควบคุมเวอร์ชันอย่าง Git และ GitHub ในการจัดการซอร์สโค้ดและสนับสนุนการทำงานร่วมกันของทีม",
          "ช่วยดำเนินการคิวรีและจัดการข้อมูลในฐานข้อมูลด้วย PostgreSQL และ MySQL เพื่อสนับสนุนการทำงานของแอปพลิเคชัน",
        ],
        achievements: [
          "ลดข้อบกพร่องของซอฟต์แวร์ที่เกิดซ้ำ โดยนำแนวทางการดีบักและ code review ที่เป็นระบบมาใช้",
          "ส่งมอบการเชื่อมต่อ RESTful API ระหว่างบริการแบ็กเอนด์ Go/PHP ทำให้การแลกเปลี่ยนข้อมูลระหว่างระบบราบรื่น",
          "ดูแลความถูกต้องของข้อมูลใน PostgreSQL และ MySQL เพื่อสนับสนุนการดำเนินงานประจำวันของธุรกิจ",
        ],
        technologies: ["TypeScript", "Go", "PHP", "Dart", "PostgreSQL", "MySQL", "Git", "GitHub"],
      },
    ],
  },
  skills: {
    eyebrow: "ทักษะด้านเทคนิค",
    heading: "เครื่องมือและเทคโนโลยีที่ใช้งาน",
    categories: [
      {
        title: "ภาษาโปรแกรมมิ่ง",
        skills: ["TypeScript", "Go", "PHP", "Dart"],
      },
      {
        title: "เฟรมเวิร์กและไลบรารี",
        skills: ["React", "React Native", "Flutter"],
      },
      {
        title: "ฐานข้อมูล",
        skills: ["PostgreSQL", "SQL Server", "MySQL"],
      },
      {
        title: "เครื่องมือและสภาพแวดล้อม",
        skills: ["Git", "GitHub", "DBeaver", "Visual Studio", "Postman", "Figma", "Android Studio"],
      },
      {
        title: "แนวคิดหลัก",
        skills: ["การออกแบบ RESTful API", "การปรับแต่งฐานข้อมูล", "การควบคุมสิทธิ์การเข้าถึงตามบทบาท (RBAC)"],
      },
    ],
  },
  projects: {
    eyebrow: "โปรเจกต์",
    heading: "ผลงานที่คัดเลือก",
    featuresLabel: "ฟีเจอร์เด่น",
    technologiesLabel: "เทคโนโลยีที่ใช้",
    items: [
      {
        name: "eZView MOVE",
        description: "โมดูลจัดการระบบสำหรับงานขนส่ง พร้อมระบบควบคุมสิทธิ์การเข้าถึงตามบทบาทและแดชบอร์ดที่ตอบสนองได้ดี",
        role: "Developer",
        platform: "Web",
        technologies: ["React", "TypeScript", "RESTful API", "RBAC"],
        features: [
          "การควบคุมสิทธิ์การเข้าถึงตามบทบาท (RBAC)",
          "แยกสิทธิ์ระหว่างผู้ดูแลระบบและพนักงานทั่วไป",
          "แดชบอร์ดที่ตอบสนองได้ดี",
          "ใช้งานได้ราบรื่นทั้งบนเดสก์ท็อปและเบราว์เซอร์มือถือ",
        ],
      },
      {
        name: "eZView +",
        description: "แอปพลิเคชันมือถือแบบข้ามแพลตฟอร์มสำหรับติดตามยานพาหนะและบริหารจัดการกองยานพาหนะผ่านข้อมูล GPS แบบเรียลไทม์",
        role: "Mobile Developer",
        platform: "Android · iOS",
        technologies: ["Flutter", "Google Maps API", "REST API", "WebView"],
        features: [
          "ติดตามข้อมูล GPS แบบเรียลไทม์",
          "แสดงผลและติดตามบนแผนที่แบบสด",
          "ปรับปรุงประสิทธิภาพ WebView",
          "สถานะยานพาหนะและประวัติการเดินทาง",
          "จัดการการขึ้นเวอร์ชันบน App Store Connect และ Google Play Console",
        ],
      },
    ],
  },
  education: {
    eyebrow: "การศึกษา",
    heading: "ประวัติการศึกษา",
    graduatedLabel: "สำเร็จการศึกษา",
    gpaLabel: "เกรดเฉลี่ย",
    certificationsHeading: "ใบรับรอง",
    languagesHeading: "ภาษา",
    items: [
      {
        degree: "ปริญญาตรีวิทยาการคอมพิวเตอร์",
        university: "มหาวิทยาลัยมหาสารคาม",
        field: "วิทยาการคอมพิวเตอร์",
        year: "2568",
        gpa: "3.04",
      },
    ],
    certifications: [
      // เพิ่มใบรับรองที่นี่ เช่น "Google Associate Android Developer"
    ],
    languages: [
      { label: "ภาษาอังกฤษ", level: "ดี" },
      { label: "ภาษาไทย", level: "ภาษาหลัก" },
    ],
  },
  achievements: {
    eyebrow: "ผลงานเด่น",
    heading: "ไฮไลต์การทำงาน",
    items: [
      "ส่งมอบการปรับปรุงความเสถียรของแอปพลิเคชันที่วัดผลได้ ผ่านการทดสอบและดีบักอย่างเป็นระบบ",
      "สร้างและเชื่อมต่อ RESTful API และบริการแบ็กเอนด์ด้วย Go และ PHP",
      "พัฒนาระบบควบคุมสิทธิ์การเข้าถึงตามบทบาท (RBAC) สำหรับระบบบริหารจัดการกองยานพาหนะระดับโปรดักชัน",
      "ปรับปรุงประสิทธิภาพ WebView สำหรับแอปพลิเคชันมือถือแบบข้ามแพลตฟอร์ม",
      "จัดการการ build และการขึ้นเวอร์ชันแอปพลิเคชันมือถือบน App Store Connect และ Google Play Console",
      "ทำงานร่วมกับทีมผ่าน Git และ GitHub เพื่อดูแลโค้ดให้สะอาดและผ่านการตรวจสอบอย่างดี",
    ],
  },
  contact: {
    eyebrow: "ติดต่อ",
    heading: "มาทำงานร่วมกัน",
    description:
      "ฉันเปิดรับโอกาสในการทำงานด้านการพัฒนาแอปพลิเคชันมือถือ วิศวกรรมซอฟต์แวร์ และโปรเจกต์ทางเทคนิคที่ท้าทาย",
    details: [
      { type: "email", label: "อีเมล", value: sharedProfile.email },
      { type: "phone", label: "โทรศัพท์", value: sharedProfile.phone },
      { type: "github", label: "GitHub", value: sharedProfile.github.replace("https://", "") },
      // { type: "linkedin", label: "LinkedIn", value: sharedProfile.linkedin.replace("https://", "") },
      { type: "location", label: "ที่อยู่", value: sharedProfile.location },
    ],
    form: {
      nameLabel: "ชื่อ",
      namePlaceholder: "ชื่อ-นามสกุลของคุณ",
      emailLabel: "อีเมล",
      emailPlaceholder: "you@example.com",
      messageLabel: "ข้อความ",
      messagePlaceholder: "บอกฉันเกี่ยวกับโอกาสนี้...",
      submit: "ส่งข้อความ",
      submitting: "กำลังส่ง...",
      successMessage: "ขอบคุณที่ติดต่อมา — ฉันจะติดต่อกลับโดยเร็วที่สุด",
      errorMessage: "กรุณากรอกข้อมูลให้ครบทุกช่องก่อนส่ง",
    },
  },
  footer: {
    rights: "สงวนลิขสิทธิ์ทุกประการ",
    tagline: "นักพัฒนาแอปพลิเคชันมือถือและเว็บไซต์ · Flutter · React Native · Go · PHP",
  },
};

export const content: Record<Locale, SiteContent> = { en, th };
