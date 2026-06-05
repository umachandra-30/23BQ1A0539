import PriorityInbox from "../components/PriorityInbox";
import { getNotifications } from "../services/notificationService";

function Dashboard() {

  const notifications =
    getNotifications();

  return (
    <PriorityInbox
      notifications={notifications}
    />
  );
}

export default Dashboard;