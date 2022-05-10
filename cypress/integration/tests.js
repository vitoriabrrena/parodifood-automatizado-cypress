describe('Parodifood', ()=>{
    it('Tela Inicial', ()=>{
        cy.visit('http://parodifood.qaninja.academy/')
    })

})

describe('Menu', ()=>{
    it('Pesquisar Restaurante', ()=>{
        cy.get('.nav > :nth-child(1) > a').click()

    })
})

describe('Adicionar', ()=>{
    it('Adicionar Pedido ao Carrinho', ()=>{
        cy.get('.content > .row > :nth-child(1)').click()
        cy.get(':nth-child(1) > .menu-item-info-box > .menu-item-info-box-content > .add-to-cart').click()

    })
})

describe('Excluir', ()=>{
    it('Excluir Pedido', ()=>{
        cy.get('.btn-danger').click()
    })
})


describe('Adicionar Novamente', ()=>{
    it('Adicionar Pedido Novamente', ()=>{
        cy.get(':nth-child(1) > .menu-item-info-box > .menu-item-info-box-content > .add-to-cart').click()


    })
})

describe('Alterar', ()=>{
    it('Alterar Quantidade do Pedido', ()=>{
        cy.get('.btn-success').click()
        cy.get('.text-center > :nth-child(2) > .fa').click()
    })
})


describe('Pagamentos', ()=>{
    it('Formas de Pagamento', ()=>{
        cy.get(':nth-child(2) > .col-sm-6 > mt-input-container > .form-group > .form-control')
        .type('Usuário de Testes')
        .should('have.value', 'Usuário de Testes')

        cy.get(':nth-child(2) > :nth-child(4) > mt-input-container > .form-group > .form-control')
        .type('usuariodetestes@gmail.com')
        .should('have.value', 'usuariodetestes@gmail.com')

        cy.get(':nth-child(5) > mt-input-container > .form-group > .form-control').click()
        .type('usuariodetestes@gmail.com')
        .should('have.value', 'usuariodetestes@gmail.com')

        cy.get(':nth-child(3) > .col-sm-6 > mt-input-container > .form-group > .form-control')
        .type('Rua Testadores de Software')
        .should('have.value', 'Rua Testadores de Software')

        cy.get(':nth-child(3) > :nth-child(3) > mt-input-container > .form-group > .form-control').click()
        .type('2022')
        .should('have.value', '2022')

        cy.get(':nth-child(1) > label > .iradio_flat-red > .iCheck-helper').click()

        cy.get('.col-xs-12 > .btn').click()


    })
})