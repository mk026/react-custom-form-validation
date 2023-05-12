import { FC, PropsWithChildren, createContext, useState } from "react";

export interface INotificationContext {
  isOpen: boolean;
  toggleNotification: () => void;
  setData: (data: Record<string, string>) => void;
  data: Record<string, string>;
}

export const NotificationContext = createContext({} as INotificationContext);

const NotificationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});

  const toggleNotification = () => setIsOpen((prev) => !prev);

  const value = { isOpen, toggleNotification, data, setData };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
