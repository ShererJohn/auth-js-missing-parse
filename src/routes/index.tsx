import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { useSignIn } from "./plugin@auth";

export default component$(() => {
  const signInSig = useSignIn()
  return (
    <>
      <Link href="/other-route/">Forward</Link>
      <br/>
      <button onClick$={()=>{
        signInSig.submit({redirectTo:"/"})
      }}>Log in</button>
    </>
  );
});
