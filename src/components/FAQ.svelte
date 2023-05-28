<script lang="ts">
  import type { faq } from '../utils/types';

  export let faq: faq;
  let open = false;
</script>

<div>
  <h3 class="text-2xl lg:text-4xl font-bold mb-2 lg:mb-6">
    {faq.question}
  </h3>
  <p class="text-white text-lg lg:text-xl tracking-wide">{faq.answer}</p>
</div>
