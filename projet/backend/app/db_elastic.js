import elastic from '@elastic/elasticsearch'
const {Client} = elastic
// const { Client } = require('@elastic/elasticsearch')
const connectDBElastic = async () => {
  try {
    // Create an Elasticsearch client
    const esClient = new Client({ node: "http://localhost:9200" });
    return esClient
  } catch (e) {
    console.log(e.message);
    process.exit(1)
  }
};

export default connectDBElastic;