import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
// Classe responsável por acessar os dados dos riscos.
// Ela funciona como um intermediário entre a aplicação e o arquivo JSON.
@Injectable()
export class RiscoRepository {
    // Método responsável por retornar todos os riscos cadastrados.
    findAll() {
        // Lê o arquivo database.json.
        // './' significa a pasta raiz do projeto.
        // 'utf8' define o formato de leitura do arquivo.
        const dados = fs.readFileSync(
            './bd/risco.json',
            'utf8'
        );
        // O conteúdo do arquivo é lido como TEXTO.
        // JSON.parse converte esse texto em um objeto JavaScript.
        // Assim podemos trabalhar com os dados dentro da aplicação.
        return JSON.parse(dados);
    }
    findById(id: number) {
        // Chama o método findAll() para obter todos os riscos
        // cadastrados no arquivo database.json.
        const dados = this.findAll();
        // O método find() percorre o array procurando
        // o primeiro elemento que satisfaça a condição.
        return dados.find(
            // "risco" representa cada item do array.
            // Verifica se o id do risco é igual ao id recebido.
            risco => risco.id === id
        );



    }
    create(risco: any) {
        const riscos = this.findAll();
        const novoId = riscos.length > 0
            ? Math.max(...riscos.map(e => e.id)) + 1
            : 1;
        const novorisco = { id: novoId, ...risco };
        riscos.push(novorisco);
        fs.writeFileSync(
            './bd/risco.json',
            JSON.stringify(riscos, null, 2),
            'utf8'
        );
        return novorisco;
    }
    delete(id: number) {
        const riscos = this.findAll();
        const idx = riscos.findIndex(risco => risco.id === id);
        if (idx === -1) return false;
        riscos.splice(idx, 1);
        fs.writeFileSync(
            './bd/risco.json',
            JSON.stringify(riscos, null, 2),
            'utf8'
        );
        return true;
    }
    update(id: number, risco: any) {
        const riscos = this.findAll();
        const idx = riscos.findIndex(risco => risco.id === id);
        if (idx === -1) return false;
        riscos[idx] = { id, ...risco };
        fs.writeFileSync(
            './bd/risco.json',
            JSON.stringify(riscos, null, 2),
            'utf8'
        );
        return true;
    }
    patch(id: number, risco: any) {
        const riscos = this.findAll();
        const idx = riscos.findIndex(risco => risco.id === id);
        if (idx === -1) return false;
        riscos[idx] = { ...riscos[idx], ...risco };
        fs.writeFileSync(
            './bd/risco.json',
            JSON.stringify(riscos, null, 2),
            'utf8'
        );
        return true;
    }
}