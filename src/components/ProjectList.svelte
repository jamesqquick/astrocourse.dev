<script lang="ts">
  const projects = [
    {
      title: 'Supercharged Markdown Blog',
      description: `Building a basic blog is a given, but for this demo, you'll take it to the next level by adding powerful features like tags, pagination, authentication, comments, and more.`,
    },
    {
      title: 'Personal Portfolio',
      description: `Experience the power of MDX by building a personal portfolio as well as a contact form using API routes with an SSR enabled Astro project.`,
    },
    {
      title: 'Modern Meetup Clone',
      description: `This demo takes you beyond embedded markdown content as you incorporate Storyblok, a powerful Headless CMS. You'll also embedded maps using Google Maps as well as internationalization, and more!`,
    },
  ];

  let selectedIndex = 1;

  const selectProject = (index: number) => {
    selectedIndex = index;
  };
</script>

<div class="text-xl flex gap-y-6 my-8 xl:gap-x-10 items-center relative mb-20">
  <ul class="flex flex-col w-full lg:w-1/2 gap-y-4">
    {#each projects as project, i}
      <li
        class="gap-x-4 items-center border-white p-8 rounded-xl lg:hover:bg-violet-900 hover:bg-opacity-50 transition-colors duration-300 lg:cursor-pointer"
        class:lg:border={selectedIndex === i + 1}
        on:click={() => selectProject(i + 1)}
      >
        <div class="flex gap-x-2 items-center mb-1">
          <span class="text-white font-bold">{project.title}</span>
        </div>
        <span class="block text-lg text-gray-200">
          {project.description}
        </span>
      </li>
    {/each}
  </ul>
  <div
    class="hidden lg:block w-2/3 lg:relative translate-x-20 lg:translate-x-40"
  >
    <div
      class="absolute -top-5 -bottom-5 left-10 right-0 bg-purple-400 rounded-lg opacity-20"
    />
    <img
      src={`/images/project-${selectedIndex}.jpg`}
      alt={`Project ${selectedIndex}`}
      class="rounded-lg z-10 relative"
    />
  </div>
</div>
<div class="flex flex-col sm:flex-row gap-x-6 gap-y-10 justify-center">
  <!-- <img src="/images/logos/astro.svg" class="h-8" alt="Astro Icon" /> -->
  <img src="/images/logos/cloudinary.svg" class="h-8" alt="Astro Icon" />
  <img src="/images/logos/storyblok.svg" class="h-8" alt="Astro Icon" />
  <img src="/images/logos/tailwind.svg" class="h-8" alt="Astro Icon" />
  <img src="/images/logos/xata.svg" class="h-8" alt="Astro Icon" />
</div>
