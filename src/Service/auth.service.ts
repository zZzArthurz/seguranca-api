import { Injectable, UnauthorizedException } from '@nestjs/common';
@Injectable()
export class AuthService {
login(email: string, senha: string) {
if (email === 'zzz' && senha === 'zzz') {
return { access_token: 'Vai tomando' };
}
throw new UnauthorizedException('Você está codenado');
}
}
/*
Simula um usuário válido
Retorna token quando login correto
*/