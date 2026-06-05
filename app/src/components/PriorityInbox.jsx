import NotificationList from "./NotificationList";

function PriorityInbox({ notifications }) {

  const weights = {
    Placement: 3,
    Result: 2,
    Event: 1
  };

  const topTen = [...notifications]
    .sort((a, b) => weights[b.Type] - weights[a.Type])
    .slice(0, 10);

  return (
    <>
      <h1>Priority Inbox</h1>

      <NotificationList notifications={topTen} />
    </>
  );
}

export default PriorityInbox;