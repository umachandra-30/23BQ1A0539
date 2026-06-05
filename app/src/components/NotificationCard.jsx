function NotificationCard({ notification }) {
  return (
    <div style={{
      border: "1px solid black",
      padding: "10px",
      margin: "10px"
    }}>
      <h3>{notification.Message}</h3>

      <p>Type: {notification.Type}</p>

      <p>Time: {notification.Timestamp}</p>
    </div>
  );
}

export default NotificationCard;