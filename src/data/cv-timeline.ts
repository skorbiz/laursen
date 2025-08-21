export interface TimelineEntry {
  title: string;
  date: string;
  startDate?: string;
  image: string;
  draft?: string;  // Your original input - not displayed publicly
  text: string;    // AI-polished version for display
  tags?: string[];
  links?: { url: string; label: string; type?: 'github' | 'video' | 'website' | 'demo' }[];
  category: 'work' | 'project' | 'community';
}

export const timelineData: TimelineEntry[] = [
  {
    title: "Weed Removal Robot - Navigation & Control",
    date: "2025",
    image: "o-robotics.png", 
    text: "Assisted a client with their weed removal robot designed for paved environments. Wrapped their motor drivers using ROS2 Control and helped integrate a GPS navigation stack in both the Gazebo simulation and the physical mobile robot.",
    tags: ["ROS2", "ROS2Control", "Nav2", "GPS Navigation", "AutonomousRobot", "Gazebo"],
    category: "project"
  },
  {
    title: "Forklift Robot - ROS2 Simulation & Navigation",
    date: "2025",
    image: "mobile-robotics-company.png",
    text: "Spare time project: Developed the initial software stack for a collaborative forklift robot for a startup. Outlined the software architecture, set up the URDF model of the robot, created a ROS2 simulation environment using Gazebo, integrated the Nav2 navigation stack, ported Livox laser scanner drivers to ROS2, adapted the SLAM framework, and participated in design discussions and project planning.",
    tags: ["Forklift", "Gazebo", "Nav2", "Docker", "Livox", "SLAM"],
    category: "project"
  },
  {
    title: "Gas Leak Detection - Boston Dynamics Spot & Fluke SV600",
    date: "2024-2025",
    image: "spot1.jpg",
    draft: "Integrated Boston Dynamics Spot robot with Fluke SV600 acoustic imager for autonomous gas leak detection. Included project managment and scoping, development of python plugins for interacting with doors and firealarm, safety regulations, ",
    text: "Integrated the Boston Dynamics Spot robot with a Fluke SV600 acoustic imager for autonomous gas leak detection. Involved project management and scoping, developing Python plugins for interacting with doors and fire alarms, ensuring compliance with safety regulations, conducting Wi-Fi analysis, and more.",
    links: [
      { url: "https://www.flukeprocessinstruments.com/en-us/products/imaging-solutions/acoustic-imaging-solutions/sv600-fixed-acoustic-imager", label: "SV600 Specs", type: "website" },
      { url: "https://bostondynamics.com/products/spot/", label: "Spot Robot", type: "website" }
    ],
    tags: ["BostonDynamicsSpot", "FlukeSV600", "AcousticImaging", "Python plugin", "Integration", "ProjectManagement"],
    category: "project"
  },
  {
    title: "Enabled Robot playtime",
    date: "2025",
    image: "enabled.png",
    links: [
      { url: "https://www.linkedin.com/posts/johan-sund-laursen_enabledrobotics-moveit-ros2-activity-7309853141770895361-kC3J?utm_source=share&utm_medium=member_desktop&rcm=ACoAACRmOckBcV81y-M8tdhMUuDC4Rc3nGq8WlM", label: "Video", type: "video" },
    ],
    text: "Had some playtime with our Enabled Robot. Ended up with an aggressive robot tracking a box - but got some hands-on time with a lot of cool things: MoveIT, ROS2, Qualisys motion capture 🤖.",
    tags: ["EnabledRobot", "MobileManipulators", "ROS2", "MoveIT", "Qualisys", "motionCapture"],
    category: "project"
  },
  // Post on alitrak
  // Post on Made Safety
  {
    title: "Public Speaking - When Mobile Robots Leave the Factory Floor",
    date: "2023",
    image: "manufacturing-line.jpg",
    text: "Delivered presentation on the evolution of mobile robots beyond traditional factory environments. Discussed applications in logistics, healthcare, agriculture, and service industries, exploring how mobile robotics is transforming various sectors outside manufacturing.",
    tags: ["PublicSpeaking", "MobileRobots",],
    category: "community"
  },
  {
    title: "Public Speaking - Algorithms in Autonomous Mobile Robots",
    date: "2023",
    image: "classroom-robotics.jpg",
    text: "Delivered presentation on algorithms in autonomous robots with Dr. Kristine V. K. Knudsen from SDU Robotics. Covered navigation algorithms, mapping, path planning, and obstacle avoidance. Explored what makes algorithms good or bad, and how mathematical approaches drive robotic decision-making.",
    tags: ["PublicSpeaking", "Algorithms", "Navigation", "PathPlanning", "SLAM", "Mathematics"],
    category: "community"
  },
  {
    title: "Job: Robotics specialist at Teknologisk Institut",
    date: "2023",
    image: "robot-wall.jpg",
    text: "New Job! Working as a consultant in the field of robotics. Work mostly evolved around software development in either commercial or research funded projects. It also included various other ad-hoc tasks such as project management, teaching, and customer visits and inspections etc. Notable achievements included landing and executing the largest integration project in the history of the department.",
    tags: ["Consulting", "Integration", "ProjectManagement", "MobileRobots"],
    category: "work"
  },
  // Post on Bazel
  {
    title: "Christmas Coding Event - 2D Podracing Game",
    date: "2022",
    image: "podracer.gif",
    text: "Organized and led a Christmas coding event. Developed a small 2D podracing game engine where colleagues could write bots to compete in various challenges. Organized programming competition that combined gaming with algorithmic problem-solving.",
    links: [
      { url: "https://github.com/skorbiz/podracer", label: "Code", type: "github" },
    ],
    tags: ["Competition", "Algorithms", "PhysicsSimulation", "Bots"],
    category: "community"
  },
  {
    title: "Job: TeamLead - Mobile Industrial Robots",
    date: "2023",
    startDate: "2021",
    image: "code-monitor.jpg",
    text: "Led a team of nine developers responsible for core infrastructure components, drivers, and processing in an autonomous mobile robot software stack. Introduced Scrum methodology and test-driven development practices. Successfully migrated build system to Bazel for improved development workflow.",
    tags: ["ProjectManagement", "Scrum", "TDD", "JIRA"],
    category: "work"
  },
  {
    title: "Testable Navigation Stack",
    date: "2021",
    startDate: "2018",
    image: "circuit-board.jpg",
    text: "Developed and maintained a comprehensive navigation stack for autonomous mobile robots. Created a testable architecture that improved code quality and reduced integration issues. Focused on path planning, obstacle avoidance, and localization algorithms.",
    tags: ["Navigation", "TTD", "GTEST", "C++"],
    category: "project"
  },
  {
    title: "Laser Scanner Analysis Project",
    date: "2020",
    image: "laser-scanner.jpg",
    text: "Conducted in-depth analysis of laser scanner performance and characteristics for mobile robot navigation. Evaluated different sensor, analyzed noise patterns, so forth to fix hard to find bugs in the robots docking performance.",
    tags: ["LaserScanners", "Analysis", "Perception", "Optimization"],
    category: "project"
  },
  {
    title: "Job: Robot software developer - Mobile Industrial Robots",
    date: "2021",
    startDate: "2018",
    image: "code-monitor.jpg",
    text: "Developed and maintained software for the MiR autonomous mobile robots. Notable projects included a testable navigation stack, an in-depth analysis of laser-scanners, and renewing developer infrastructure.",
    tags: ["C++", "Python"],
    category: "work"
  },
  {
    title: "Teaching - Robots in Context",
    date: "2017",
    image: "classroom-robotics.jpg",
    text: "Taught introductory robotics course covering kinematic modeling, control theory, path planning, and core algorithms including RANSAC and Kalman filtering. Developed hands-on lab exercises and programming assignments.",
    tags: ["Teaching", "Kinematics", "Control", "PathPlanning", "RANSAC", "Kalman"],
    category: "community"
  },
  {
    title: "Job: Scientific assistant - University of Southern Denmark",
    date: "2017",
    image: "code-monitor.jpg",
    text: "Continuation of PhD research.",
    // tags: ["Research", "Teaching"],
    category: "work"
  },
  {
    title: "PhD degree - Robotics Manipulation",
    date: "2017",
    startDate: "2013",
    image: "error-recovery.jpg",
    // text: "Conducted research on reversible execution and error recovery in robotic assembly operations. Developed domain-specific languages for robot control and investigated methods for automatic error handling. Published findings in peer-reviewed journals.",
    text: "Dissertation focused on domain-specific languages for robotic assembly. A particular emphasis was on the creation of a reversible programming language, that is, programs can be executed both forward and backward. This would enable robots to fix errors without the need for addi- tional error-handling code by using a trial-and-error approach.",
    tags: ["PhD", "Assembly", "ErrorRecovery", "DSL", "Research", "Reversibility"],
    category: "work"
  },
  // Insert paper maybe
  {
    title: "Swarm Robotics Research",
    date: "2016",
    image: "swarm-robots.jpg",
    text: "Visiting researcher at University of Ottawa, Canada. /Work included a driver and research into the small Epuck robot meant for swarm robotics and emergent behaviour applications.",
    links: [
      { url: "https://github.com/skorbiz/epuck_driver", label: "Code", type: "github" },
    ],
    tags: ["SwarmRobotics", "EmergentBehavior", "MultiRobot", "DistributedControl", "Research"],
    category: "project"
  },
  {
    title: "Master's thesis - Industrial Automation Reuse Study",
    date: "2015",
    image: "manufacturing-line.jpg",
    text: "Master's thesis project investigating methods for reuse and transfer between industrial automation tasks. Developed frameworks for code reusability in robotic manufacturing systems and analyzed efficiency improvements in production environments.",
    tags: ["MasterThesis", "Automation", "Reusability", "Manufacturing", "Efficiency"],
    category: "project"
  },
];
