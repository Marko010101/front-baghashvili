export const menuItems = [
  {
    label: "Demos",
    submenu: [
      { label: "Dashboard Overview", href: "/dashboard" },
      {
        label: "User Management",
        href: "/profile",
        submenu: [
          { label: "Edit Profile", href: "/profile/edit" },
          { label: "Account Settings", href: "/profile/settings" },
        ],
      },
      { label: "System Preferences", href: "/settings" },
    ],
  },
  {
    label: "Post",
    submenu: [
      { label: "Create New Post", href: "/post/new" },
      { label: "Manage Posts", href: "/post/manage" },
      {
        label: "Content Strategy",
        href: "/post/strategy",
        submenu: [
          { label: "SEO Optimization", href: "/post/seo" },
          { label: "Engagement Analytics", href: "/post/analytics" },
        ],
      },
    ],
  },
  {
    label: "Features",
    submenu: [
      { label: "Advanced Search", href: "/features/search" },
      { label: "AI-powered Suggestions", href: "/features/ai" },
      { label: "Collaborative Tools", href: "/features/collaboration" },
    ],
  },
  {
    label: "Categories",
    submenu: [
      { label: "Technology", href: "/categories/technology" },
      { label: "Design & Creativity", href: "/categories/design" },
      { label: "Business & Strategy", href: "/categories/business" },
    ],
  },
  {
    label: "Shop",
    submenu: [
      { label: "Digital Products", href: "/shop/digital" },
      { label: "Exclusive Bundles", href: "/shop/bundles" },
      { label: "Subscription Plans", href: "/shop/subscriptions" },
    ],
  },
  { label: "Buy Now", href: "/purchase" },
];
