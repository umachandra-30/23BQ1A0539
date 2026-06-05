import NotificationCard from "./NotificationCard";
function NotificationList({ notifications }) {
  return (
    <>
      {notifications.map((n) => (
        <NotificationCard
          key={n.ID}
          notification={n}
        />
      ))}
    </>
  );
}

export default NotificationList;