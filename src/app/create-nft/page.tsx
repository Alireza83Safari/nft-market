import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CreateNftForm from "./components/CreateNftForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authoptions";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await getServerSession(authOptions);
  return (
    <>
      {(session as any)?.id ? (
        <>
          <Header />
          <CreateNftForm />
          <Footer />
        </>
      ) : (
        redirect("/login")
      )}
    </>
  );
}
