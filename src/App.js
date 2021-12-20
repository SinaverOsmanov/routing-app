import React from "react";
import { withContent } from "./HOC/withContent";
import { Layout } from "./components/Layout";

export default function App() {
  const ContentHOC = withContent(Layout);

  return (
    <div className={`app col`}>
      <ContentHOC />
    </div>
  );
}
