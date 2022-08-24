import Section from "../Section";

const Home = () => {
  const items = [
    {
      id: 1,
      title: "Afro Hits",
      description:
        "Feel-good Afropop from Europe and Africa. Cover:  Burna Boy",
      image: "https://i.scdn.co/image/ab67706f00000002881cf6f471963ac17383aea3",
      type: "ablom",
    },
    {
      id: 2,
      title: "Best of Arab Pop",
      description:
        "Most adored pop hits from the Middle East and North Africa. Cover: Wael Kfoury",
      image: "https://i.scdn.co/image/ab67706f0000000275c0d02c86df8e3c82ba065a",
      type: "artist",
    },
    {
      id: 3,
      title: "Out The Mud",
      description: "Strictly for the streets. Cover: Nardo Wick",
      image: "https://i.scdn.co/image/ab67706f000000023b7039562dda8bfc8ac3aa09",
    },
    {
      id: 4,
      title: "Classical New Releases",
      description:
        "Updated every Friday with the very best classical new releases. Cover: Mao Fujita",
      image: "https://i.scdn.co/image/ab67706f00000002f4f0ef5428b9ed068dd1ddcb",
      type: "albom",
    },
    {
      id: 5,
      title: "Anime Now",
      description:
        "Best new Anime tracks for all Anime fans! 最新アニメシーンの話題曲をまとめてお届け！Illustration by",
      image: "https://i.scdn.co/image/ab67706f00000002678b81229c4b783dd816d87a",
      type: "podcast",
    },
    {
      id: 6,
      title: "KimBops!",
      description:
        "Rolling with the bops in your Kimbap. Bringing you the songs that are currently trending and everything else in between. Cover: NAYEON",
      image: "https://i.scdn.co/image/ab67706f0000000299b1ee46c4d679d0c37e6b10",
      type: "artist",
    },
  ];
  return (
    <div className="grid gap-y-8">
      <Section
        title={"Recently played"}
        more="/section/FSDgdfgDFGDFGd"
        items={items}
      />
      <Section
        title={"To get you started"}
        more="/section/FSDgdfgDFGDFGd"
        items={items}
      />
      <Section
        title={"More like Idris & Leos"}
        more="/section/FSDgdfgDFGDFGd"
        items={items}
      />
    </div>
  );
};

export default Home;
