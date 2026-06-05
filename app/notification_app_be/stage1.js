// Helper function to assign weight based on notification type
const getWeight = (notificationType) => {
    if (notificationType === "Placement") {
        return 3;
    } else if (notificationType === "Result") {
        return 2;
    } else if (notificationType === "Event") {
        return 1;
    }
    return 0;
};

// Helper function to fetch dynamic token
const getAuthToken = async () => {
    const authUrl = "http://4.224.186.213/evaluation-service/auth";
    const body = {
        companyName: "Afford Medical Technologies Private Limited",
    clientID: "d9cdc68b-8e77-43c5-a4cd-0e37a6449311",
    clientSecret: "yvZqheJCJpARxmeB",

        name: "Uma Chandra",
        email: "umachandra0539@gmmail.com",
        rollNo: "23bq1a0539",
        accessCode: " QQdEYy"
    };

    try {
        const response = await fetch(authUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            throw new Error(`Auth failed with status ${response.status}`);
        }
        const data = await response.json();
        return data.access_token;
    } catch (err) {
        console.error("Failed to authenticate:", err);
        throw err;
    }
};

// Main async function to fetch and sort notifications
const getTopNotifications = async () => {
    const url = "http://4.224.186.213/evaluation-service/notifications";
    
    try {
        // Fetch dynamic token
        const token = await getAuthToken();

        // Fetch notifications from the API
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        // Check if the response is ok
        if (!response.ok) {
            console.error("Failed to fetch notifications. Status:", response.status);
            return;
        }

        // Parse the JSON response
        const data = await response.json();
        const notifications = data.notifications;

        // Check if notifications array exists
        if (!Array.isArray(notifications)) {
            console.error("Notifications is not an array");
            return;
        }

        // Sort notifications by weight (descending) and then by timestamp (newest first)
        const sortedNotifications = notifications.sort((a, b) => {
            // Get weights for both notifications (using API casing 'Type')
            const weightA = getWeight(a.Type);
            const weightB = getWeight(b.Type);

            // Compare weights first (higher weight comes first)
            if (weightA !== weightB) {
                return weightB - weightA;
            }

            // If weights are equal, compare timestamps (newest first, using API casing 'Timestamp')
            const dateA = new Date(a.Timestamp);
            const dateB = new Date(b.Timestamp);
            return dateB - dateA;
        });

        // Get the top 10 notifications
        const topTen = sortedNotifications.slice(0, 10);

        // Print to console
        console.log("\n=== TOP 10 NOTIFICATIONS (Sorted by Priority) ===\n");
        console.log(JSON.stringify(topTen, null, 2));
        console.log("\n=== END OF NOTIFICATIONS ===\n");

    } catch (error) {
        console.error("Error fetching notifications:", error);
    }
};

// Call the function
getTopNotifications();
