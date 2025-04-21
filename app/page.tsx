import Header from "./components/header";
import GetMoreDone from "./components/get-more-done";
import WorkTogether from "./components/work-together";
import YouGoToPlatform from "./components/you-go-to-platform";
import Feature from "./components/feature";
import TryWithTotalQSR from "./components/try-with-totalqsr";
import Finance from "./components/finance";

export default function Home() {
  return (
    <>
      <Header />
      <GetMoreDone />
      <Finance />
      <WorkTogether />
      <YouGoToPlatform />
      <Feature />
      <TryWithTotalQSR />
    </>
  );
}
