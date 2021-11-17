import Layout from "@components/app/layout";
import { supabase } from "lib/supabaseClient";

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    // If no user, redirect to index.
    return { props: {}, redirect: { destination: "/", permanent: false } };
  }

  return { props: {} };
}

export default function Lesson() {
  return (
    <Layout>
      <div className="md:-mx-12 lg:-mx-20 md:px-12 lg:px-20 border-b border-gray-300">
        <div className="max-w-2xl my-24">
          <h1 className="text-5xl font-bold font-heading">
            What makes carbon so special?
          </h1>
          <h2 className="text-2xl">
            Dive into the properties of carbon that allow it to react in ways
            other elements cannot.
          </h2>
        </div>
      </div>
      <div className="text-xl mt-12">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
          sodales ex, vel consequat sem. Donec quis faucibus mauris. Vivamus
          condimentum bibendum felis id egestas. Mauris convallis ipsum ac
          ligula ultricies tristique. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nulla non turpis ultrices, tincidunt magna id, semper
          lectus.
        </p>
        <p>
          Sed vel ligula a dolor finibus lobortis. Etiam viverra tempus auctor.
          Phasellus congue quis neque ut commodo. Sed ultrices augue et lorem
          vestibulum maximus. Fusce ac velit eget nisi rhoncus feugiat et vel
          magna.
        </p>
        <p>
          Quisque luctus augue nec sem facilisis gravida. Integer lacus nisi,
          varius et scelerisque a, luctus at purus. Etiam feugiat tellus eu elit
          ultricies posuere. Vestibulum pulvinar metus vel sollicitudin mattis.
          Sed sed ullamcorper lacus, eu interdum mi. Nulla facilisi. In at
          blandit dolor. Maecenas elementum, lorem nec blandit interdum, risus
          felis maximus neque, a aliquam velit magna eu nisl. Vivamus volutpat
          enim at libero vestibulum elementum. Aenean odio libero, lacinia in
          facilisis eu, tincidunt vehicula ipsum. Donec vitae arcu at odio
          scelerisque commodo a et orci.
        </p>
        <p>
          Nam ac lacinia lorem. Nunc feugiat ligula sed eros malesuada
          efficitur. Integer tellus ligula, maximus vitae lorem et, luctus
          placerat neque. Suspendisse molestie lobortis erat ac placerat. Sed
          placerat lacus in ante pulvinar, at ultrices odio congue. Fusce id
          elit nec ex porta maximus. Vivamus mollis lobortis ex vel hendrerit.
        </p>
      </div>
    </Layout>
  );
}
