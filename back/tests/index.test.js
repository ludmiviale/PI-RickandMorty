const { server } = require("../src/app");
const session = require("supertest");
const request = session(server);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await request.get("/rickandmorty/character/1").expect(200);
    });
    it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin' e 'image'", async () => {
      const response = await request.get("/rickandmorty/character/23");
      const props = [
        "id",
        "name",
        "species",
        "gender",
        "status",
        "origin",
        "image",
      ];
      props.forEach((prop) => {
        expect(response.body).toHaveProperty(prop);
      });
    });

    it("Si hay un error responde con status: 500", async () => {
      await request.get("/rickandmorty/character/999").expect(500);
    });
  });

  describe("GET /rickandmorty/login", () => {
    it("Responde con un objeto con la propiedad access en true si las credenciales son correctas", async () => {
      const response = await request.get(
        "/rickandmorty/login?email=ejemplo@gmail.com&password=Password12"
      );
      expect(response.body).toEqual({ access: true });
    });

    it("Responde con un objeto con la propiedad access en false si las credenciales son incorrectas", async () => {
      const response = await request.get(
        "/rickandmorty/login?email=ejemplo@gmail.com&password=Acb123"
      );
      expect(response.body).toEqual({ access: false });
    });
  });

  describe("POST /rickandmorty/fav", () => {
    it("Responde con un arreglo con los objetos enviados por body", async () => {
      const character = {
        id: 923,
        name: "Johnny Kay",
        species: "Human",
        gender: "Male",
        status: "Alive",
        origin: { name: "c 137" },
        image: "image.jpg",
      };
      const response = await request.post("/rickandmorty/fav").send(character);
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body).toContainEqual(character);
    });

    it("Responde con un arreglo con los objetos enviados previamente y los nuevos", async () => {
      const character = {
        id: 931,
        name: "Megan Nix",
        species: "Human",
        gender: "Female",
        status: "Alive",
        origin: { name: "c 137" },
        image: "image.jpg",
      };
      const response = await request.post("/rickandmorty/fav").send(character);
      expect(response.body.length).toBe(2);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Responde con un arreglo con los objetos sin modificar si el id enviado no se encuentra como favorito", async () => {
      const response = await request.delete("/rickandmorty/fav/987");
      expect(response.body.length).toBe(2);
    });

    it("Responde con un arreglo con los objetos excepto aquel cuyo id fue solicitado eliminar", async () => {
      const response = await request.delete("/rickandmorty/fav/931");
      expect(response.body.length).toBe(1);
    });
  });
});
