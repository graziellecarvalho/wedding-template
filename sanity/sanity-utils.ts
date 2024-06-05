import { createClient, groq } from "next-sanity";

export async function getExperts() {
  const client = createClient({
    projectId: '03qmume0',
    dataset: 'production',
    apiVersion: '2022-03-07',
  })

  return client.fetch(
    groq`*[_type == "experts"]{
      _id,
      _createdAt,
      name,
      city,
      state,
      "profileImage": profileImage.asset->url,
      socials[] {
        title,
        url
      }
    }`
  )
}

// "slug": slug.current