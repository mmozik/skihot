const request = require("supertest");
const app = require("../src/app");

describe("App Endpoints", () => {
  it("should return the health status", async () => {
    const response = await request(app).get("/api/health");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "UP" });
  });

  it("should handle 404 for unknown routes", async () => {
    const response = await request(app).get("/api/unknown");
    expect(response.status).toBe(404);
  });
});
