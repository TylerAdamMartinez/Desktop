import { Head } from "fresh/runtime";
import { define } from "@/utils.ts";

export default define.page(function Home() {
  return (
    <div class="px-4 py-8 mx-auto fresh-gradient min-h-screen">
      <Head>
        <title>Init</title>
      </Head>
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
      </div>
    </div>
  );
});
