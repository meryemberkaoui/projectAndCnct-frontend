import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from '../project.component/project.component';


@Component({
  selector: 'app-project-ideas',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  templateUrl: './project-ideas.component.html',
  styleUrl: './project-ideas.component.css',
})
export class ProjectIdeasComponent {
  selectedCategory: string = 'frontend';

    projectIdeas: any = {
      frontend: [
        {
          title: "Portfolio interactif",
          description: "Créez votre propre site portfolio avec des animations et un design moderne",
          difficulty: "Débutant",
          skills: ["HTML", "CSS", "JavaScript", "React"],
          duration: "1-2 semaines"
        },
        {
          title: "Application Todo avancée",
          description: "Todo list avec filtres, catégories, drag & drop et stockage local",
          difficulty: "Débutant",
          skills: ["React", "TypeScript", "Local Storage"],
          duration: "3-5 jours"
        },
        {
          title: "Clone Netflix/Spotify",
          description: "Interface de streaming avec recherche, filtres et lecteur intégré",
          difficulty: "Intermédiaire",
          skills: ["React", "API REST", "Styled Components"],
          duration: "2-3 semaines"
        },
        {
          title: "Dashboard Analytics",
          description: "Tableau de bord avec graphiques, KPIs et visualisation de données",
          difficulty: "Intermédiaire",
          skills: ["React", "Chart.js", "Tailwind CSS"],
          duration: "1-2 semaines"
        }
      ],
      backend: [
        {
          title: "API RESTful Blog",
          description: "API complète pour un blog avec authentification et CRUD",
          difficulty: "Intermédiaire",
          skills: ["Node.js", "Express", "MongoDB", "JWT"],
          duration: "1-2 semaines"
        },
        {
          title: "Système d'authentification",
          description: "Service d'auth avec inscription, connexion, reset password",
          difficulty: "Intermédiaire",
          skills: ["Node.js", "PostgreSQL", "bcrypt", "JWT"],
          duration: "1 semaine"
        },
        {
          title: "API E-commerce",
          description: "Backend pour boutique en ligne avec gestion panier et paiement",
          difficulty: "Avancé",
          skills: ["Node.js", "Express", "Stripe", "Redis"],
          duration: "3-4 semaines"
        },
        {
          title: "Service de notifications",
          description: "Microservice pour gérer notifications email, SMS, push",
          difficulty: "Avancé",
          skills: ["Node.js", "RabbitMQ", "WebSocket"],
          duration: "2-3 semaines"
        }
      ],
      fullstack: [
        {
          title: "Réseau social minimal",
          description: "Plateforme avec posts, likes, commentaires et profils utilisateurs",
          difficulty: "Avancé",
          skills: ["React", "Node.js", "MongoDB", "Socket.io"],
          duration: "4-6 semaines"
        },
        {
          title: "Plateforme de réservation",
          description: "Application de booking avec calendrier, paiements et notifications",
          difficulty: "Avancé",
          skills: ["Next.js", "PostgreSQL", "Stripe", "Prisma"],
          duration: "4-5 semaines"
        },
        {
          title: "Outil de gestion de projet",
          description: "Kanban board avec équipes, tâches, deadlines et collaboration",
          difficulty: "Avancé",
          skills: ["React", "Node.js", "PostgreSQL", "WebSocket"],
          duration: "5-6 semaines"
        },
        {
          title: "Marketplace",
          description: "Plateforme d'achat/vente avec recherche, filtres et messagerie",
          difficulty: "Avancé",
          skills: ["Next.js", "Node.js", "PostgreSQL", "S3"],
          duration: "6-8 semaines"
        }
      ]
    };

    categoryConfig: any = {
      frontend: { iconClass: 'icon-globe', color: 'text-blue-600', bgColor: 'bg-blue-50' },
      backend: { iconClass: 'icon-database', color: 'text-green-600', bgColor: 'bg-green-50' },
      fullstack: { iconClass: 'icon-layers', color: 'text-purple-600', bgColor: 'bg-purple-50' }
    };
}
