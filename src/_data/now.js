// Values that must be recomputed on every build rather than stored as text.
const site = require("./site.json");

module.exports = () => {
  const today = new Date();
  const year = today.getFullYear();
  return {
    year,
    iso: today.toISOString(),
    // "Years of service" on the home page and About page is derived from the
    // founding year in site.json, so it never goes stale.
    yearsOfService: year - site.established
  };
};
