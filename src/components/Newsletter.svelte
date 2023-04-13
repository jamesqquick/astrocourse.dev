<script>
  import { validateEmail } from '../utils/newsletter';

  const newsletterId = import.meta.env.PUBLIC_NEWSLETTER_ID;
  const subscribeURL = `/api/newsletter/subscribe?id=${newsletterId}`;

  let email = '';
  let errorMsg = null;
  let successMsg = null;
  const handleOnSubmit = async (e) => {
    const formData = new FormData(e.target);
    if (!validateEmail(email)) {
      return (errorMsg = 'Please enter a valid email');
    }

    try {
      const res = await fetch(subscribeURL, {
        method: 'POST',
        body: formData,
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
    }
  };
</script>

<div
  class="bg-gray-200 px-4 py-20 bg-cover bg-[url('/Envelope-Pattern.svg')]"
  id="newsletter"
>
  <div
    class={`bg-gradient-to-r p-2 from-blue-800 to-purple-800  rounded-3xl max-w-4xl mx-auto`}
  >
    <div class="bg-gray-800 rounded-3xl py-8 px-2 md:px-8 md:py-16">
      <h2
        class={`text-4xl font-bold md:text-6xl text-purple-500 mb-4 text-center`}
      >
        Don't Miss Out
      </h2>
      {#if !successMsg}
        <p class="text-white text-xl text-center mb-6">
          Sign up to receive <span
            class="underline underline-offset-4 decoration-purple-500"
            >course updates</span
          >
          and an
          <span class="underline underline-offset-4 decoration-purple-500"
            >exclusive discount code</span
          > on launch day!
        </p>
        <form on:submit|preventDefault={handleOnSubmit}>
          <label for="email" class="text-gray-300 font-bold block mb-1"
            >Email Address</label
          >
          <input
            type="text"
            name="email"
            id="email"
            bind:value={email}
            class="w-full bg-gray-700 rounded-lg py-2 px-4 text-xl text-white border-2 border-purple-700 placeholder-gray-400"
            placeholder="developer@dev.com"
          />
          <div class="h-8">
            {#if errorMsg}
              <p class="text-red-400">{errorMsg}</p>
            {/if}
          </div>
          <div class="mt-4 text-center">
            <button
              class={`border-2 text-white bg-purple-500 px-8 py-2 rounded-full bg-transparent text-sm sm:text-xl md:text-2xl font-bold border-purple-700 w-full lg:w-auto hover:scale-105 transition-transform inline-block duration-200`}
            >
              Sign Me Up!
            </button>
          </div>
        </form>
      {/if}
      {#if successMsg}
        <p class={`text-2xl  md:text-4xl text-white text-center mb-1`}>
          Subscribed! 🔥🔥
        </p>
        <p class={`text-xl  md:text-2xl text-white mb-4 text-center`}>
          Keep an eye out for course updates and announcements!
        </p>
      {/if}
    </div>
  </div>
</div>
