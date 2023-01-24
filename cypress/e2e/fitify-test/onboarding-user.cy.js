
describe('example of partially done onboarding on Fitify web', () => {
    beforeEach(() => {
      cy.visit('https://gofitify.com/')
    })
  
    it.only("Create account fitify", () => {
      
        cy.get(".header-join-button").contains("Join Now").click()
        cy.get(".e1cyciak1").should("have.text", "Pokračovat").click()
        cy.get(".e1cyciak0").first().should("have.text", "Žena").click()
        cy.get(".e45vnt0").find("[type='text']").type("Niko").invoke("attr", "placeholder").should("eq", "Křestní jméno")
        cy.get(".e1cyciak2").should("have.text", "Pokračovat").click()
        cy.get(".e1cyciak0").first().should("have.text", "Zpevnit tělo").click()
        cy.get(".e1cyciak0").first().should("have.text", "Přesýpací hodiny").click()
        cy.get(".e1cyciak0").first().should("have.text", "Paže").click()
        cy.wait(2000)
        cy.get(".e1cyciak1").should("have.text", "Pokračovat").click()
        cy.wait(2000)

        cy.get(".e1cyciak0").first().should("have.text", "Jsem ve formě").click()
        cy.get(".e45vnt0").find("[type='number']").type("25").invoke("attr", "placeholder").should("eq", "0")
        cy.get(".e1cyciak2").should("have.text", "Pokračovat").click()
        cy.get(".e45vnt0").find("[type='number']").type("165").invoke("attr", "placeholder").should("eq", "0")
        cy.get(".e1cyciak2").should("have.text", "Pokračovat").click()
        cy.wait(2000)

        cy.get(".e45vnt0").find("[type='number']").type("58").invoke("attr", "placeholder").should("eq", "0")
        cy.get(".e1cyciak2").should("have.text", "Pokračovat").click()
        cy.get(".e1cyciak0").first().should("have.text", "Ne").click()
        cy.get(".e1cyciak0").first().should("have.text", "Většinu dne prosedím").click()
        cy.get(".e1cyciak0").first().should("have.text", "Nikdy").click()
        cy.get(".e1cyciak0").first().should("have.text", "Méně než 5").click()
        cy.get(".e1cyciak0").first().should("have.text", "Méně než 1 hodina").click()
        cy.get(".e1cyciak0").first().should("have.text", "Nemám dostatek spánku").click()
        cy.get(".e1cyciak1").should("have.text", "Pokračovat").click()
        cy.get(".e1cyciak0").first().should("have.text", "Cítím se dobře po celý den").click()
        cy.get(".e1cyciak0").first().should("have.text", "Více než 8 hodin").click()
        cy.intercept('https://join.gofitify.com/images/plan/v2/female.png')
        cy.get(".e1cyciak0").first().should("have.text", "Piju jen slazené nápoje a kávu").click() 
        cy.wait(2000)

        cy.get(".css-1gt3z43").should("have.text", "Trenér je připraven!")
        cy.get(".ezwd57v0").eq(1).should("have.text", "Zpevnit tělo")
        cy.get(".ezwd57v0").eq(0).should("have.text", "Cíl")
        cy.get(".ezwd57v0").eq(3).should("have.text", "5–12 týdnů")
        cy.get(".ezwd57v0").eq(2).should("have.text", "Délka")
        cy.get(".ezwd57v0").eq(5).should("have.text", "15–25 min")
        cy.get(".ezwd57v0").eq(4).should("have.text", "Délka tréninku")
        cy.get(".ezwd57v0").eq(7).should("have.text", "Pokročilý")
        cy.get(".ezwd57v0").eq(6).should("have.text", "Úroveň")
        cy.get(".e1cyciak1").should("exist").click()

      })
  })
  