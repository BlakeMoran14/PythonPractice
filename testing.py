# Imports

import lyricsgenius as lg

# Inits

file = open("C:/Users/818523/Desktop/auto_.txt", "w")

genius = lg.Genius("nqZ4tY4oyyE6VTgmgN95T99Gy_dNAsr8cnIFwyxH_uYDCtHCfvZSF4l8bj5REoz9W-5Cte_YhsL9PyicdksJ1w", skip_non_songs=True, excluded_terms=["(Remix)", "(Live)"], remove_section_headers=True)

# Main Code

genius.song