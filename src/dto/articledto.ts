import { UserDTO } from './userdto';

export class ArticleDTO {
    id: number;
    name: string;
    year: number;
    company: CompanyDTO;
    price: number;
    user: UserDTO;
}
