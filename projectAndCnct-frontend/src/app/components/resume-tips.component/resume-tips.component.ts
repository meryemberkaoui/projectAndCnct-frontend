import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-resume-tips',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume-tips.component.html',
  styleUrl: './resume-tips.component.css',
})
export class ResumeTipsComponent {
  @Input() tips: any[] = [];

}
