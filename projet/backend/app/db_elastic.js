import elastic from '@elastic/elasticsearch'
const {Client} = elastic
// const { Client } = require('@elastic/elasticsearch')
const connectDBElastic = async () => {
  try {
    // Create an Elasticsearch client
    const esClient = new Client({ node: "http://localhost:9200/" });

    // Test the connection
    esClient.ping({ requestTimeout: 30000 }, (error) => {
      if (error) {
        console.error("Elasticsearch cluster is down!");
      } else {
        console.log("Connected to Elasticsearch");
      }
    });
  } catch (e) {
    console.log(e.message);
    process.exit(1)
  }
};

export default connectDBElastic;