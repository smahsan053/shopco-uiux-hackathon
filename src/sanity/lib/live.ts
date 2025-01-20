import { defineLive } from "next-sanity";
import { client } from './client'

const token = process.env.SANITY_API_READ_TOKEN || "skzj2On2tigAkc9UJYnHS1VXQKKYxHaUq7336FqGV0a8XKCxpqiJXAe6iJ3JOntci0zAa2EvxYbPkUpm3KTQvlvMSBWNc7x7BsLLQG7dI6nMm3S2KO3zfzFdlTrGSuM0duklRhzHjJ5fJIQevW48JdgT2DqYyE4mzwM5tUt6l5btSAWv0dh8"
if (!token) {
  throw new Error('Missing SANITY_API_READ_TOKEN')
}
export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
  fetchOptions: { revalidate: 0 }
})