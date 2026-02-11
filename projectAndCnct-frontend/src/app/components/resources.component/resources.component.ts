import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { ResumeTipsComponent } from '../resume-tips.component/resume-tips.component';
import { InterviewTipsComponent } from '../interview-tips.component/interview-tips.component';
import { FaqComponent } from '../faq.component/faq.component';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule, MatTabsModule, ResumeTipsComponent, InterviewTipsComponent, FaqComponent],
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
  cvTips = [
    {
      title: "Structure claire et professionnelle",
      content: "Utilisez un format simple et lisible. Incluez : informations de contact, résumé professionnel, expérience, formation, compétences techniques et projets."
    },
    {
      title: "Mettez vos projets en avant",
      content: "Pour un développeur junior, les projets personnels sont essentiels. Décrivez les technologies utilisées, les problèmes résolus et incluez des liens vers GitHub et démos live."
    },
    {
      title: "Quantifiez vos réalisations",
      content: "Utilisez des chiffres : 'Optimisé les performances de 40%', 'Géré une base de 10,000+ utilisateurs', 'Réduit le temps de chargement de 2s à 0.5s'."
    },
    {
      title: "Adaptez votre CV à l'offre",
      content: "Personnalisez votre CV pour chaque candidature. Mettez en avant les compétences et expériences pertinentes pour le poste ciblé."
    }
  ];

  interviewTips = [
    {
      title: "Préparez vos histoires de projets",
      content: "Utilisez la méthode STAR (Situation, Tâche, Action, Résultat) pour structurer vos réponses. Préparez 3-4 exemples de projets que vous pouvez expliquer en détail."
    },
    {
      title: "Maîtrisez les fondamentaux",
      content: "Révisez les concepts clés : structures de données, algorithmes de base, principes OOP, REST APIs, gestion d'état, et les spécificités de votre stack principale."
    },
    {
      title: "Pratiquez le live coding",
      content: "Entraînez-vous sur des plateformes comme LeetCode, HackerRank ou Codewars. Expliquez votre raisonnement à voix haute pendant que vous codez."
    },
    {
      title: "Posez des questions pertinentes",
      content: "Préparez des questions sur l'équipe, les technologies, les pratiques de développement, et la culture d'entreprise. Cela montre votre intérêt réel."
    }
  ];

  faqs = [
    {
      question: "Combien de projets dois-je avoir dans mon portfolio ?",
      answer: "Visez 3-5 projets de qualité plutôt que 10 projets basiques. Choisissez des projets qui démontrent différentes compétences et qui sont bien documentés avec du code propre."
    },
    {
      question: "Dois-je contribuer à l'open source ?",
      answer: "Ce n'est pas obligatoire mais fortement recommandé. Commencez par de petites contributions (documentation, corrections de bugs) sur des projets qui vous intéressent. Cela montre votre capacité à collaborer."
    },
    {
      question: "Comment expliquer mon manque d'expérience professionnelle ?",
      answer: "Mettez l'accent sur vos projets personnels, formations, certifications et auto-apprentissage. Montrez votre passion, votre capacité d'apprentissage rapide et votre motivation."
    },
    {
      question: "Quelles technologies devrais-je apprendre en priorité ?",
      answer: "Maîtrisez d'abord les fondamentaux (HTML, CSS, JavaScript). Ensuite, choisissez une stack moderne selon vos objectifs : React/Vue pour le frontend, Node.js/Python pour le backend. La profondeur vaut mieux que la largeur."
    },
    {
      question: "Comment gérer le syndrome de l'imposteur ?",
      answer: "C'est normal et très commun ! Concentrez-vous sur vos progrès, célébrez les petites victoires, et n'ayez pas peur de poser des questions."
    },
    {
      question: "Dois-je mentionner mes side projects inachevés ?",
      answer: "Incluez seulement les projets qui sont dans un état présentable, même s'ils ne sont pas 100% complets. Assurez-vous que le code est propre et bien documenté."
    }
  ];

}
