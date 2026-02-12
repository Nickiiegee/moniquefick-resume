export const ITExperience = [
      {
        role: "Developer and Systems Administrator",
        company: "Seatrench AS",
        period: "2025 - Present",
        description: [
          "Rebuild an entire internal tool used for managing offshore crew schedules and their availability, and tracking all vessels in the fleet.",
          "This tool is used by the PM's to keep track of available crew, get updated records, schedule crew for upcoming jobs and to keep track of the days worked for invoices.",
          "This tool is used by the operations team to keep track of all vessels, their locations, maintenance schedules and other important information.",
          "The tool is built using Vue for the frontend and PHP Laravel for the backend with a MySQL database, containerised using Docker.",
          "The tool is hosted on Plesk (only because the original portal was hosted on Plesk. I primarily took over the portal from a company they consulted before).",
          "Created API endpoints to integrate with Azure->Sharepoint to store and manage documents related to crew schedules and vessel information.",
          "Assisted with migrating data from Dropbox to Sharepoint",
          "Added automation flows to Sharepoint to automatically notify managers of personnel requesting leave using Power Automate.",
          "Generated reports using Power BI to display important information to assist with decision making and to keep track of important KPIs.",
          "Created hubs and sites on Sharepoint to keep all important documents and information in one place for easy access by the team.",
          "Updated the company's website from using plain HTML to using Vue to display all the services offered by the company and to be able to generate leads from the website giving it a more modernised look.",
        ],
        stack: [
          "JavaScript",
          "Vue",
          "Inertia",
          "PHP Laravel",
          "SQL",
          "Plesk",
          "Azure",
          "Docker"
        ],
      },
      {
        role: "Consultant Software Engineer",
        company: "Autumn Leaf IT",
        period: "2022 — 2025",
        description: [
          "Demonstrates experience through confidence in meetings, implementation and communications.",
          "Directly bilng and showing value to the customer.",
          "Able to lead engagements, and drive the narrative or lead the solution design on projects.",
          "Deepening of skills and improving critical thinking.",
          "Used React to build dashboard for well-known financial organization in South Africa to display all financial transactions and list any errors or discrepancies found in the data. Used Redux for state management.",
          "Built a job card system for an electrical company that will be released as a product that is open to the public soon to keep track of jobs done. This system lists all customers, job cards, suppliers and inventory items with integration to both PayFast for subscribing to the app and Quickbooks to create invoices.",
          "Hosted static site on AWS S3 for above-mentioned product (beta release in 2024).",
          "Built CI/CD pipelines using AWS services i.e CodePipeline, CodeBuild and Cloudformation for cross account deployments and the creation of resources across all accounts. Also wrote templates using AWS SAM to deploy Lambda scripts and AppSync schemas.",
          "Exposed endpoints using AWS API Gateway and AppSync to connect to AWS services to process data sent from the frontend. Services used includes Lambda, RDS, DynamoDB and Cognito to name a few.",
          "Used JWT tokens together with AWS Cognito for authenticating a user to access the application and to AWS resources.",
          "Mentored and motivated development team in getting tasks done in time and upskilling them.",
          "Team lead: leading a team of 6 members (the largest pod in the development team). Conducting monthly 1:1's, overseeing their projects and overall well-being, managing leave days and give appropriate feedback to HOD.",
          "Perform code reviews to ensure all code is aligned with company standards.",
          "Contribute to monthly forums to keep team updated with latest tech trends.",
        ],
        stack: [
          "JavaScript",
          "React",
          "Redux",
          "TypeScript",
          "NextJS",
          "Python",
          "NodeJS",
          "React Native (exposure)",
          "SQL | NoSQL",
          "AWS",
          "Azure (exposure)",
          "Docker",
          "GitHub Actions",
        ],
      },
      {
        role: "Associate Software Engineer",
        company: "Autumn Leaf IT",
        period: "2021 — 2022",
      },
      {
        role: "Intern Developer",
        company: "Autumn Leaf IT",
        period: "2020 — 2021",
      },
    ];

export const otherExperience =[
      {
        title: "Personal Trainer - Body20 (2015 - 2020)",
        duty: [
          "Responsible for training clients, marketing and sales.",
          "Other responsibilities include: opening studio, closing studio, working with payments, making sure our clientele are satisfied with our service.",
          "Lead generation, follow up and demonstration sessions (sales process).",
          "Marketing- activations and promotions, lead generation and event planning.",
        ],
      },
      {
        title: "Drum Majorette Coach - Brackenfell High School (2016)",
        duty: [
          "Choreograph displays",
          "Orchestrate music for displays",
          "Working out routines",
          "Assist head coach",
        ],
      },
    ];

export const certificates = [
  {
    role: "Powers of AI",
    company: "Saras AI Institute",
    period: "2025"
  },
  {
    role: "JavaScript Unit Testing - The Practical Guide",
    company: "Udemy",
    period: "2023"
  },
  {
    role: "AWS Developer Associate",
    company: "Amazon Web Services",
    period: "Dec 2021 - Dec 2024",
    stack: [
      "APIs: API Gateway | AppSync",
      "AWS Lambda",
      "Databases: DynamoDB | RDS",
      "CloudFormation",
      "AWS SAM",
      "Monitoring: CloudWatch | AWS X-Ray",
      "CI/CD: CodePipeline | CodeBuild | ECR | ECS Fargate",
      "S3",
      "Step Functions",
    ],
  },
  {
    role: "Python PCEP Certification",
    company: "Python Institute",
    period: "2021"
  },
  {
    role: "AWS Certified Cloud Practitioner",
    company: "Amazon Web Services",
    period: "Dec 2020 - Dec 2023"
  }
];
