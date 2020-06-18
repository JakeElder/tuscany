module.exports = {
  load: {
    before: ["force-https"],
  },
  settings: {
    "force-https": {
      enabled: true,
    },
  },
};
