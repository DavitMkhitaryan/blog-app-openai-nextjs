import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function TokenTopUp() {
  return (
    <div>
      <h1>Token Top Up Page</h1>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
