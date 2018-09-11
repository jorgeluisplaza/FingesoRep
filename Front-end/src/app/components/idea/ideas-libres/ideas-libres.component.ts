import { Component, OnInit } from '@angular/core';
import {IdeaService} from '../../../services/idea.service';

@Component({
  selector: 'app-ideas-libres',
  templateUrl: './ideas-libres.component.html',
  styleUrls: ['./ideas-libres.component.css']
})
export class IdeasLibresComponent implements OnInit {

  ideas: any = [];
  constructor(private ideaService: IdeaService) {
    this.getIdeasLibres();
  }

  ngOnInit() {
  }

  getIdeasLibres() {
    this.ideaService.getIdeasLibres().subscribe( (ideas) => {
      this.ideas = ideas;
    });
  }
}
