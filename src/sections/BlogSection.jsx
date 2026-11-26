import FooterSection from "./FooterSection";
import RecentBlogsSection from "./RecentBlogsSection";
const blogPosts = {
  featured: {
    category: "Technology",
    date: "17 Feb, 2024",
    title: "How AI is Changing the Way We Work and Live",
    image: "/images/blog-ai-plain.jpg",
    alt: "Blue glowing fibre-optic technology",
  },
  travel: {
    category: "Travel",
    date: "17 Feb, 2024",
    title: "How to Travel Like a Local: Insider Tips",
    image: "/images/blog-travel-plain.jpg",
    alt: "Road trip through a rocky landscape",
  },
  lifestyle: {
    category: "Lifestyle",
    date: "17 Feb, 2024",
    title: "5 Daily Habits for a More Productive Life",
    image: "/images/blog-lifestyle-plain.jpg",
    alt: "Minimal desk setup with a clock and plant",
  },
};

const BlogMeta = ({ category, date }) => (
  <div className="flex items-center gap-5 font-['Inter'] text-[13px] font-normal text-white sm:text-[14px]">
    <span>{category}</span>
    <span className="h-px w-10 bg-white/80" />
    <span>{date}</span>
  </div>
);

const BlogSection = () => {
  const { featured, travel, lifestyle } = blogPosts;

  return (
    <>
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-[1250px] grid-cols-1 gap-5 lg:grid-cols-[1.75fr_1fr]">

          {/* Featured Blog */}
          <article className="group relative min-h-[340px] overflow-hidden sm:min-h-[460px] lg:min-h-[585px]">
            <img
              src={featured.image}
              alt={featured.alt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 z-10 w-full p-5 sm:p-7 lg:p-8">
              <BlogMeta
                category={featured.category}
                date={featured.date}
              />
              <h2 className="mt-5 max-w-[650px] font-['Inter'] text-[23px] font-medium leading-[1.25] text-white sm:text-[28px] lg:text-[32px]">
                {featured.title}
              </h2>
            </div>
          </article>

          {/* Right Side Blogs */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">

            {/* Travel Blog */}
            <article className="group relative min-h-[260px] overflow-hidden sm:min-h-[300px] lg:min-h-0">
              <img
                src={travel.image}
                alt={travel.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 z-10 w-full p-5 sm:p-6">
                <BlogMeta
                  category={travel.category}
                  date={travel.date}
                />
                <h3 className="mt-4 font-['Inter'] text-[19px] font-medium leading-[1.25] text-white sm:text-[21px]">
                  {travel.title}
                </h3>
              </div>
            </article>

            {/* Lifestyle Blog */}
            <article className="group relative min-h-[260px] overflow-hidden sm:min-h-[300px] lg:min-h-0">
              <img
                src={lifestyle.image}
                alt={lifestyle.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 z-10 w-full p-5 sm:p-6">
                <BlogMeta
                  category={lifestyle.category}
                  date={lifestyle.date}
                />
                <h3 className="mt-4 font-['Inter'] text-[19px] font-medium leading-[1.25] text-white sm:text-[21px]">
                  {lifestyle.title}
                </h3>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
     <RecentBlogsSection />
     <FooterSection />
    </>
  );
};

export default BlogSection;
