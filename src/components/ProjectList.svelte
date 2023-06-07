<script lang="ts">
  const projects = [
    {
      title: 'Supercharged Markdown Blog',
      description: `Building a basic blog is a given, but for this demo, you'll take it to the next level by adding powerful features like tags, pagination, authentication, comments, and more.`,
    },
    // {
    //   title: 'Personal Portfolio',
    //   description: `Experience the power of MDX by building a personal portfolio as well as a contact form using API routes with an SSR enabled Astro project.`,
    // },
    // {
    //   title: 'Modern Meetup Clone',
    //   description: `This demo takes you beyond embedded markdown content as you incorporate Storyblok, a powerful Headless CMS. You'll also embedded maps using Google Maps as well as internationalization, and more!`,
    // },
  ];

  let selectedIndex = 1;

  const selectProject = (index: number) => {
    selectedIndex = index;
  };
</script>

<div
  class="text-xl flex flex-col lg:flex-row gap-y-24 my-8 xl:gap-x-10 items-center relative mb-20"
>
  <div
    class="gap-x-4 lg:w-1/2 items-center border border-white p-8 rounded-xl text-left"
  >
    <div class="flex gap-x-2 items-center mb-1 justify-center lg:justify-start">
      <h3 class="text-white text-2xl font-bold mb-2 text-center">
        {projects[0].title}
      </h3>
    </div>
    <span class="block text-lg text-gray-200">
      {projects[0].description}
    </span>
  </div>
  <div
    class=" lg:w-2/3 lg:relative translate-x-0 lg:translate-x-40 -order-1 lg:order-2"
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
  <!-- <img src="/images/logos/storyblok.svg" class="h-8" alt="Astro Icon" /> -->
  <img src="/images/logos/tailwind.svg" class="h-8" alt="Astro Icon" />
  <img src="/images/logos/xata.svg" class="h-8" alt="Astro Icon" />
</div>
