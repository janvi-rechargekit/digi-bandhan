
import { Link } from "react-router-dom";

const recentBlogs = [
  {
    id: 1,
    category: "Lifestyle",
    date: "17 Feb, 2024",
    title: "Breaking Free from Your Comfort Zone",
    image: "/images/recent-blog-lifestyle.png",
    alt: "Person working on a laptop against an orange background",
  },
  {
    id: 2,
    category: "Career",
    date: "17 Feb, 2024",
    title: "How to Stand Out in a Competitive Job Market",
    image: "/images/recent-blog-career.png",
    alt: "Professionals collaborating in a modern office",
  },
  {
    id: 3,
    category: "Health",
    date: "17 Feb, 2024",
    title: "The Link Between Mental Health and Physical Health",
    image: "/images/recent-blog-health.png",
    alt: "Woman practising mindfulness in a peaceful room",
  },
];

const RecentBlogsSection = () => {
  return (
    <section className="w-full bg-whitept-8 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20">
      <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1250px]">

          {/* Section Heading */}
          <div className="mb-8 flex items-center justify-between sm:mb-10 lg:mb-12">
            <h2 className="font-['Inter'] text-[28px] font-normal leading-[1.2] tracking-[-0.7px] text-[#111111] sm:text-[34px] lg:text-[44px]">
              Recent Blogs
            </h2>

            <Link
              to="/blog"
              className="inline-flex shrink-0 items-center gap-3 font-['Inter'] text-[14px] font-semibold text-[#0047FF] transition-all duration-300 hover:gap-4 sm:text-[15px]"
            >
              View All
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {recentBlogs.map((blog) => (
              <article key={blog.id} className="min-w-0">

                {/* Blog Image */}
                <div className="w-full overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.alt}
                    className="aspect-[397/286] h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                {/* Category and Date */}
                <div className="mt-5 flex flex-wrap items-center gap-4 font-['Inter'] text-[13px] font-medium leading-[1.4] text-[#111111] sm:gap-5 sm:text-[14px] lg:text-[15px]">
                  <span>{blog.category}</span>
                  <span className="h-px w-10 bg-[#111111]" />
                  <span>{blog.date}</span>
                </div>

                {/* Blog Title */}
                <h3 className="mt-4 font-['Inter'] text-[17px] font-medium leading-[1.3] tracking-[-0.4px] text-[#111111] sm:text-[18px] lg:text-[23px]">
                  {blog.title}
                </h3>

              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default RecentBlogsSection;
