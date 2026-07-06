import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
// Classe responsável por acessar os dados dos treinamentos.
// Ela funciona como um intermediário entre a aplicação e o arquivo JSON.
@Injectable()
export class treinamentoRepository {
    // Método responsável por retornar todos os treinamentos cadastrados.
    findAll() {
        // Lê o arquivo database.json.
        // './' significa a pasta raiz do projeto.
        // 'utf8' define o formato de leitura do arquivo.
        const dados = fs.readFileSync(
            './bd/treinamento.json',
            'utf8'
        );
        // O conteúdo do arquivo é lido como TEXTO.
        // JSON.parse converte esse texto em um objeto JavaScript.
        // Assim podemos trabalhar com os dados dentro da aplicação.
        return JSON.parse(dados);
    }
    findById(id: number) {
        // Chama o método findAll() para obter todos os treinamentos
        // cadastrados no arquivo database.json.
        const dados = this.findAll();
        // O método find() percorre o array procurando
        // o primeiro elemento que satisfaça a condição.
        return dados.find(
            // "treinamento" representa cada item do array.
            // Verifica se o id do treinamento é igual ao id recebido.
            treinamento => treinamento.id === id
        );



    }
    create(treinamento: any) {
        const treinamentos = this.findAll();
        const novoId = treinamentos.length > 0
            ? Math.max(...treinamentos.map(e => e.id)) + 1
            : 1;
        const novotreinamento = { id: novoId, ...treinamento };
        treinamentos.push(novotreinamento);
        fs.writeFileSync(
            './bd/treinamento.json',
            JSON.stringify(treinamentos, null, 2),
            'utf8'
        );
        return novotreinamento;
    }
    delete(id: number) {
        const treinamentos = this.findAll();
        const idx = treinamentos.findIndex(treinamento => treinamento.id === id);
        if (idx === -1) return false;
        treinamentos.splice(idx, 1);
        fs.writeFileSync(
            './bd/treinamento.json',
            JSON.stringify(treinamentos, null, 2),
            'utf8'
        );
        return true;
    }
    update(id: number, treinamento: any) {
        const treinamentos = this.findAll();
        const idx = treinamentos.findIndex(treinamento => treinamento.id === id);
        if (idx === -1) return false;
        treinamentos[idx] = { id, ...treinamento };
        fs.writeFileSync(
            './bd/treinamento.json',
            JSON.stringify(treinamentos, null, 2),
            'utf8'
        );
        return true;
    }
    patch(id: number, treinamento: any) {
        const treinamentos = this.findAll();
        const idx = treinamentos.findIndex(treinamento => treinamento.id === id);
        if (idx === -1) return false;
        treinamentos[idx] = { ...treinamentos[idx], ...treinamento };
        fs.writeFileSync(
            './bd/treinamento.json',
            JSON.stringify(treinamentos, null, 2),
            'utf8'
        );
        return true;
    }
}