import Button from "@/components/ui/button";
import ComponentBlock from "@/components/component-block";
import GetStarted from "@/components/get-started";
import Hero from "@/components/hero";
import Icons from "@/components/icons";
import PreviewColumn from "@/components/preview-column";

export default function Home() {
  return (
    <>
      <Hero />
      <ComponentBlock
        title="Components"
        description="Reusable building blocks like buttons, cards, and forms"
        items={[
          <div key="1" className="block">
            <PreviewColumn />
          </div>,
          <div key="2" className="block">
            <PreviewColumn reverse />
          </div>,
        ]}
      >
        <Button href="/components">Explore components</Button>
      </ComponentBlock>
      <ComponentBlock
        title="Icons"
        description="A clean, consistent icon set for any user interface"
        reverse
        items={[
          <div key="1" className="block">
            <Icons variant="single-column" showSearch={false} />
          </div>,
          <div key="2" className="block">
            <Icons variant="single-column" reverse showSearch={false} />
          </div>,
        ]}
      >
        <Button href="/icons">Explore icons</Button>
      </ComponentBlock>
      <GetStarted />
    </>
  );
}
