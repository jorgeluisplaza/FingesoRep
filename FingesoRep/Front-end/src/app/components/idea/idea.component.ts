import { Component, OnInit } from '@angular/core';
import { IdeaService} from '../../services/idea.service';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {
  titulo: string;
  contenido: string;

  constructor(private ideaService: IdeaService) {
  }
  ngOnInit() {
  }

}
