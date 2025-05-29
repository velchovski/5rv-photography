import Page from '@/components/page';
import Splash from '@/components/home/splash';
import Works from '@/components/home/works';
import About from "@/components/about";

export default function Home() {
  return (
    <Page>
      <Splash />
      <About />
      <Works />
    </Page>
  );
}
