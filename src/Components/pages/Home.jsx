import Section from "../Section";
import homeItems from "../../data/homeItems";

const Home = () => {

  return (
    <div className="grid gap-y-8">
      <Section
        title={"Recently played"}
        more="/section/FSDgdfgDFGDFGd"
        items={homeItems}
      />
      <Section
        title={"To get you started"}
        more="/section/FSDgdfgDFGDFGd"
        items={homeItems}
      />
      <Section
        title={"More like Idris & Leos"}
        more="/section/FSDgdfgDFGDFGd"
        items={homeItems}
      />
    </div>
  );
};

export default Home;
