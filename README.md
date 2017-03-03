# fb-post-checker

This is a fairly simple Node script to output a list of posts from an RSS feed that haven't made it to Facebook.

This was built for use with RSLSoapbox.com by Matt Montgomery.

It probably overcomplicates the Facebook interaction significantly, requiring an app ID and app secret to work.
Simply pass those in as environment variables in whatever way you prefer. I use `dotenv` because I'm kind of lazy.

That you have to set everything up with a Facebook app makes this not ideal for pick-up-and-go use.

Additionally, there's probably a way this could query against Facebook and check for links that have been shared.
That crossed my mind, but I went this direction for some reason or another.

## Environment variables

```
FB_APP_ID=
FB_APP_SECRET=
FB_PAGE_ID=
RSS_FEED_PATH=
RSS_FEED_HOST=
```

## Run the thing

```
node index.js
```

## Example Output

```
2017 Dossier: Justin Schmidt
http://www.rslsoapbox.com/2017/3/2/14766050/2017-dossier-justin-schmidt

MLS Preseason Power Ranking Averages
http://www.rslsoapbox.com/2017/3/2/14758778/mls-preseason-power-ranking-avg

MLS - State of the League (Eastern Conference)
http://www.rslsoapbox.com/2017/3/2/14620010/mls-state-of-the-league-2017

RSL vs. Toronto FC scouting report
http://www.rslsoapbox.com/2017/3/2/14786764/rsl-toronto-fc-scouting-report
```

## Known issues

If the RSS feed doesn't have much in it (for example, RSL Soapbox gives me 8 or some-odd items), you won't see too much
in the way of useful data. It's _just_ useful enough for me to not complain about what I built.

## Aspirational goals

It would be nice if you could plug in any data source instead of just RSS easily, pass a list of items to the checker.
That would probably not be terrible to build.
