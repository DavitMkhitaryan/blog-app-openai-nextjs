import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { AppLayout } from "../../components/AppLayout";

export default function Post() {
  const router = useRouter();
  const { postid } = router.query;

  return (
    <div>
      <h1>Post Page {postid}</h1>
    </div>
  );
}

Post.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>
}

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
