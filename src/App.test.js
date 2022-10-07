import React from 'react'
import { render, screen } from '@testing-library/react'

import App, { calcularNovoSaldo } from './App'

describe('Componente principal:', () => {
    describe('Quando abro o app do banco, o nome é exibido...', () => {

        it('Mostrar nome do banco', () => {
            render(<App />);
            expect(screen.getByText('ByteBank')).toBeInTheDocument();
        })
    
        it('Mostrar saldo', () => {
            render(<App />);
            expect(screen.getByText('Saldo:')).toBeInTheDocument();
        })
    
        it('Realizar transação', () => {
            render(<App />);
            expect(screen.getByText('Realizar operação')).toBeInTheDocument();
        })

    })

    describe('Quando uma transação é realizada:', () => {
        it('Transação de saque, valor diminui', () => {

            const valores = {
                transacao: 'saque',
                valor: 50
            }
            
            const novoSaldo = calcularNovoSaldo(valores, 150)

            expect(novoSaldo).toBe(100)
        })
    })
    
})


