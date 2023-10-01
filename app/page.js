export async function getStaticProps() {
  // Fetch data for the homepage sections
  const heroData = await fetchHeroData();
  const workListData = await fetchWorkListData();
  const statListData = await fetchStatListData();
  const featuredProjectData = await fetchFeaturedProjectData();

  return {
    props: {
      heroData,
      workListData,
      statListData,
      featuredProjectData,
    },
  };
}
