import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() =>{ 
        api.get('transactions')     
        .then(response => console.log(response.data))
     }, []);

    return (
        <Container> 
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>data</th>
                    </tr>                    
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>03.03.2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$ 1.000,00</td>
                        <td>Moradia</td>
                        <td>28.02.2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}