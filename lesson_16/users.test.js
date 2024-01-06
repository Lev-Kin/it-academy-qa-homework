const axios = require("axios");
const { matchers } = require("jest-json-schema");
expect.extend(matchers);

const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Users";
const userSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      id: { type: "integer", format: "int32" },
      userName: { type: ["string", "null"] },
      password: { type: ["string", "null"] },
    },
    required: ["id", "userName", "password"],
    additionalProperties: false,
  },
};

describe("User API Tests", () => {
  let users = [];
  let randomUserId;
  let postTestUser = { userName: "Test User Name", password: "secret" };
  let changePassword = "newpassword";

  test("GET /users returns users", async () => {
    const response = await axios.get(BASE_URL);
    expect(response.status).toBe(200);
    expect(response.data).toMatchSchema(userSchema);
    users = response.data;
    randomUserId = users[Math.floor(Math.random() * users.length)].id;
  });

  test("GET /users/{id} returns a user", async () => {
    const response = await axios.get(`${BASE_URL}/${randomUserId}`);
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(randomUserId);
  });

  test("POST /users creates a user", async () => {
    const response = await axios.post(BASE_URL, postTestUser);
    expect(response.status).toBe(200);
    createdUserId = response.data.id;
    expect(response.data.userName).toBe(postTestUser.userName);
    expect(response.data.password).toBe(postTestUser.password);
  });

  test("PUT /users/{id} updates a user", async () => {
    postTestUser.password = changePassword;
    const response = await axios.put(
      `${BASE_URL}/${randomUserId}`,
      postTestUser
    );
    expect(response.status).toBe(200);
    expect(response.data.userName).toBe(postTestUser.userName);
  });

  test("DELETE /users/{id} deletes a user", async () => {
    const response = await axios.delete(`${BASE_URL}/${randomUserId}`);
    expect(response.status).toBe(200);
  });
});
