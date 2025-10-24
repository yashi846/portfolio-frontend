export type Work = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  technicalHighlights: string[];
  language: string[];
  framework: string[];
  repositoryUrl: string;
  imageUrl: string | null;
  imageAlt: string | null;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

export async function getWorksClient(lang: string): Promise<Work[]> {
  if (!API_BASE_URL) {
    console.warn(
      "NEXT_PUBLIC_API_URL is not set. getWorksClient will return an empty array."
    );
    return [];
  }

  try {
    const url = `${API_BASE_URL.replace(
      /\/$/,
      ""
    )}/api/works?lang=${encodeURIComponent(lang)}`;
    const res = await fetch(url);

    if (!res.ok) {
      console.error("getWorksClient: bad response", res.status, res.statusText);
      return [];
    }

    return (await res.json()) as Work[];
  } catch (err) {
    console.error("getWorksClient: failed to fetch works", err);
    return [];
  }
}
