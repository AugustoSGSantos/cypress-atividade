describe("Agenda de Contatos", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Deve incluir um novo contato", () => {
    cy.get('input[placeholder="Nome"]').type("Novo Contato");
    cy.get('input[placeholder="E-mail"]').type("contato@teste.com");
    cy.get('input[placeholder="Telefone"]').type("123456789");
    cy.contains("Adicionar").click();
    cy.contains("Novo Contato").should("exist");
  });

  it("Deve alterar um contato", () => {
    cy.contains("Novo Contato").should("exist");
    cy.contains("Editar").click();
    cy.get('input[placeholder="Nome"]').clear().type("Contato Editado");
    cy.get('input[placeholder="E-mail"]').clear().type("contato@teste.com");
    cy.get('input[placeholder="Telefone"]').clear().type("1234567890");
    cy.contains("Salvar").click();
    cy.contains("Contato Editado").should("exist");
  });

  it("Deve remover um contato", () => {
    cy.contains("Contato Editado").should("exist");
    cy.contains("Deletar").click();
    cy.contains("Contato Editado").should("not.exist");
  });
});
