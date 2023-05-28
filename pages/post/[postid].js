import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const { postid } = router.query;

  return (
    <div>
      <h1>Post Page {postid}</h1>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
