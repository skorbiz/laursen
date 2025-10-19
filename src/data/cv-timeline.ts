/*
STYLE GUIDE FOR TIMELINE ENTRIES:

When converting draft text to polished text, follow these guidelines:
1. AVOID excessive positive words like 'advanced', 'pioneering', 'cutting-edge' - they sound like sales pitch
2. FOCUS on precise descriptions of tasks and technologies used
3. EMPHASIZE technology keywords and specific accomplishments
4. KEEP language professional but not boastful
5. PRIORITIZE concrete details over abstract praise
6. USE active voice and specific action verbs
7. INCLUDE quantifiable results when possible

Good: "Developed navigation stack for autonomous mobile robots using ROS2 Control and Nav2"
Bad: "Pioneered cutting-edge advanced navigation solutions for revolutionary autonomous robots"
*/

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
  hidden?: boolean; // Set to true to hide from display
  largeBanner?: boolean; // Set to true for double height banner
  imagePosition?: string; // CSS object-position value for vertical image positioning (e.g., 'center', 'top', 'center 70%')
}

export const timelineData: TimelineEntry[] = [
  {
    title: "Weed Removal Robot - Navigation & Control",
    date: "2025",
    image: "o-robotics.png", 
    text: "Assisted a client with their weed removal robot designed for paved environments. Wrapped their motor drivers using ROS2 Control and helped integrate a GPS navigation stack in both the Gazebo simulation and the physical mobile robot.",
    tags: ["ROS2", "ROS2Control", "Nav2", "GPS Navigation", "AutonomousRobot", "Gazebo"],
    category: "project",
    largeBanner: true
  },
  {
    title: "Forklift Robot - ROS2 Simulation & Navigation",
    date: "2025",
    image: "mobile-robotics-company.png",
    text: "Spare time project: Developed the initial software stack for a collaborative forklift robot startup. Outlined software architecture, configured URDF model, created ROS2 simulation environment using Gazebo, integrated Nav2 navigation stack, ported Livox laser scanner drivers to ROS2, and adapted SLAM framework.",
    tags: ["Forklift", "Gazebo", "Nav2", "Docker", "Livox", "SLAM"],
    category: "project",
    largeBanner: false
  },
  {
    title: "Gas Leak Detection - Boston Dynamics Spot & Fluke SV600",
    date: "2024-2025",
    image: "spot1.jpg",
    draft: "Integrated Boston Dynamics Spot robot with Fluke SV600 acoustic imager for autonomous gas leak detection. Included project managment and scoping, development of python plugins for interacting with doors and firealarm, safety regulations, ",
    text: "Integrated Boston Dynamics Spot robot with Fluke SV600 acoustic imager for autonomous gas leak detection. Managed project scope and development, created Python plugins for door and fire alarm interactions, ensured safety regulation compliance, and conducted Wi-Fi network analysis.",
    links: [
      { url: "https://www.flukeprocessinstruments.com/en-us/products/imaging-solutions/acoustic-imaging-solutions/sv600-fixed-acoustic-imager", label: "SV600 Specs", type: "website" },
      { url: "https://bostondynamics.com/products/spot/", label: "Spot Robot", type: "website" }
    ],
    tags: ["BostonDynamicsSpot", "FlukeSV600", "AcousticImaging", "Python", "Integration", "ProjectManagement"],
    category: "project",
    largeBanner: true
  },
  {
    title: "Enabled Robot Playtime",
    date: "2025",
    image: "enabled.png",
    links: [
      { url: "https://www.linkedin.com/posts/johan-sund-laursen_enabledrobotics-moveit-ros2-activity-7309853141770895361-kC3J?utm_source=share&utm_medium=member_desktop&rcm=ACoAACRmOckBcV81y-M8tdhMUuDC4Rc3nGq8WlM", label: "Video", type: "video" },
    ],
    text: "Implemented box tracking system using Enabled Robot mobile manipulator. Integrated MoveIT motion planning with ROS2 and Qualisys motion capture system for real-time object tracking and manipulation 🤖.",
    tags: ["EnabledRobot", "MobileManipulators", "ROS2", "MoveIT", "Qualisys", "MotionCapture"],
    category: "project",
    largeBanner: true
  },
  {
    title: "Made Safety - Safe Collaboration Between Robot Manipulators and AMRs",
    date: "2024",
    image: "madeSafe.jpg",
    draft: "Lead the Made Safety project. The goal was to develop a safety system that would allow safe collaboration between robot manipulators and autonomous mobile robots in industrial environments. The project included the development of a safety controller that allowed collaboration between the mobile robot platforms safety and the safety on the robot workcell only when the to were docked.",
    text: "Led Made Safety project developing safety systems for collaboration between robot manipulators and autonomous mobile robots in industrial environments. Developed safety controller enabling secure communication between mobile robot platform safety systems and robot workcell safety systems during docking operations.",
    tags: ["Safety", "SICK", "MIR", "IndustrialRobots", "SafetyController"],
    category: "project",
    largeBanner: false
  },
  {
    title: "Alitrak Robot - Outdoor Autonomous Navigation Platform",
    date: "2024",
    startDate: "2023",
    image: "alitrak.jpg",
    draft: "Participated in the big european reasearch project Canopies. The goal was to develop robots for grape harvesting. Our role was converting the Alitrak platform into a platform sutible for autonomous navigation. This included backwards engineering the CAN interface for the tracks, adding sensors and drivers and modelling the robot in Gazebo and ROS.",
    text: "Participated in European Canopies research project developing robots for grape harvesting. Converted Alitrak platform for autonomous navigation by reverse-engineering CAN interface for track controls, integrating sensors and drivers, and creating robot simulation models in Gazebo and ROS.",
    tags: ["ROS2", "Gazebo", "URDF", "CAN", "OutdoorRobots", "Agriculture"],
    category: "project",
    largeBanner: true
  },
  {
    title: "Public Speaking - When Mobile Robots Leave the Factory Floor",
    date: "2023",
    image: "manufacturing-line.jpg",
    text: "Delivered presentation on the evolution of mobile robots beyond traditional factory environments. Discussed applications in logistics, healthcare, agriculture, and service industries, exploring how mobile robotics is transforming various sectors outside manufacturing.",
    tags: ["PublicSpeaking", "MobileRobots"],
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
    title: "Teknologisk Institut - Robotics Specialist",
    date: "2023",
    image: "dti_logo.png",
    text: "Working as robotics consultant on commercial and research-funded projects. Responsibilities include software development, project management, teaching, customer visits and technical inspections. Landed and executed the largest integration project in department history.",
    tags: ["Consulting", "Integration", "ProjectManagement", "MobileRobots"],
    category: "work"
  },
  {
    title: "Christmas Coding Event - 2D Podracing Game",
    date: "2022",
    image: "podracer.gif",
    text: "Organised and led Christmas coding event. Developed 2D podracing game engine where colleagues could write bots to compete in various challenges. Created programming competition combining gaming with algorithmic problem-solving.",
    links: [
      { url: "https://github.com/skorbiz/podracer", label: "Code", type: "github" },
    ],
    tags: ["Competition", "Algorithms", "PhysicsSimulation", "Bots"],
    category: "community",
    largeBanner: false
  },
  {
    title: "Bazel Build System Migration",
    date: "2022",
    image: "code-monitor.jpg",
    draft: "As part of a larger effort across the robot stack at MIR we switched from the Catkin (cmake) based build system (stitched together with pydoit for anything not ROS) to Bazel. The purpose was to improve the development workflow, reduce build times, and make it easier to manage dependencies across the large codebase.",
    text: "Migrated robot software stack from Catkin (cmake) and pydoit build system to Bazel. Improved development workflow, reduced build times, and simplified dependency management across large codebase containing both ROS and non-ROS components.",
    tags: ["Bazel", "Catkin", "Pydoit", "TDD", "BuildSystems"],
    category: "project"
  },
  {
    title: "Mobile Industrial Robots - Team Lead",
    date: "2023",
    startDate: "2021",
    image: "mir.jpg",
    text: "Led team of nine developers responsible for core infrastructure components, drivers, and processing in autonomous mobile robot software stack. Introduced Scrum methodology and test-driven development practices. Successfully migrated build system to Bazel for improved development workflow.",
    tags: ["TeamLead", "Scrum", "TDD", "JIRA"],
    category: "work",
    largeBanner: true,
    imagePosition: "center"
  },
  {
    title: "Testable Navigation Stack",
    date: "2021",
    startDate: "2018",
    image: "circuit-board.jpg",
    text: "Developed and maintained comprehensive navigation stack for autonomous mobile robots. Created testable architecture that improved code quality and reduced integration issues. Implemented path planning, obstacle avoidance, and localization algorithms.",
    tags: ["Navigation", "TDD", "GTEST", "C++"],
    category: "project"
  },
  {
    title: "Laser Scanner Analysis Project",
    date: "2020",
    image: "laser-scanner.jpg",
    text: "Conducted analysis of laser scanner performance and characteristics for mobile robot navigation. Evaluated different sensors, analysed noise patterns, and resolved complex bugs in robot docking performance through systematic sensor characterization.",
    tags: ["LaserScanners", "Analysis", "Perception", "Optimisation"],
    category: "project"
  },
  {
    title: "Mobile Industrial Robots - Robot Software Developer",
    date: "2021",
    startDate: "2018",
    image: "mir_logo.jpg",
    text: "Developed and maintained software for MiR autonomous mobile robots. Created testable navigation stack, conducted laser scanner analysis, and renewed developer infrastructure. Focused on core navigation algorithms and sensor integration.",
    tags: ["C++", "Python", "Navigation", "SensorIntegration"],
    category: "work"
  },
  {
    title: "Teaching - Robots in Context",
    date: "2017",
    image: "classroom-robotics.jpg",
    text: "Taught introductory robotics course covering kinematic modelling, control theory, path planning, and core algorithms including RANSAC and Kalman filtering. Developed hands-on lab exercises and programming assignments.",
    tags: ["Teaching", "Kinematics", "Control", "PathPlanning", "RANSAC", "Kalman"],
    category: "community"
  },
  {
    title: "University of Southern Denmark - Scientific Assistant",
    date: "2017",
    image: "sdu_logo.jpg",
    text: "Continued PhD research in robotics manipulation and assembly. Developed domain-specific languages for robot control and investigated reversible execution methods for error recovery.",
    tags: ["Research", "Teaching", "DSL", "ErrorRecovery"],
    category: "work"
  },
  {
    title: "PhD Degree - Robotics Manipulation",
    date: "2017",
    startDate: "2013",
    image: "error-recovery.jpg",
    text: "Dissertation focused on domain-specific languages for robotic assembly with emphasis on reversible programming languages. Developed methods enabling robots to execute programs both forward and backward, allowing error correction through trial-and-error approaches without additional error-handling code.",
    tags: ["PhD", "Assembly", "ErrorRecovery", "DSL", "Research", "Reversibility"],
    category: "work"
  },
  // Insert paper maybe
  {
    title: "Swarm Robotics Research",
    date: "2016",
    image: "swarm-robots.jpg",
    text: "Visiting researcher at University of Ottawa, Canada. Developed driver and conducted research using E-Puck robots for swarm robotics and emergent behavior applications. Implemented distributed control algorithms for multi-robot coordination.",
    links: [
      { url: "https://github.com/skorbiz/epuck_driver", label: "Code", type: "github" },
    ],
    tags: ["SwarmRobotics", "EmergentBehavior", "MultiRobot", "DistributedControl", "Research"],
    category: "project"
  },
  {
    title: "Master's Thesis - Industrial Automation Reuse Study",
    date: "2015",
    image: "manufacturing-line.jpg",
    text: "Master's thesis investigating methods for reuse and transfer between industrial automation tasks. Developed frameworks for code reusability in robotic manufacturing systems and analyzed efficiency improvements in production environments.",
    tags: ["MasterThesis", "Automation", "Reusability", "Manufacturing", "Efficiency"],
    category: "project"
  },
];
