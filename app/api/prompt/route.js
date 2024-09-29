import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.error("Error fetching all prompts:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to fetch all prompts",
        detail: error.message,
      }),
      { status: 500 }
    );
  }
};
