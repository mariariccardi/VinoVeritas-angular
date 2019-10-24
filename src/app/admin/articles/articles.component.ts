import { Component, OnInit } from '@angular/core';
import { ArticleDTO } from 'src/dto/articledto';
import { ArticleService } from 'src/service/article.service';
import { CompanyDTO } from 'src/dto/companydto';
import { CompanyService } from 'src/service/company.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

    articles: ArticleDTO [];
    articlesOld: ArticleDTO [];
    companies: CompanyDTO[];
    articleToSearch: ArticleDTO = new ArticleDTO ();
    articleToInsert: ArticleDTO = new ArticleDTO ();

  constructor(private service: ArticleService) {}

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.service.getAll().subscribe (articles => this.articles = this.articlesOld = articles);
  
  }

  update(article: ArticleDTO) {
    this.service.update(article).subscribe(() => this.getArticles());
  }

  delete(article: ArticleDTO){
    this.service.delete(article.id).subscribe(() => this.getArticles());
  }

  insert (article: ArticleDTO){
    this.service.insert(article).subscribe(() => this.getArticles());
    this.clear();
  }
  
  clear() {
    this.articleToInsert = new ArticleDTO();
  }

  search(){
    this.articles = [];
    this.articlesOld.forEach(a => {
      if ((!this.articleToSearch.name || a.name.toLowerCase().includes(this.articleToSearch.name.toLowerCase()))
      && (!this.articleToSearch.company || a.company == this.articleToSearch.company)) {
        this.articles.push(a);
      }
    });
  }

  clearSearch(){
    this.articleToSearch = new ArticleDTO ();
    this.articles = this.articlesOld;
  }
}
