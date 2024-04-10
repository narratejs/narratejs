"use server";
export async function FetchJSONBlogBySlug(slug) {
    console.log("Hello from the server!");
    return {
        id: 1234,
        title: "Hello World",
        content: `# Welcome to My Tech Blog\n## Introduction\nWelcome to my very first blog post! Here, I'll share some insights on **_web development_**, specifically focusing on the **React** framework. \n## Why React?\nReact has become one of the most popular JavaScript libraries for building user interfaces. Here are a few reasons why:\n- **Declarative:** React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.\n- **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs.\n- **Learn Once, Write Anywhere:** You can develop new features in React without rewriting existing code.\n## Getting Started with React\nStarting with React is easy. Here's how you can create a new app:\n1. **Install Node.js:** Make sure you have Node.js installed on your machine.\n2. **Use Create React App:** Run the following command in your terminal:\n   \`\`\`bash\n   npx create-react-app my-app\n   \`\`\`\n3. **Start Your App:** Navigate to your app's directory and start it:\n   \`\`\`bash\n   cd my-app\n   npm start\n   \`\`\`\n## Conclusion\nReact is a powerful library for building interactive user interfaces. It's worth investing the time to learn it if you're interested in web development. Happy coding!\nThank you for reading my first blog post. Stay tuned for more!\n`,
        date: new Date().toISOString(),
        image_url: "https://placehold.co/600x315",
        slug,
    };
}
