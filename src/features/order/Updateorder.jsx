import React from "react";
import Button from "../../ui/Button";
import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";

const Updateorder = ({ order }) => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type={"primary"}>Make priority</Button>
    </fetcher.Form>
  );
};

export default Updateorder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
