import { navType } from "../types/arrayTypes";
import TodayIcon from "@mui/icons-material/Today";
import TaskIcon from "@mui/icons-material/Task";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ScheduleIcon from "@mui/icons-material/Schedule";

export const navItems: navType[] = [
  { id: "1", name: "Today", route: "/today", icon: TodayIcon },
  { id: "2", name: "Task", route: "/task", icon: TaskIcon },
  { id: "3", name: "Schedule", route: "/schedule", icon: ScheduleIcon },
  { id: "4", name: "Project", route: "/project", icon: AssignmentIcon },
];
