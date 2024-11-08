import BlogItem from "./BlogItem";

import "../styles/BlogPage.css";

const DUMMY_VALUE = [
  {
    key: "1",
    title: "The Anxiety Guy",
    desc: "The Real Warriors Blog is a fantastic multi-media public education initiative that keeps people informed about PTSD and other mental health and military-related issues. It’s a comprehensive and caring resource for service members, veterans, and military families dealing with unseen wounds. #ReachingOutIsASignOfStrength",
    author: "Swarab Raul",
  },
  {
    key: "2",
    title: "Real Warriors",
    desc: "The Real Warriors Blog is a fantastic multi-media public education initiative that keeps people informed about PTSD and other mental health and military-related issues. It’s a comprehensive and caring resource for service members, veterans, and military families dealing with unseen wounds. #ReachingOutIsASignOfStrength",
    author: "Swarab Raul",
  },
  {
    key: "3",
    title: "Bipolar Burble Blog",
    desc: "Natasha Tracy, Burble’s blogger, is an award-winning writer, speaker, and social media strategist who aims to provide accurate, intelligent, and trustworthy information regarding the bipolar disease. The mental health awareness blog began in 2003 as a personal chronicle of her bipolar disorder struggles. And still, expanding and climbing within the mental health community, gaining thousands of views each day.",
    author: "Emily Johnson",
  },
  {
    key: "4",
    title: "OCDtalk",
    desc: "OCDtalk is a fantastic mental health awareness blog and resource created by a woman whose son suffered from severe obsessive-compulsive disorder and was utterly disabled. It promotes OCD awareness by narrating extraordinary stories and includes information about media features, forthcoming events, and her book, Overcoming OCD: A Journey to Recovery.",
    author: "Daniel Rodriguez",
  },
  {
    key: "5",
    title: "The Art of Healing Trauma",
    desc: "Heidi Hanson, a blogger, was diagnosed with PTSD in 2007. Soon after began writing a blog to assist other trauma survivors in developing and maintaining a successful self-therapy practice in their daily lives. Hanson is currently putting the insights, clarity, and understanding from her blog into two books that will combine her love of art with her tremendous ability to write about surviving with PTSD.",
    author: "Jasmine Patel",
  },
  {
    key: "6",
    title: "Breaking the Stigma: A Journey Through Mental Health Awareness",
    desc: "In a world that often shies away from discussing mental health openly, it's crucial to embark on a journey of awareness and understanding. 'Breaking the Stigma' is not just a phrase; it's a call to action, an invitation to unravel the layers surrounding mental health. This journey begins with acknowledging that mental health is a fundamental aspect of our well-being. To break the stigma, we must first challenge misconceptions and promote open dialogue. It's about creating a safe space where individuals feel comfortable sharing their struggles without fear of judgment. Awareness is not just for those directly affected but for everyone. Understanding mental health fosters empathy, compassion, and a supportive community. As we traverse this path, let's amplify voices that have been silenced for too long. Let's educate ourselves, destigmatize seeking help, and promote a culture where mental health is as vital as physical health. Breaking the stigma is not a one-time effort but a continuous journey—a journey that paves the way for a more compassionate, understanding, and inclusive society. Together, let's dismantle the barriers surrounding mental health and foster an environment where everyone feels seen, heard, and supported.",
    author: "Michelle Lee",
  },
  {
    key: "7",
    title: "Rowdy Kittens",
    desc: "Rowdy Kittens is a blog created by Tammy Strobel, writer, photographer, and cat lover. Tammy was working at an investment management firm in Davis, California, and was caught up in the “work-spend treadmill.” Until one day she upped and left. She and her husband began donating their belongings to charity until they were left with just 100 personal items. They now live in a 400-square-foot studio where Tammy happily works as a web designer and freelance writer. She owns four plates, three pairs of shoes, and two pots.",
    author: "Ava Smith",
  },
  {
    key: "8",
    title: "Practicing Simplicity",
    desc: "Practising Simplicity, established in 2008 by Jodi Wislon, is a family and lifestyle blog. It’s a story of motherhood and the home, simple living, and good intentions. It covers a range of topics including the family home, motherhood, yoga, pregnancy, photography, travel, and lifestyle.",
    author: "Noah Chang ",
  },
  {
    key: "9",
    title: "Raising Simple",
    desc: "Raising Simple is the creation of Zoë Kim, author of the book Minimalism for Families. She’s the mother of four, and she partners with individuals who want to tackle the challenges of a cluttered home and life. Zoë believes in developing a minimalist lifestyle through positive perspective changes and practical solutions. Her goal is to help you find the best solution to simplify your home and life.",
    author: "Maya Patel",
  },
  {
    key: "10",
    title: "Tiny Ambitions",
    desc:
      "Tiny Ambitions is a blog and podcast about living a tiny, simple, intentional life. It’s based on the counter-cultural idea that life doesn’t need to be lived big. Tiny Ambitions was founded by Britt, a freelance writer, who writes about minimalism, decluttering, simple living, lifestyle, relationships, health & wellbeing, tiny houses, and sustainable living.",
    author: "Olivia Bennett",
  },
];

const BlogPage = () => {
  return (
    <div className="blogPage__main" >
      <h1>Blogs</h1>
      <p className="Blogpage_Intro">
        Our mental well-being blog offers expert insights, tips, and personal
        stories to boost your mental health. Join our community and find
        inspiration for a happier, healthier mind.
      </p>
      <div className="blogPage" >
        {DUMMY_VALUE.map((item) => {
          return (
            <BlogItem
              key={item.key}
              id={item.key}
              title={item.title}
              desc={item.desc}
              author={item.author}
            />
          );
        })}
      </div>
      {/* 
      {
        DUMMY_VALUE.map((item) => {
          return (
            <div className="blog" key={item.key}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <h5>{item.author}</h5>
            </div>
          );
        })
      } */}
      {/* <button>Load More</button> */}
    </div>
  );
};

export default BlogPage;
