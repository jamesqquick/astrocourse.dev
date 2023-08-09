<script lang="ts">
  import { validateEmail } from '../utils/newsletter';

  const newsletterId = import.meta.env.PUBLIC_NEWSLETTER_ID;
  const subscribeURL = import.meta.env.PUBLIC_NEWSLETTER_SUBSCRIBE_URL;
  export let heading: string | null = null;
  export let subheading: string | null = null;
  export let buttonText: string;
  let email = '';
  let errorMsg: string | null = null;
  let successMsg: string | null = null;
  let loading = false;

  const handleOnSubmit = async (_: SubmitEvent) => {
    loading = true;

    if (!validateEmail(email)) {
      loading = false;
      return (errorMsg = 'Please enter a valid email.');
    }

    try {
      const res = await fetch(`/api/newsletter/subscribe?id=${newsletterId}`, {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.status !== 200) {
        errorMsg = 'Subscribe failed. Please try again.';
      } else {
        errorMsg = null;
        successMsg = 'You have been subscribed!';
        email = '';
      }
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    } finally {
      errorMsg = 'Subscribe failed. Please try again.';
      loading = false;
    }
  };
</script>

<div class="relative bg-white py-6 p-4 pt-12 md:p-10 rounded-2xl">
  <div
    class="absolute border-4 bg-white border-purple-200 -top-24 md:-top-12 right-[50%] translate-x-1/2 md:translate-x-0 md:-right-12 h-36 w-36 rounded-full flex flex-col items-center justify-center text-center p-1 md:p-2"
  >
    <p class="text-violet-900 text-4xl font-bold relative !my-0">
      25 <span
        class="absolute text-lg text-violet-700 -top-0 md:-top-2 -right-4 md:-right-4"
        >%</span
      >
    </p>
    <p class="text-violet-900 text-base !my-0">Early bird discount</p>
  </div>

  {#if !successMsg}
    {#if heading}
      <h2
        class={`text-3xl font-bold md:text-4xl text-purple-900 mb-2 md:mb-4 `}
      >
        {heading}
      </h2>
    {/if}
    {#if subheading}
      <p class=" text-left text-light text-gray-700 text-xl mb-4">
        {subheading}
      </p>
    {:else}
      <p class=" text-left text-light text-gray-700 text-xl mb-4">
        Receive <span class="font-bold underline underline-offset-4"
          >course updates</span
        >
        and a
        <span class="font-bold underline underline-offset-4"
          >25% discount code</span
        > on launch day!
      </p>
    {/if}

    <!-- <form
        action="https://learn.jamesqquick.com/email_lists/515676/subscriptions"
        method="POST"
        > -->
    <form on:submit|preventDefault={handleOnSubmit}>
      <div class="h-6">
        {#if errorMsg}
          <p class="text-red-400">{errorMsg}</p>
        {/if}
      </div>
      <label
        for="email"
        class="text-gray-700 font-light block mb-1 text-left"
        aria-label="Email">Email Address</label
      >
      <div class="flex flex-col lg:flex-row gap-4">
        <input
          type="text"
          name="email"
          bind:value={email}
          class="grow rounded-lg py-1 px-4 text-lg text-gray-950 border border-gray-500 placeholder-gray-400"
          placeholder="developer@dev.com"
        />
        <button
          class={` text-white bg-gradient-to-r from-blue-800 to-purple-800 px-8 py-4 rounded-lg  text-sm sm:text-xl md:text-2xl  lg:w-auto hover:scale-105 transition-transform inline-block duration-200`}
          disabled={loading}
        >
          {loading ? 'Loading...' : buttonText}
        </button>
      </div>
    </form>
  {/if}
  {#if successMsg}
    <h2
      class={`text-4xl font-bold md:text-6xl text-purple-500 mb-4 text-center`}
    >
      Success!
    </h2>

    <p class={`text-xl  md:text-2xl text-gray-700 mb-4 text-center`}>
      You just made an amazing decision. 👏
    </p>
    <p class={`text-lg  md:text-xl text-gray-700 mb-4 text-center`}>
      Keep an eye out for course updates and an exclusive launch discount! 🔥🔥
    </p>
  {/if}
</div>
