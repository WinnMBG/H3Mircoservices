const supertest = require("supertest");
const chai = require("chai");
const app = require("../app"); // Adjust the path based on your project structure

const expect = chai.expect;
const request = supertest(app);

describe("CRUD API Tests", () => {
  let todoId;

  it("should create a new film", async () => {
    const response = await request
      .post("/film")
      .send({
        poster_path: "/testesteste",
        title: "Ceci est un test",
        release_date: "2024",
        overview: "Nothing",
        id: 123,
        vote_average: 2.3,
        genre_ids: [12, 334, 4],
      });

    expect(response.status).to.equal(201);
    expect(response.body).to.have.property("_id");
    todoId = response.body._id;
  });

  it("should get all films", async () => {
    const response = await request.get("/films");
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an("array");
  });

  it("should delete a film by ID", async () => {
    const response = await request.delete(`/film/${todoId}`);
    expect(response.status).to.equal(204);
  });
});
