import { createContext, useContext, useState } from "react";

const CardContext = createContext(null);

export const useCard = () => {
  const Context = useContext(CardContext);
  if (!Context) {
    throw new Error("Error");
  }
  return Context;
};

export const CardProvider = ({ children }) => {
  const [Card, SetCard] = useState([]);
  const AddtoCard = (product) => {
    const AddedProduct = Card.find((item) => item.id === product.id);
    if (AddedProduct) {
      const NewCard = Card.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      });
      SetCard(NewCard);
    } else {
      SetCard((prev) => [...prev, { ...product, count: 1 }]);
    }
  };
  const RemoveCard = (productId) => {
    const NewProducts = Card.filter((item) => item.id !== productId);
    SetCard(NewProducts);
  };
  const ClearCard = () => {
    SetCard([]);
  };
  const IncreaseCard = (productId) => {
    const NewCard = Card.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          count: item.count + 1,
        };
      }
      return item;
    });
    SetCard(NewCard);
  };
  const TotalPrice = () => {
    return Card.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
  };
  const DecreaseCard = (productId) => {
    const NewCard = Card.map((item) => {
      if (item.id === productId) {
        const newCount = item.count > 1 ? item.count - 1 : 1;
        return {
          ...item,
          count: newCount,
        };
      }
      return item;
    });
    SetCard(NewCard);
  };
  return (
    <CardContext.Provider
      value={{
        AddtoCard,
        RemoveCard,
        ClearCard,
        IncreaseCard,
        TotalPrice,
        Card,
        DecreaseCard,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
