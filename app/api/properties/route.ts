import connectDB from "@/config/database";
import Property from "@/models/Property";

// Get : api/properties
export const GET = async (Response: any) => {
  try {
    await connectDB();

    const Properties = await Property.find({});

    return new Response(JSON.stringify(Properties), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
