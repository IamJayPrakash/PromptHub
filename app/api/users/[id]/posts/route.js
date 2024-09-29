import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );

    if (!prompts || prompts.length === 0) {
      return new Response(
        JSON.stringify({ message: "No prompts found for this user" }),
        {
          status: 404,
        }
      );
    }

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.error("Error fetching user's prompts:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to fetch prompts created by the user",
        detail: error.message,
      }),
      { status: 500 }
    );
  }
};
