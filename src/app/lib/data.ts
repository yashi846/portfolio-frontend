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

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function getWorksClient(lang: string): Promise<Work[]> {
  const res = await fetch(`${API_BASE_URL}/api/works?lang=${lang}`);

  if (!res.ok) {
    throw new Error("Failed to fetch works");
  }
  return res.json();
}
