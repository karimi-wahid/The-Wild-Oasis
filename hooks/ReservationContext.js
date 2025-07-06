"use client";

const { createContext, useState, useContext } = require("react");

const ReservationContext = createContext();

function ReservationProvider({ children }) {
  const [range, setRange] = useState({ from: undefined, to: undefined });
  const resetRange = () => setRange({ from: undefined, to: undefined });
  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error("context was used outside provider");
  }
  return context;
}

export { ReservationProvider, useReservation };
