import BlogItem from "./BlogItem";
const DUMMY_VALUES = [
  {
    key: "1",
    title: "The Art of Minimalist Living",
    desc: "Explore the principles of minimalist living, decluttering your space, and simplifying your life. Learn how to create a serene and organized home that promotes peace and mindfulness.",
    author: "Swarab Raul",
  },
  {
    key: "2",
    title: "Mastering the Basics of Healthy Cooking",
    desc: "If you're looking to improve your culinary skills and adopt a healthier lifestyle, this blog post is for you. Learn about essential cooking techniques, ingredient substitutions, and simple recipes to kickstart your journey towards better nutrition.",
    author: "Swarab Raul",
  },
];

const ResourcePage = () => {
  return (
    <div>
      <h1>Resources</h1>
      <h2>Videos</h2>
      
      <h2>Blogs</h2>
      <BlogItem
        id={DUMMY_VALUES[0].key}
        title={DUMMY_VALUES[0].title}
        desc={DUMMY_VALUES[0].desc}
        author={DUMMY_VALUES[0].author}
      />
      <BlogItem
        id={DUMMY_VALUES[1].key}
        title={DUMMY_VALUES[1].title}
        desc={DUMMY_VALUES[1].desc}
        author={DUMMY_VALUES[1].author}
      />
    </div>
  );
};

export default ResourcePage;
