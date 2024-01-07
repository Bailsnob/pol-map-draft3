export default function InstructionsPage() {
  return (
    <>
      <h1>Instructions:</h1>
      <h3>Settings:</h3>
      <p>
        On the homepage, you will have the opportunity to change a few settings
        to decide which map you are provided. The first dropdown allows you to
        choose which states you want to play with. For example, if you are
        familiar with the politics of your home state, you could only choose it.
        Conversely, if you are familiar with the politics of every state, you
        can leave it blank or select everything. The two input boxes below allow
        you to chose between which years you want to guess. For example, if you
        are only familiar with elections in the 21st century, you could choose
        2000 in the first input box and 2020 in the second.
      </p>
      <br />
      <h3>Guessing:</h3>
      <p>
        Once you have chosen your settings, you can click start and begin
        guessing. There should be a choropleth map on the screen; use it to try
        and find out which part won, by how much they won, and when it was held.
      </p>
      <br />
      <h3>Tips and Tricks:</h3>
      <h4>Guessing the Winner:</h4>
      <p>
        Try looking for areas of the state with high population and see which
        side won. For example, in Illinois, Cook County (home to Chicago) and
        the Collar Counties that surround it contain most of the state's
        population, so, typically, if a candidate wins both Cook County and the
        Collar Counties, they win the election.
      </p>
      <h4>Guessing the Date:</h4>
      <p>
        It's hard to get exact answers with dates, but if you look carefully,
        you may be able to get an answer within 5 years of the correct one, or
        at least within the same party system. Look for areas that have changed
        their voting patterns over time. For example, in Texas, the Democrats
        have dominated the Rio Grande Valley until very recently (2020), so, if
        it seems like the Democratic candidate only narrowly won the valley, the
        election was probably more recent.
      </p>
      <h4>Guessing the Margin:</h4>
      <p>
        This is a bit more difficult, and really is best learned with practice.
        For starting, look for the winner's vote share in the high population
        areas. If it is in the 50s or 60s, that usually signifies a 0-5% margin,
        while anything larger signifies a larger margin.{" "}
      </p>
    </>
  );
}
