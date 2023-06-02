import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../components/AppLayout";
import { getAppProps } from "../utils/getAppProps";
import aiImage from "../public/p0ff8hmx.jpg";
import Image from "next/image";

export default function TokenTopUp() {
  const handleClick = async () => {
    const result = await fetch(`/api/addTokens`, {
      method: "POST",
    });

    const json = await result.json();
    console.log("RESULT: ", json);
    window.location.href = json.session.url;
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-24 gap-4">
      <h1 className="text-6xl text-green-500">Token Top Up</h1>
      <p>Click "Add Tokens" button to purchase more tokens</p>
      <button className="btn w-[50%]" onClick={handleClick}>
        Add Tokens
      </button>
      <div className="w-[50%] object-contain border">
        <Image src={aiImage} className="object-contain"/>
      </div>
    </div>
  );
}

TokenTopUp.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const props = await getAppProps(ctx);
    return {
      props,
    };
  },
});
