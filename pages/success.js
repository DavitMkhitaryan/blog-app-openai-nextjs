import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../components/AppLayout";
import { getAppProps } from "../utils/getAppProps";
import Link from "next/link";

export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-6xl text-green-600">Thank You For Your Purchase!</h1>
      <p>You can see your tokens increased in your total balance in the dashboard.</p>
      <Link className="btn w-[30%] mt-8" href="/post/new">Start Generating</Link>
    </div>
  );
}

Success.getLayout = function getLayout(page, pageProps) {
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
