# reference-keeper 🚀

A simple Trello Power-Up to keep track of all your favorite and want-to-read papers as Trello cards.

Setup
---
The project is build on the [trello-power-up-skeleton](https://glitch.com/edit/#!/trello-power-up-skeleton?path=README.md%3A1%3A0).

If you remix this on [Glitch](https://glitch.com/edit/#!/reference-keeper?path=README.md), you'll be able to register the app as custom Power-Up and add it to boards in workspaces where you are admin:

👉  [Managing Trello Power-Ups](https://developer.atlassian.com/cloud/trello/guides/power-ups/managing-power-ups/)
- For the iFrame connecter choose `https://GLITCH-PROJECT-NAME.glitch.me/` (auto-generated when remixed)
- Enable the `card-from-url` capability

Features
---
The Power-Up is based on the [`card-from-url`](https://developer.atlassian.com/cloud/trello/power-ups/capabilities/card-from-url/) capability, which creates cards automatically when URLs are pasted onto the `Add a card...` section.
Ids are retrieved from `arXiv.org` and `aclanthology.org` URLs and meta-data are retrieved using the [Semantic Scholar API](https://www.semanticscholar.org/product/api):

- Card title: `[authors] ([year]) "[title]"`
- Card description: 
  ```
     *Authors*: [complete list of authors]
     *Abstract*
     [abstract]
  ```
- Attachments: `URL`

Issues
---
- Trello Power-Ups are not enabled when using mobile app. Nothing to do about this, but if the Power-Up was implemented as a card button instead, cards created could later be converted from card title or attachment.
- In addition to this, the `card-from-url` might not be the best way of adding paper cards. One could instead look into browser extensions, or automation when a link is shared with mobile app.