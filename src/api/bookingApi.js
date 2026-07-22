const API_BASE_URL = "http://localhost:8080/api";

export const createBooking = async (bookingData) => {
  const response = await fetch(
    `${API_BASE_URL}/bookings`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    }
  );

  const text = await response.text();

  if (!response.ok) {
    throw new Error(text || "Booking failed");
  }

  return text;
};