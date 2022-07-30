<script>
  import Router from "svelte-spa-router";
  import { routes } from "./routes";
  import Layout from "./Layout.svelte";
</script>

<body>
  <Layout>
    <Router {routes} />
  </Layout>
</body>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
