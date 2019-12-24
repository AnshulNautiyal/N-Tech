export const INTRO = {
  heading: "Work With N-Tech Services",
  subHeading: "You bring the skill. We'll make earning easy",
  noOfButton: [
    {
      btnName: "LEARN MORE",
      color: "green"
    }
  ]
};

export const CHALLENGES = {
  heading: "Creative challenges are our passion",
  subHeading:
    "Our designers and developers work closely together to build a creative and positive working environment. Functionality is as important to us as aesthetics.",
  noOfButton: [
    {
      btnName: "READ MORE",
      color: "green"
    },
    {
      btnName: "CONTACT US",
      color: "transparent"
    }
  ]
};

export const QUESTIONS = {
  heading: "If you have any questions, please contact us",
  subHeading:
    "Our professional support team try to do their best to provide you with high-quality consultations concerning any questions about our services.",
  noOfButton: [
    {
      btnName: "READ MORE",
      color: "green"
    },
    {
      btnName: "GET IN TOUCH",
      color: "transparent"
    }
  ]
};

export const ServicesData = {
  header: "We provide a wide range of creative services",
  service: [
    {
      logoNumber: 0,
      subHeading: "Web Design",
      content:
        "A great brand combines design and messaging to evoke emotion in your customers and drive strategy."
    },
    {
      logoNumber: 1,
      subHeading: "Web Development",
      content:
        "A great brand combines design and messaging to evoke emotion in your customers and drive strategy."
    },
    {
      logoNumber: 2,
      subHeading: "Software Development",
      content:
        "A great brand combines design and messaging to evoke emotion in your customers and drive strategy."
    },
    {
      logoNumber: 3,
      subHeading: "Android/iOS App Development",
      content:
        "A great brand combines design and messaging to evoke emotion in your customers and drive strategy."
    },
    {
      logoNumber: 4,
      subHeading: "Testing & Automation",
      content:
        "A great brand combines design and messaging to evoke emotion in your customers and drive strategy."
    },
    {
      logoNumber: 5,
      subHeading: "Training",
      content:
        "A great brand combines design and messaging to evoke emotion in your customers and drive strategy."
    }
  ]
};

export const footerContentData = [
  {
    header: "",
    logo: "../../static/images/logo/LogoPNG2.png",
    content: [
      "<span>Phone:</span> +1 (045)-224-12-67",
      "<span>Mail:</span> info@ntechservice.org"
    ],
    dangerHTML: 1
  },
  {
    header: "Services",
    logo: "",
    content: [
      "Web Design",
      "Web Development",
      "Software Development",
      "Android/iOS App Development",
      "Testing & Automation",
      "Training"
    ],
    dangerHTML: 0
  },
  {
    header: "About Company",
    logo: "",
    content: ["About Us", "Team", "Portfolio", "Pricing"],
    dangerHTML: 0
  },
  {
    header: "Our Social Networks",
    logo: "",
    content: [
      "Join us in the social networks to receive the latest news and updates."
    ],
    dangerHTML: 0
  }
];

export const REGISTRATION = [
  {
    type: "text",
    alt: "First Name",
    placeholder: "First Name",
    id: "firstName",
    requiredBool: true,
    label: "First Name",
    labelFor: "firstName"
  },
  {
    type: "text",
    alt: "Last Name",
    placeholder: "Last Name",
    id: "lastName",
    requiredBool: true,
    label: "Last Name",
    labelFor: "lastName"
  },
  {
    type: "email",
    alt: "Email ID",
    placeholder: "Email ID",
    id: "email",
    requiredBool: true,
    label: "Email ID",
    labelFor: "email"
  },
  {
    type: "tel",
    alt: "Phone Number",
    placeholder: "Phone Number",
    id: "phoneNumber",
    requiredBool: true,
    label: "Phone Number",
    labelFor: "phoneNumber"
  },
  {
    type: "text",
    alt: "primarySkill",
    placeholder: "Primary Skill",
    id: "primarySkill",
    requiredBool: true,
    label: "Primary Skill",
    labelFor: "primarySkill"
  },
  {
    type: "text",
    alt: "Profession",
    placeholder: "Profession",
    id: "profession",
    requiredBool: true,
    label: "Profession",
    labelFor: "profession"
  }
];
