const mongoose = require("mongoose");

const Link = mongoose.model("links");

module.exports = app => {
  app.get("/api/shorten", async (req, res) => {
    const links = await Link.find()
      .sort({ dateCreated: "descending" })
      .limit(5000);

    res.send(links);
  });

  app.post("/api/shorten", async (req, res) => {
    let { longLink } = req.body;
    if (!/^https?:\/\//i.test(longLink)) {
      longLink = "http://" + longLink;
    }

    const existingLink = await Link.find({ longLink: longLink });
    if (existingLink.length >= 1) {
      try {
        const updatedLink = await Link.findOneAndUpdate(
          { longLink: longLink },
          { $set: { dateCreated: Date.now() } }
        );
        res.send(updatedLink);
      } catch (err) {
        res.status(422).send(err);
      }
    } else {
      const shortLinkId = Math.random()
        .toString(36)
        .substring(2, 8);
      const link = new Link({
        longLink,
        shortLinkId,
        dateCreated: Date.now()
      });

      try {
        await link.save();
        res.send(link);
      } catch (err) {
        res.status(422).send(err);
      }
    }
  });
};
