import { auth } from "@clerk/nextjs/server";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchFromAPI(endpoint: string) {
  noStore(); // Opt out of caching for this request

  try {
    const { userId, getToken } = await auth();

    if (!userId) {
      throw new Error("Not authenticated");
    }

    const token = await getToken();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "X-User-ID": userId,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error in fetchFromAPI:", error);
    throw error;
  }
}
