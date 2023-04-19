import { Platform, StatusBar, NativeModules } from "react-native";
const { StatusBarManager } = NativeModules;

const statusbar = Platform.OS === "android" ? StatusBarManager.HEIGHT : 0;
const colors = {
  primary: "#1E90FF",
  grey: "#787878",
  lightcyan: "#E0FFFF",
  lightskyblue: "#87CEFA",
  error: "#ff3333",
  lightgrey: "#D3D3D3",
  lightblue: "#e6ecff",
  successbg: "#ccffcc",
  pendingbg: "#ffe0b3",
  rejectbg: "#ffb3b3"

};

const Departments = [
  { label: "Computer Science and Engineering", value: "Computer Science and Engineering" },
  { label: "Civil Engineering", value: "Civil Engineering" },
  { label: "Mechanical Engineering", value: "Mechanical Engineering" },
  { label: "Electronics Engineering", value: "Electronics Engineering" },
  { label: "Electrical Engineering", value: "Electrical Engineering" },
  { label: "Information Tehhnology", value: "Information Technology" },
  {label: "WCE", value: "WCE"}
];

const Clubs = [
  {label:"Walchand Linux Users' Group" , value: "Walchand Linux Users' Group"},
  {label: "Association of Computer Science and Engineering Students",value:"Association of Computer Science and Engineering Students"},
  {label:"Student Association of Information Technology",value:"Student Association of Information Technology"},
  {label: "Google Developer Students' Club",value:"Google Developer Students' Club"},
  {label: "ACM Student Chapter",value:"ACM Student Chapter"},
  {label: "Personality Advancement Circle of Engineers",value:"Personality Advancement Circle of Engineers"},
  {label: "MESA-MESC",value:"MESA-MESC"},
  {label: "Civil Engineering Student's Association",value:"Civil Engineering Student's Association"},
  {label: "Electrical Engineering Students Association",value:"Electrical Engineering Students Association"},
  {label: "Electronics Engineering Students Association",value:"Electronics Engineering Students Association"},
  {label: "Art Circle",value:"Art Circle"},
  {label: "Students' Organization For Technical Activities",value:"Students' Organization For Technical Activities"},
  {label: "Rotarct",value:"Rotarct"},
  {label: "Codechef WCE Chapter",value:"Codechef WCE Chapter"}
];

const Roles = [
  {label: "Representative", value: "representative"},
  {label: "Advisor", value: "advisor"},
  {label: "HOD", value: "hod"},
  {label: "Helper", value: "helper"},
  {label: "HOD and Advisor", value: "hodAndAdvisor"}
]

export { statusbar, colors, Departments, Clubs, Roles };
