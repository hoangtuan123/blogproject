import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input () article:Article ={
    articleName: '',
    articleId: '',
    articlePost: '',
    articleType: ''
  };
  constructor(private articleService:ArticleService) { }

  ngOnInit() {
   
  }
  onClickSubmit():void{
    this.articleService.addArticle(this.article).subscribe(
      function(data){
        console.log('success');
        console.log(data);
      },
      function(data){
        console.log('error');
        console.log(data);
      }
    );
  }
}
