export default function DevelopmentPage() {
  return (
    <>
      <h1>Development</h1>
      <p>
        When I started working on this project in early 2022, I could not have
        imagined how much time it would take to complete. I built it with the
        goal of combining my interest in political science with my interest in
        computer science, and so I could create a complete repository of
        election results to reference as needed. In the process of developing
        this website, I faced many different challenges, so I would like to
        record some of them here.
      </p>
      <br />
      <ol>
        <li>
          {" "}
          - scraping data from thousands of websites containing election results
          (I used Wikipedia and Dave Leip's election atlas for data)
        </li>
        <li>
          - manually noting hundreds of county election results from books
        </li>
        <li>
          - making an{" "}
          <b>
            <u>
              <a href="https://github.com/Bailsnob/Pol_Map3/blob/main/preliminary/findCountyCoords.mjs">
                algorithm
              </a>
            </u>
          </b>{" "}
          to dilate lattitude longitude coordinates to pixel coordinates
        </li>
        <li>
          {" "}
          - creating an{" "}
          <b>
            <u>
              <a href="https://github.com/Bailsnob/Pol_Map3/blob/main/preliminary/colorizerRewritten.mjs">
                algorithm
              </a>
            </u>
          </b>{" "}
          to draw choropleth maps
        </li>
        <li> - creating thousands of custom-made choropleth maps</li>
        <li>
          - creating thousands of downloadable csvs containing election results
        </li>
      </ol>
      <h1>Future Changes</h1>
      <p>
        To improve the site, I want to keep moving backwards to get more and
        more election data. Currently, I have senatorial data from 1990 to 2023,
        gubernatorial data from 1990 to 2023, and presidential data from 1916 to
        2023. I want to keep going to make a larger repository for people to use
        and to make the game more interesting with more party systems.
      </p>
    </>
  );
}
