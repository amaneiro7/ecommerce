import { config } from "../config";

export const getPreferenceId = async (order) => {
  const response = await fetch(`${config.serverUri}/api/create_preference`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });

  const data = await response.json();

  return data.id;
};
