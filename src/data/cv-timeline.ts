export interface TimelineEntry {
  title: string;
  date: string;
  startDate?: string;
  image: string;
  text: string;
  tags?: string[];
}

export const timelineData: TimelineEntry[] = [
  {
    title: "Project - Enabled Robot",
    date: "2023",
    image: "photo-1485827404703-89b55fcc595e",
    text: "Had some playtime with our Enabled Robot. Ended up with an aggressive robot tracking a box - but got some hands-on time with a lot of cool things: MoveIT, ROS2, Qualisys motion capture 🤖.",
    tags: ["EnabledRobot", "MobileManipulators", "ROS2", "MoveIT", "Qualisys", "motionCapture"]
  },
  {
    title: "Teknologisk Institut - Robot Specialist",
    date: "2023",
    image: "photo-1487887235947-a955ef187fcc",
    text: "Working as a consultant in the field of robotics. Work mostly evolved around software development in either commercial or research funded projects. It also included various other ad-hoc tasks such as project management, teaching, and customer visits and inspections etc. Notable achievements included landing and executing the largest integration project in the history of the department. An integration of the Spot robot from Boston Dynamics into Danish industry.",
    tags: ["Consulting", "BostonDynamics", "Spot", "ProjectManagement", "Integration"]
  },
  {
    title: "Advanced Robotics Development",
    date: "2022",
    startDate: "2021",
    image: "photo-1518770660439-4636190af475",
    text: "Led development of autonomous navigation systems for industrial robots. Implemented SLAM algorithms and sensor fusion techniques for real-time mapping and localization.",
    tags: ["SLAM", "Navigation", "SensorFusion", "AutonomousRobots"]
  },
  {
    title: "Machine Learning in Robotics",
    date: "2021",
    image: "photo-1461749280684-dccba630e2f6",
    text: "Developed neural network models for robotic perception and decision making. Focused on computer vision applications for object detection and manipulation planning.",
    tags: ["MachineLearning", "ComputerVision", "ObjectDetection", "NeuralNetworks"]
  }
];