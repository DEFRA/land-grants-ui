import { config } from "~/src/config/config.js";

const LAND_GRANTS_API_URL = config.get("landGrantsApi");

export const fetchBusinessData = async (sbi, crn) => { 

  const response = await fetch(`${LAND_GRANTS_API_URL}/business/${sbi}/${crn}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = new Error(response.statusText)
    error.code = response.status;
    throw error;
  }

  return response.json();
}
