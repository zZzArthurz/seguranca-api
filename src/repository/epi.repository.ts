// Importa o módulo "fs" (File System) do Node.js.
// Esse módulo permite ler, criar, alterar e excluir arquivos.
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
// Classe responsável por acessar os dados dos EPIs.
// Ela funciona como um intermediário entre a aplicação e o arquivo JSON.
@Injectable()
export class EpiRepository {
    // Método responsável por retornar todos os EPIs cadastrados.
    findAll() {
        // Lê o arquivo database.json.
        // './' significa a pasta raiz do projeto.
        // 'utf8' define o formato de leitura do arquivo.
        const dados = fs.readFileSync(
            './bd/database.json',
            'utf8'
        );
        // O conteúdo do arquivo é lido como TEXTO.
        // JSON.parse converte esse texto em um objeto JavaScript.
        // Assim podemos trabalhar com os dados dentro da aplicação.
        return JSON.parse(dados);
    }
    findById(id: number) {
        // Chama o método findAll() para obter todos os EPIs
        // cadastrados no arquivo database.json.
        const dados = this.findAll();
        // O método find() percorre o array procurando
        // o primeiro elemento que satisfaça a condição.
        return dados.find(
            // "epi" representa cada item do array.
            // Verifica se o id do EPI é igual ao id recebido.
            epi => epi.id === id
        );



    }
    create(epi: any) {
        const epis = this.findAll();
        const novoId = epis.length > 0
            ? Math.max(...epis.map(e => e.id)) + 1
            : 1;
        const novoEpi = { id: novoId, ...epi };
        epis.push(novoEpi);
        fs.writeFileSync(
            './bd/database.json',
            JSON.stringify(epis, null, 2),
            'utf8'
        );
        return novoEpi;
    }
    delete(id: number) {
        const epis = this.findAll();
        const idx = epis.findIndex(epi => epi.id === id);
        if (idx === -1) return false;
        epis.splice(idx, 1);
        fs.writeFileSync(
            './bd/database.json',
            JSON.stringify(epis, null, 2),
            'utf8'
        );
        return true;
    }
    update(id: number, epi: any) {
        const epis = this.findAll();
        const idx = epis.findIndex(epi => epi.id === id);
        if (idx === -1) return false;
        epis[idx] = { id, ...epi };
        fs.writeFileSync(
            './bd/database.json',
            JSON.stringify(epis, null, 2),
            'utf8'
        );
        return true;
    }
    patch(id: number, epi: any) {
        const epis = this.findAll();
        const idx = epis.findIndex(epi => epi.id === id);
        if (idx === -1) return false;
        epis[idx] = { ...epis[idx], ...epi };
        fs.writeFileSync(
            './bd/database.json',
            JSON.stringify(epis, null, 2),
            'utf8'
        );
        return true;
    }
}
