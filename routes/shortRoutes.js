const mongoose = require("mongoose");

const Link = mongoose.model("links");

module.exports = app => {
  app.get("/api/shorten", async (req, res) => {
    const links = await Link.find()
      .sort({ dateCreated: "descending" })
      .limit(5);

    res.send(links);
  });

  app.post("/api/shorten", async (req, res) => {
    const { longLink } = req.body;

    const existingLink = await Link.find({ longLink: longLink });
    if (existingLink) {
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
      const link = new Link({
        longLink,
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
