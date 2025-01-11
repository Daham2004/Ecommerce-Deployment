import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { Toaster } from "./components/ui/toaster.jsx";
import React, { useEffect, useState } from "react";
import CustomModal from "./components/Modal";

function WebSocketApp() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [notifications, setNotifications] = useState([]);

  // Simulate user type; replace this with real logic in your app
  const userType = sessionStorage.getItem("userType") || "user"; // Example: admin or user

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");

    ws.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    ws.onmessage = (event) => {
      console.log("Message received from server:", event.data);
      const data = JSON.parse(event.data);

      if (data.orderId && data.status) {
        // Generate message including orderId for both roles
        const message =
          userType === "admin"
            ? `Order ${data.orderId} status updated to: ${data.status}` // Admin-specific message
            : `Your order (ID: ${data.orderId}) status has been updated to: ${data.status}`; // User-specific message

        setModalMessage(message);
        setIsModalOpen(true);

        // Store notifications for debugging or logs
        setNotifications((prev) => [...prev, data]);
      }
    };

    ws.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };

    return () => {
      ws.close();
    };
  }, [userType]);

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
  };

  return (
    <div>
      <App />
      <div>
        {/* Hidden list to log notifications */}
        <ul className="hidden">
          {notifications.map((notif, index) => (
            <li key={index}>Order {notif.orderId} status: {notif.status}</li>
          ))}
        </ul>
        {/* Modal for displaying notifications */}
        <CustomModal isOpen={isModalOpen} onClose={closeModal} message={modalMessage} />
      </div>
      <Toaster />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <WebSocketApp />
      <Toaster />
    </Provider>
  </BrowserRouter>
);
