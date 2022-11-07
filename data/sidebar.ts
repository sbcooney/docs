import { SidebarSection } from "./types";

const sidebarContent: SidebarSection[] = [
  {
    title: "Getting started",
    slug: "/getting-started",
    desc: "A technical and non-technical introduction to the basics of Knock, and a step-by-step guide to get you going in minutes.",
    pages: [
      { slug: "/what-is-knock", title: "What is Knock?" },
      { slug: "/how-knock-works", title: "How Knock works" },
      { slug: "/quick-start", title: "Quick start" },
      { slug: "/example-app", title: "Example apps" },
      { slug: "/knock-and-postman", title: "Knock and Postman" },
      { slug: "/security", title: "Security", path: "/security" },
      { slug: "/going-to-production", title: "Going to production" },
    ],
  },
  {
    title: "Send & manage data",
    slug: "/send-and-manage-data",
    desc: "Learn how to get data flowing into Knock to power your notifications.",
    pages: [
      { slug: "/concepts", title: "Concepts" },
      { slug: "/users", title: "Users" },
      { slug: "/preferences", title: "Preferences" },
      { slug: "/environments", title: "Environments" },
      { slug: "/objects", title: "Objects" },
      { slug: "/tenants", title: "Tenants" },
      { slug: "/outbound-webhooks", title: "Outbound webhooks" },
    ],
  },
  {
    title: "Send notifications",
    slug: "/send-notifications",
    desc: "Learn how to design and send notifications using Knock, then explore advanced features such as batching, delays, and more.",
    pages: [
      {
        slug: "/designing-workflows",
        title: "Designing workflows",
        pages: [
          { slug: "/", title: "Overview" },
          { slug: "/template-editor", title: "Template editor" },
          { slug: "/batch-function", title: "Batch function" },
          { slug: "/delay-function", title: "Delay function" },
          { slug: "/fetch-function", title: "Fetch function" },
          { slug: "/step-conditions", title: "Step conditions" },
          {
            slug: "/reference-liquid-helpers",
            title: "Reference: liquid helpers",
          },
          { slug: "/reference-email-layout", title: "Reference: email layout" },
        ],
      },
      { slug: "/triggering-workflows", title: "Triggering workflows" },
      { slug: "/canceling-workflows", title: "Canceling workflows" },
      { slug: "/setting-preferences", title: "Setting preferences" },
      { slug: "/setting-channel-data", title: "Setting channel data" },
      { slug: "/delivering-notifications", title: "Delivering notifications" },
      { slug: "/debugging-workflows", title: "Debugging workflows" },
    ],
  },
  {
    title: "Building in-app UI",
    slug: "/in-app-ui",
    desc: "Use the Knock in-app experiences APIs and components to build rich notifications experiences inside of your product.",
    pages: [
      { slug: "/overview", title: "Overview" },
      {
        slug: "/security-and-authentication",
        title: "Security & authentication",
      },
      {
        title: "React",
        slug: "/react",
        pages: [
          { slug: "/overview", title: "Overview" },
          { slug: "/feed", title: "Feeds" },
          { slug: "/toasts", title: "Toasts" },
          { slug: "/inbox", title: "Inbox" },
          {
            slug: "/custom-notifications-ui",
            title: "Custom notifications UI",
          },
          { slug: "/preferences", title: "Preferences" },
          { slug: "/reference", title: "API reference" },
        ],
      },
      {
        title: "Javascript",
        slug: "/javascript",
        pages: [
          { slug: "/overview", title: "Overview" },
          { slug: "/quick-start", title: "Quick start" },
          { slug: "/reference", title: "API reference" },
        ],
      },
      {
        title: "React Native",
        slug: "/react-native",
        pages: [{ slug: "/overview", title: "Overview" }],
      },
      {
        title: "iOS (Swift)",
        slug: "/ios",
        pages: [{ slug: "/overview", title: "Overview" }],
      },
      {
        title: "Android (Kotlin)",
        slug: "/android",
        pages: [{ slug: "/overview", title: "Overview" }],
      },
    ],
  },
  {
    title: "Manage your account",
    slug: "/manage-your-account",
    pages: [
      { slug: "/authentication-methods", title: "Authentication methods" },
      { slug: "/saml-sso", title: "SAML SSO" },
      { slug: "/managing-members", title: "Managing members" },
      { slug: "/roles-and-permissions", title: "Roles and permissions" },
      { slug: "/audit-logs", title: "Audit logs" },
    ],
  },
];

export default sidebarContent;
