import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { RiscoRepository } from '../repository/risco.repository';

@Injectable()
export class riscoService {

  constructor(private repository: RiscoRepository) { };
  getHello(): string {
    return 'Alô mundo!';
  }
  getDados() {
    return this.repository.findAll();
  }
  getriscoById(id: number) {
    return this.repository.findById(id);
  }
  create(risco: any) { return this.repository.create(risco); }
  delete(id: number) { return this.repository.delete(id); }
  //
  update(id: number, risco: any) { return this.repository.update(id, risco); }
  patch(id: number, risco: any) { return this.repository.patch(id, risco); }
}