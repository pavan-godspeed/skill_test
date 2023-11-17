module.exports = function(ctx) {
  const { GSStatus } = require('@godspeedsystems/core');

  // Filter documents based on section_name
  const filteredDocuments = ctx.outputs.data_from_third_party_2.data.filter(
    doc => doc.section_name === "Opinion"
  );

  // Exclude multimedia, keywords, headline, and byline fields from the response
  const filteredData = filteredDocuments.map(({ multimedia, _id, keywords, headline, byline, ...rest }) => rest);

  return new GSStatus(true, 200, undefined, filteredData, undefined);
};
