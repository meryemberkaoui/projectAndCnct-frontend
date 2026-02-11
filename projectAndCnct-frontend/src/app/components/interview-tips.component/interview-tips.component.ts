import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interview-tips',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interview-tips.component.html',
  styleUrl: './interview-tips.component.css',
})
export class InterviewTipsComponent {
  @Input() tips: { title: string; content: string }[] = [];

}
