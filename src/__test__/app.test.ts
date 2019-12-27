import app from "../app";
import request from "supertest";

describe("Get / - a simple api endpoint", () => {
  test("Hello API Request", async () => {
    const result = await request(app).get("/");
    expect(result.text).toEqual("hi");
    expect(result.status).toEqual(200);
  });
});
