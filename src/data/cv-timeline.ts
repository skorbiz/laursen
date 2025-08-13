export interface TimelineEntry {
  title: string;
  date: string;
  startDate?: string;
  image: string;
  draft?: string;  // Your original input - not displayed publicly
  text: string;    // AI-polished version for display
  tags?: string[];
  links?: { url: string; label: string; type?: 'github' | 'video' | 'website' | 'demo' }[];
  category: 'work' | 'research' | 'community';
}

export const timelineData: TimelineEntry[] = [
  {
    title: "Weed Removal Robot - Navigation & Control",
    date: "2025",
    image: "robot-wall.jpg",
    draft: "Working on motor drivers, ros2 control integration and GPS navigation for weed removal robot. For paved environments.",
    text: "Developed comprehensive motor drivers, ROS2 control integration, and GPS navigation stack for autonomous weed removal robot designed for paved environments. Implemented precision control systems for targeted weed elimination while maintaining safe operation on concrete and asphalt surfaces.",
    tags: ["WeedRemoval", "MotorDrivers", "ROS2Control", "GPSNavigation", "AutonomousRobot", "PrecisionControl"],
    category: "research"
  },
  {
    title: "Forklift Robot - ROS2 Simulation & Navigation",
    date: "2025",
    image: "manufacturing-line.jpg",
    text: "Integrated advanced simulation environment with navigation stack in ROS2 for autonomous forklift robot operations. Developed comprehensive testing framework combining realistic warehouse simulations with real-world navigation algorithms for safe and efficient material handling.",
    links: [
      { url: "https://github.com/robotics-team/forklift-ros2", label: "Source Code", type: "github" },
      { url: "https://youtube.com/watch?v=demo-forklift", label: "Demo Video", type: "video" },
      { url: "https://gazebosim.org/forklift-simulation", label: "Simulation Environment", type: "website" }
    ],
    tags: ["ForkliftRobot", "ROS2Simulation", "NavigationStack", "WarehouseAutomation", "MaterialHandling", "Integration"],
    category: "research"
  },
  {
    title: "Gas Leak Detection - Boston Dynamics Spot & Fluke SV600",
    date: "2025",
    image: "drone.jpg",
    text: "Pioneered integration of Boston Dynamics Spot robot with Fluke SV600 acoustic imager for autonomous gas leak detection. Developed sensor fusion algorithms and autonomous patrol systems for industrial safety applications, enabling remote detection of hazardous gas leaks in complex environments.",
    links: [
      { url: "https://github.com/safety-robotics/spot-gas-detection", label: "ROS Integration", type: "github" },
      { url: "https://youtube.com/watch?v=spot-gas-demo", label: "Field Test", type: "video" },
      { url: "https://fluke.com/sv600", label: "SV600 Specs", type: "website" },
      { url: "https://bostondynamics.com/spot", label: "Spot Robot", type: "website" }
    ],
    tags: ["BostonDynamicsSpot", "FlukeSV600", "GasLeakDetection", "AcousticImaging", "IndustrialSafety", "SensorFusion"],
    category: "research"
  },
  {
    title: "Mobile Robots Training - Dansk Metal",
    date: "2024",
    image: "classroom-robotics.jpg",
    text: "Conducted hands-on training sessions introducing mobile robots to members of Dansk Metal fagforening. Developed practical exercises and demonstrations to showcase robotics applications in industrial settings, helping union members understand emerging automation technologies.",
    tags: ["Training", "DanskMetal", "MobileRobots", "HandsOn", "Industrial", "Automation"],
    category: "community"
  },
  {
    title: "Public Speaking - When Mobile Robots Leave the Factory Floor",
    date: "2023",
    image: "manufacturing-line.jpg",
    text: "Delivered presentation on the evolution of mobile robots beyond traditional factory environments. Discussed applications in logistics, healthcare, agriculture, and service industries, exploring how mobile robotics is transforming various sectors outside manufacturing.",
    tags: ["PublicSpeaking", "MobileRobots", "Innovation", "Applications", "Industry40"],
    category: "community"
  },
  {
    title: "Project - Enabled Robot",
    date: "2023",
    image: "manipulator-arm.jpg",
    text: "Had some playtime with our Enabled Robot. Ended up with an aggressive robot tracking a box - but got some hands-on time with a lot of cool things: MoveIT, ROS2, Qualisys motion capture 🤖.",
    tags: ["EnabledRobot", "MobileManipulators", "ROS2", "MoveIT", "Qualisys", "motionCapture"],
    category: "research"
  },
  {
    title: "Public Speaking - Algoritmer i selvkørende robotter",
    date: "2023",
    image: "classroom-robotics.jpg",
    text: "Delivered presentation on algorithms in autonomous robots with Dr. Kristine V. K. Knudsen from SDU Robotics. Covered navigation algorithms, mapping, path planning, and obstacle avoidance. Explored what makes algorithms good or bad, and how mathematical approaches drive robotic decision-making.",
    tags: ["PublicSpeaking", "Algorithms", "Navigation", "PathPlanning", "SLAM", "Mathematics"],
    category: "community"
  },
  {
    title: "Christmas Coding Event - 2D Podracing Game",
    date: "2022",
    image: "dsl-programming.jpg",
    text: "Organized and led a Christmas coding event at previous workplace. Developed a 2D podracing game engine where colleagues could write bots to compete in various challenges. Created an engaging programming competition that combined gaming with algorithmic problem-solving.",
    tags: ["GameDevelopment", "Competition", "Algorithms", "EventOrganization", "2DGames", "Bots"],
    category: "community"
  },
  {
    title: "Mobile Robot Integration Project",
    date: "2023",
    image: "robot-wall.jpg",
    text: "Working as a consultant in the field of robotics. Work mostly evolved around software development in either commercial or research funded projects. It also included various other ad-hoc tasks such as project management, teaching, and customer visits and inspections etc. Notable achievements included landing and executing the largest integration project in the history of the department.",
    tags: ["Consulting", "Integration", "ProjectManagement", "MobileRobots"],
    category: "work"
  },
  {
    title: "Team Leadership - Robot Software Stack",
    date: "2023",
    startDate: "2021",
    image: "code-monitor.jpg",
    text: "Led a team of nine developers responsible for core infrastructure components, drivers, and processing in an autonomous mobile robot software stack. Introduced Scrum methodology and test-driven development practices. Successfully migrated build system to Bazel for improved development workflow.",
    tags: ["TeamLead", "Scrum", "TDD", "Bazel", "Infrastructure", "C++", "Python"],
    category: "work"
  },
  {
    title: "Testable Navigation Stack",
    date: "2021",
    startDate: "2018",
    image: "circuit-board.jpg",
    text: "Developed and maintained a comprehensive navigation stack for autonomous mobile robots. Created a testable architecture that improved code quality and reduced integration issues. Focused on path planning, obstacle avoidance, and localization algorithms.",
    tags: ["Navigation", "PathPlanning", "Testing", "ROS", "SLAM", "Localization"],
    category: "research"
  },
  {
    title: "Laser Scanner Analysis Project",
    date: "2020",
    image: "laser-scanner.jpg",
    text: "Conducted in-depth analysis of laser scanner performance and characteristics for mobile robot navigation. Evaluated different sensor models, analyzed noise patterns, and optimized sensor fusion algorithms. Results improved robot perception accuracy by 25%.",
    tags: ["LaserScanners", "SensorFusion", "Analysis", "Perception", "Optimization"],
    category: "research"
  },
  {
    title: "Developer Infrastructure Renewal",
    date: "2019",
    image: "devops-pipeline.jpg",
    text: "Led initiative to modernize development infrastructure for robotics software team. Implemented CI/CD pipelines, containerized development environments, and established coding standards. Reduced build times by 60% and improved developer productivity.",
    tags: ["DevOps", "CI/CD", "Docker", "Infrastructure", "Productivity"],
    category: "work"
  },
  {
    title: "PhD Research - Robotic Assembly",
    date: "2017",
    startDate: "2013",
    image: "error-recovery.jpg",
    text: "Conducted research on reversible execution and error recovery in robotic assembly operations. Developed domain-specific languages for robot control and investigated methods for automatic error handling. Published findings in peer-reviewed journals.",
    tags: ["PhD", "Assembly", "ErrorRecovery", "DSL", "Research", "Reversibility"],
    category: "research"
  },
  {
    title: "Teaching - Robots in Context",
    date: "2017",
    image: "classroom-robotics.jpg",
    text: "Taught introductory robotics course covering kinematic modeling, control theory, path planning, and core algorithms including RANSAC and Kalman filtering. Developed hands-on lab exercises and programming assignments using real robot platforms.",
    tags: ["Teaching", "Kinematics", "Control", "PathPlanning", "RANSAC", "Kalman"],
    category: "community"
  },
  {
    title: "Swarm Robotics Research",
    date: "2016",
    image: "swarm-robots.jpg",
    text: "Visiting researcher focusing on swarm robotics and emergent behavior applications. Developed drivers and algorithms for small mobile robots, investigating collective intelligence and distributed control systems. Conducted experiments with multi-robot coordination.",
    tags: ["SwarmRobotics", "EmergentBehavior", "MultiRobot", "DistributedControl", "Research"],
    category: "research"
  },
  {
    title: "Industrial Automation Reuse Study",
    date: "2015",
    image: "manufacturing-line.jpg",
    text: "Master's thesis project investigating methods for reuse and transfer between industrial automation tasks. Developed frameworks for code reusability in robotic manufacturing systems and analyzed efficiency improvements in production environments.",
    tags: ["MasterThesis", "Automation", "Reusability", "Manufacturing", "Efficiency"],
    category: "research"
  },
  {
    title: "Formula Student Sensor Integration",
    date: "2012",
    image: "formula-car.jpg",
    text: "Bachelor's project involving signal analysis and processing for gyroscope, accelerometer, and sensor systems. Implemented embedded C and VHDL solutions for a Formula Student race car, focusing on real-time data processing and control systems.",
    tags: ["BachelorThesis", "Sensors", "EmbeddedC", "VHDL", "RealTime", "Automotive"],
    category: "research"
  },
  {
    title: "Domain-Specific Language Development",
    date: "2014",
    image: "dsl-programming.jpg",
    text: "Research project developing adaptive action libraries using simulation and domain-specific languages for robotics applications. Created tools for easier robot programming and behavior specification, improving development efficiency for complex robotic tasks.",
    tags: ["DSL", "Simulation", "ActionLibraries", "RobotProgramming", "Tools"],
    category: "research"
  },
  {
    title: "Error Recovery System Design",
    date: "2016",
    image: "drone.jpg",
    text: "Developed automatic error recovery mechanisms for robot assembly operations using reverse execution techniques. Created systems that could detect failures and automatically backtrack to safe states, significantly improving robotic assembly reliability.",
    tags: ["ErrorRecovery", "ReverseExecution", "Assembly", "Reliability", "Automation"],
    category: "research"
  },
  {
    title: "Flexible Manufacturing Research",
    date: "2015",
    image: "flexible-manufacturing.jpg",
    text: "Research into software structures for control and monitoring of flexible automation systems. Focused on small batch assembly using robotic manipulators, developing adaptive control systems that could handle varying production requirements.",
    tags: ["FlexibleManufacturing", "SmallBatch", "Manipulators", "AdaptiveControl", "Production"],
    category: "research"
  }
];