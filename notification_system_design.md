# Stage 1

## Notification System Design

The Priority Inbox displays the top 10 unread notifications based on importance and recency. Notifications are assigned weights according to their type: Placement (3), Result (2), and Event (1). Notifications are sorted first by weight and then by timestamp, ensuring that more important and recent notifications appear at the top.

The frontend is built using React components: Dashboard, PriorityInbox, NotificationList, and NotificationCard. The system loads notifications, sorts them according to priority, and displays the top 10 entries.
