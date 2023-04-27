<script lang="ts">
  import { validateEmail } from '../utils/newsletter';

  const newsletterId = import.meta.env.PUBLIC_NEWSLETTER_ID;
  const subscribeURL = import.meta.env.PUBLIC_NEWSLETTER_SUBSCRIBE_URL;
  export let heading: string | null = null;
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
      const res = await fetch(`${subscribeURL}?id=${newsletterId}`, {
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

{#if !successMsg}
  {#if heading}
    <h2
      class={`text-2xl font-bold md:text-4xl text-purple-500 mb-4 text-center`}
    >
      {heading}
    </h2>
  {/if}
  <p class="text-white text-left md:text-center text-xl mb-6">
    Receive <span class="font-bold text-purple-500">course updates</span>
    and an
    <span class="font-bold text-purple-500">exclusive discount code</span> on launch
    day!
  </p>
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
      class="text-gray-300 font-bold block mb-1 sr-only"
      aria-label="Email">Email Address</label
    >
    <div class="flex flex-col lg:flex-row gap-4">
      <input
        type="text"
        name="email"
        bind:value={email}
        class="grow bg-gray-700 rounded-lg py-2 px-4 text-xl text-white border-2 border-purple-700 placeholder-gray-400"
        placeholder="developer@dev.com"
      />
      <button
        class={`border-4 text-white bg-purple-600 hover:bg-purple-500 px-8 py-4 rounded-lg  text-sm sm:text-xl md:text-2xl font-bold border-purple-900  lg:w-auto hover:scale-105 transition-transform inline-block duration-200`}
        disabled={loading}
      >
        {loading ? 'Loading...' : buttonText}
      </button>
    </div>
  </form>
{/if}
{#if successMsg}
  <h2 class={`text-4xl font-bold md:text-6xl text-purple-500 mb-4 text-center`}>
    Success!
  </h2>

  <p class={`text-xl  md:text-2xl text-white mb-4 text-center`}>
    You just made an amazing decision. 👏
  </p>
  <p class={`text-lg  md:text-xl text-white mb-4 text-center`}>
    Keep an eye out for course updates and an exclusive launch discount! 🔥🔥
  </p>
{/if}
