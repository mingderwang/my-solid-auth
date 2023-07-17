import styles from "./index.module.css";
import { type VoidComponent, Suspense, Show } from "solid-js";
import { createSession, signOut, signIn } from "@solid-auth/base/client";
import MyComponent from "~/components/MyComponent";
const Home: VoidComponent = () => {
  return (
    <main>
      <div class={styles.container}>
        <Suspense>
          <AuthShowcase />
        </Suspense>
        <MyComponent/>
      </div>
    </main>
  );
};

export default Home;

const AuthShowcase: VoidComponent = () => {
  const session = createSession();
  return (
    <div class={styles.authContainer}>
      <Show
        when={session()}
        fallback={
          <button
            onClick={() => signIn("discord", { redirectTo: "/" })}
            class={styles.loginButton}
          >
            Sign in
          </button>
        }
      >
        <span class={styles.showcaseText}>Welcome {session()?.user?.name}</span>
        <button
          onClick={() => signOut({ redirectTo: "/" })}
          class={styles.loginButton}
        >
          Sign out
        </button>
      </Show>
    </div>
  );
};
