import SEO from "@/components/common/SEO";
import Content from "@/components/Content";
import Header from "@/components/Header";
import Items from "@/components/Items";
import SidebarLeft from "@/components/SidebarLeft";
import SidebarRight from "@/components/SidebarRight";

export default function Index() {
  return (
    <>
      <SEO title="NFT Dashboard" slug="/" />
      <SidebarLeft />
      <Header />

      <div className="flex flex-col md:flex-row">
        <div className="w-48 hidden lg:block shrink-0" />
        <div className=" grow ">
          <Content />
          <Items />
        </div>
        <SidebarRight />
      </div>
    </>
  );
}
