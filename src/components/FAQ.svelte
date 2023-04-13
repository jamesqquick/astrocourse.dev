<script lang="ts">
  import type { faq } from '../utils/types';

  export let faq: faq;
  let open = false;
</script>

<div
  class="bg-gradient-to-r p-2 from-blue-800 to-purple-800 rounded-xl md:rounded-full lg:rounded-3xl"
>
  <div
    class="rounded-xl md:rounded-full lg:rounded-3xl px-6 md:px-20 py-8 lg:py-20 bg-blue-950 w-full h-full"
  >
    <p class="text-2xl lg:text-4xl font-bold text-purple-500 mb-2 lg:mb-6">
      {faq.question}
    </p>
    <p class="text-white text-lg lg:text-xl">{faq.answer}</p>
  </div>
</div>
