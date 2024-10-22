import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreasecItem, increaseItem } from "./cartSlice";

const UpdateItemQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type={"round"} onClick={() => dispatch(decreasecItem(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type={"round"} onClick={() => dispatch(increaseItem(pizzaId))}>
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
