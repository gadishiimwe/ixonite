export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Web Design Trends to Watch in 2023",
    excerpt: "Discover the latest web design trends that are shaping the digital landscape this year.",
    content: `The digital design world is constantly evolving, and staying current with the latest trends is essential for creating modern, engaging websites.

In 2023, we're seeing a shift towards more immersive experiences, with trends like 3D elements, micro-interactions, and dark mode becoming standard practices.

Minimalist designs with bold typography continue to dominate, while accessibility considerations are finally getting the attention they deserve.

Voice user interfaces and AI-powered personalization are transforming how users interact with websites, creating more intuitive and tailored experiences.

These trends are shaping the future of web design, making it more user-centric and visually compelling.`,
    category: "Design",
    author: "Jean Paul",
    date: "June 15, 2023",
    image: "/lovable-uploads/web-prev.png"
  },
  {
    id: 2,
    title: "How to Optimize Your Website for Better Conversion Rates",
    excerpt: "Learn proven strategies to improve your website's conversion rates and drive more business.",
    content: "Conversion rate optimization (CRO) is the systematic process of increasing the percentage of website visitors who take desired actions. Start by analyzing your current conversion funnel to identify bottlenecks and drop-off points. A/B testing different elements like call-to-action buttons, headlines, and page layouts can reveal what resonates best with your audience. Simplifying your forms, improving page load speed, and creating compelling, benefit-focused content are all proven strategies to boost conversions. Remember that CRO is an ongoing process that requires continuous testing and refinement based on user behavior and analytics data.",
    category: "Marketing",
    author: "Marie Claire",
    date: "May 28, 2023",
    image: "/lovable-uploads/mobile-prev.png"
  },
  {
    id: 3,
    title: "The Importance of Mobile-First Design",
    excerpt: "Why designing for mobile devices first is crucial for modern websites and applications.",
    content: "Mobile-first design is no longer optional—it's essential. With over 60% of web traffic coming from mobile devices, prioritizing the mobile experience ensures you're meeting users where they are. This approach forces designers to focus on core content and functionality first, creating a solid foundation before adding complexity for larger screens. Mobile-first design also aligns with Google's mobile-first indexing, potentially improving your search rankings. The constraints of mobile design encourage better performance optimization, resulting in faster-loading sites across all devices. By starting with mobile, you create an inclusive experience that works for everyone, regardless of their device.",
    category: "Design",
    author: "Jean Paul",
    date: "April 10, 2023",
    image: "/lovable-uploads/mobile.png"
  },
  {
    id: 4,
    title: "E-commerce Security: Protecting Your Online Store",
    excerpt: "Essential security measures to keep your e-commerce website and customer data safe.",
    content: "Security breaches can devastate an e-commerce business, damaging both finances and reputation. Implementing HTTPS with SSL certificates is the bare minimum for securing customer data during transmission. Regular security audits and PCI DSS compliance are essential for businesses handling credit card information. Strong password policies, two-factor authentication, and secure payment gateways add critical layers of protection. Keep all software, plugins, and platforms updated to patch known vulnerabilities. Implement fraud detection systems to identify suspicious transactions before they're processed. Finally, create a security incident response plan so you're prepared if a breach does occur.",
    category: "Security",
    author: "Eric Mugisha",
    date: "March 22, 2023",
    image: "/lovable-uploads/qrCode.png"
  },
  {
    id: 5,
    title: "SEO Fundamentals for Small Businesses",
    excerpt: "A beginner's guide to search engine optimization for small business websites.",
    content: "For small businesses, effective SEO can level the playing field against larger competitors. Start with keyword research to understand what terms your potential customers are searching for. Optimize your website structure with clean URLs, proper heading tags, and descriptive meta descriptions. Create high-quality, relevant content that addresses your audience's needs and questions. Local SEO is particularly important for small businesses—claim and optimize your Google Business Profile, encourage customer reviews, and ensure consistent NAP (Name, Address, Phone) information across all online directories. Technical SEO elements like site speed, mobile-friendliness, and secure connections (HTTPS) are increasingly important ranking factors that shouldn't be overlooked.",
    category: "Marketing",
    author: "Marie Claire",
    date: "February 15, 2023",
    image: "/lovable-uploads/website-development-flyer-design.jpg"
  },
  {
    id: 6,
    title: "The Role of AI in Modern Web Development",
    excerpt: "How artificial intelligence is transforming the way we build and interact with websites.",
    content: "Artificial intelligence is revolutionizing web development across the entire process. AI-powered design tools can now generate layouts, color schemes, and even entire websites based on simple prompts. Chatbots and virtual assistants provide 24/7 customer service, answering questions and guiding users through complex processes. Personalization engines analyze user behavior to deliver tailored content, product recommendations, and experiences. Behind the scenes, AI helps developers write better code through intelligent code completion, bug detection, and automated testing. As these technologies continue to evolve, we can expect even deeper integration of AI in creating more intuitive, accessible, and personalized web experiences.",
    category: "Technology",
    author: "Eric Mugisha",
    date: "January 30, 2023",
    image: "/lovable-uploads/8e3da550-115b-40ff-8065-79cdc6e0db9f.png"
  },
  {
    id: 7,
    title: "Exploring Future Renewable Energy Innovations",
    excerpt: "Embark on a journey with us as we delve into the realms of innovation, share insights, and explore the transformative power of technology.",
    content: "Renewable energy is rapidly evolving with new technologies emerging to harness solar, wind, and other sustainable sources more efficiently. Innovations in energy storage, smart grids, and decentralized power generation are reshaping the energy landscape. This article explores the latest breakthroughs and their potential impact on the environment and economy.",
    category: "Energy",
    author: "Sophia Green",
    date: "December 11, 2023",
    image: "/lovable-uploads/renewable-energy.jpg"
  },
  {
    id: 8,
    title: "From Ideas to Impact in a Startup's Journey",
    excerpt: "Discover the critical steps and strategies that transform innovative ideas into impactful startups.",
    content: "Starting a successful startup requires more than just a great idea. It involves market research, building a strong team, securing funding, and continuous iteration. This article outlines the essential phases of a startup's journey and offers practical advice for aspiring entrepreneurs.",
    category: "Startup",
    author: "Liam Johnson",
    date: "November 20, 2023",
    image: "/lovable-uploads/startup-journey.jpg"
  },
  {
    id: 9,
    title: "Navigating the Tech Landscape with Insights",
    excerpt: "Stay ahead in the fast-paced tech world with expert insights and analysis.",
    content: "Technology is constantly changing, and staying informed is key to leveraging new tools and trends. This article provides an overview of current tech developments and offers guidance on adapting to the evolving landscape.",
    category: "Technology",
    author: "Emma Wilson",
    date: "November 20, 2023",
    image: "/lovable-uploads/tech-landscape.jpg"
  },
  {
    id: 10,
    title: "Behind the Scenes of Crafting Our Startup",
    excerpt: "A look into the creative process and challenges faced while building a startup.",
    content: "Building a startup involves creativity, resilience, and teamwork. This article shares behind-the-scenes stories and lessons learned from our startup journey.",
    category: "Startup",
    author: "Olivia Brown",
    date: "November 20, 2023",
    image: "/lovable-uploads/startup-crafting.jpg"
  },
  {
    id: 11,
    title: "Empowering Entrepreneurs Success Unveiled",
    excerpt: "Strategies and tips to empower entrepreneurs to achieve success.",
    content: "Entrepreneurship is challenging but rewarding. This article explores key strategies that successful entrepreneurs use to overcome obstacles and grow their businesses.",
    category: "Business",
    author: "James Smith",
    date: "November 21, 2023",
    image: "/lovable-uploads/entrepreneurs-success.jpg"
  },
  {
    id: 12,
    title: "Thriving in a Dynamic Startup Landscape",
    excerpt: "How to adapt and thrive in the ever-changing startup ecosystem.",
    content: "Startups face constant change and uncertainty. This article discusses how to stay agile and capitalize on opportunities in a dynamic environment.",
    category: "Startup",
    author: "Mia Davis",
    date: "December 8, 2023",
    image: "/lovable-uploads/startup-landscape.jpg"
  },
  {
    id: 13,
    title: "Strategies Propelling Tech Startups to Success",
    excerpt: "Effective strategies that drive tech startups towards success.",
    content: "Tech startups require focused strategies to succeed. This article highlights key approaches including product-market fit, customer engagement, and scaling techniques.",
    category: "Technology",
    author: "Ethan Martinez",
    date: "December 8, 2023",
    image: "/lovable-uploads/tech-startups.jpg"
  },
  {
    id: 14,
    title: "Pioneering the Future in Our Startup Showcase",
    excerpt: "Showcasing innovative startups shaping the future.",
    content: `Innovation drives progress. This article features startups that are pioneering new technologies and business models.

In this showcase, we explore how these startups are disrupting traditional industries with cutting-edge solutions. From advancements in AI and machine learning to sustainable energy innovations, these companies are setting new standards for success.

We delve into their journeys, challenges, and the impact they are making on the global market. This comprehensive overview highlights the creativity, resilience, and vision that fuel the startup ecosystem.

Readers will gain insights into emerging trends, investment opportunities, and the future landscape of technology-driven entrepreneurship.`,
    category: "Startup",
    author: "Isabella Garcia",
    date: "December 8, 2023",
    image: "/lovable-uploads/startup-showcase.jpg"
  },
  {
    id: 15,
    title: "Artificial Intelligence Impact on Modern Industries",
    excerpt: "Exploring AI's transformative impact across various industries.",
    content: "Artificial intelligence is reshaping industries from healthcare to manufacturing. This article examines AI applications and their benefits.",
    category: "Technology",
    author: "William Lee",
    date: "December 11, 2023",
    image: "/lovable-uploads/ai-impact.jpg"
  },
  {
    id: 16,
    title: "Healthy Eating Habits for a Busy Lifestyle",
    excerpt: "Tips for maintaining healthy eating habits despite a busy schedule.",
    content: "Balancing work and health can be challenging. This article offers practical advice for incorporating healthy eating into a hectic lifestyle.",
    category: "Health",
    author: "Sophia Martinez",
    date: "December 11, 2023",
    image: "/lovable-uploads/healthy-eating.jpg"
  }
];

export const getBlogPostById = (id: number): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  if (category === "All") return blogPosts;
  return blogPosts.filter(post => post.category === category);
};
