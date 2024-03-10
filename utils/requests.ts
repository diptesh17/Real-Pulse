const apidomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
async function fetchProperties() {
  try {
    // If domain is not available yet
    if (!apidomain) {
      return [];
    }
    const res = await fetch(`${apidomain}/properties`);

    if (!res.ok) {
      throw new Error("Failed to fetch data ");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { fetchProperties };
