import { apiUrl } from "@/services/apiUrl";

export default async function getUser(id: string) {
  if (id) {
    const res = await fetch(`${apiUrl}api/user/${id}`);
    const data = await res.json();

    return data;
  }
}
