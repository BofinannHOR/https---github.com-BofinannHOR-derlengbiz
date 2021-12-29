import Head from "next/head";
import Image from "next/image";
import Alert from "../components/Alert";
import ContractUs from "../components/ContractUs";
import Faq from "../components/Faq";
import HowItWork from "../components/HowItWork";
import Introduction from "../components/Introduction";
import Layout from "../components/Layout";
import NavTest from "../components/NavBar";
import OurService from "../components/OurService";
import TopSuppier from "../components/TopSuppier";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Alert />
      <Introduction />
      <OurService />
      <HowItWork />
      <Faq />
      <TopSuppier />
      <ContractUs />
    </Layout>
  );
}
