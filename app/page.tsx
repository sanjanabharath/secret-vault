"use client"

import { useRouter } from "next/navigation";
import LandingButton from "@/components/Buttons/LandingButton";


export default function Home() {
  const router = useRouter();
  return (
    <main className="page_main flex_center flex-col">
      <section className="page_main flex_center flex-col text-center h-full">
        <h1 className="text_highlight_gradient text_sub_heading_size">Credentials and Files</h1>
        <h1 className="text_primary_gradient text_big_heading_size">Protect Your Data</h1>
        <h1 className="md:mt-4 text_heading_size">with <span className="text_gradient">SecretVault</span></h1>
        <p className="w-9/12 md:w-8/12 lg:w-7/12 xl:w-6/12 text-center mt-8">SecretVault is a secure application designed to store user secrets and data using blockchain technology. With decentralized encryption, it ensures that your information is protected and tamper-proof. Experience peace of mind knowing your data is safeguarded with the highest level of security.</p>
        <div className="mt-4"><LandingButton text="Get Started" className="text-base xl:text-2xl md:text-xl" onClick={() => {
          router.push("/app")
        }}></LandingButton></div>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </main>
  );
}
