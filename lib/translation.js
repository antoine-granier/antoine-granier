import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "head-title": "Antoine Granier - Homepage",
            "header": "Hello, I am a full-stack developer based in France !",
            "job": "Web Developer | Designer",
            "description": "I am a young French fullstack web developer. I am currently doing a master in web development and management at Efrei Paris. I have a strong attraction for websites and well-designed applications. My goal is to be as good in development as in design.",
            "about": "About",
            "bio-2002": "Born in Bondy, France.",
            "bio-2022": "Complete the computer science degree (DUT) in the Gustave Eiffel University.",
            "bio-2022-2023": "Complete a professional degree in web and mobile development with distinction at the Sorbonne University in Paris. I am working as an internship fullstack developer at Aloes.",
            "bio-2023-2025": "Complete a dev manager fullstack master at Efrei school in Paris. I am working as an internship fullstack developer at Aloes.",
            "projects": "Projects",
            "lang": "Language",
            "I": "I",
            "discogs": "Discogs Redesign",
            "hobbies": " Video Games, Automotive, Hardware (Custom Computer)",
            "web": "On the web",
            "crm-aloes-insystem": "Aloes internal tools (Holiday booking, ticket management, interventions and licences, rights management, deferral of development time, aged trial balance, etc.)",
            "water-temperature": "A web application that gives the temperature of the rivers in the Gironde region.",
            "title-theses": "Refont Theses.fr",
            "theses": "I realised a total redesign of the Theses.fr website, both on the design and the functional side. Theses.fr is a website listing all the theses done in France.",
            "crm-description": "Aloes internal tools (Holiday booking, ticket management, interventions and licences, rights management, deferral of development time, aged trial balance, etc.)",
            "Platform": "Platform",
            "Stack": "Stack",
            "A web application that gives the temperature of the rivers in the Gironde region.": "A web application that gives the temperature of the rivers in the Gironde region.",
            "Photography": "Photography",
            "I've been passionate about photography for several years but for lack of money and knowledge I've never bought any equipment. But I thought it was time to take the plunge. So I bought my first camera sold with a kit lens. And this is how I got started.": "I've been passionate about photography for several years but for lack of money and knowledge I've never bought any equipment. But I thought it was time to take the plunge. So I bought my first camera sold with a kit lens. And this is how I got started.",
            "Equipment": "Equipment",
            "My photos": "My photos",
            "graphite": "Online drawing application. It allows you to draw, sketch or create diagrams and share your creations.",
            "bio-aloes": "I am a full-stack developer at Aloes, a company specialising in the creation of management software for businesses."
        }
    },
    fr: {
        translation: {
            "head-title": "Antoine Granier - Page d'accueil",
            "header": "Salut, je suis une développeur full-stack basé en France !",
            "job": "Développeur Web | Designer",
            "description": "Je suis un jeune développeur web fullstack français. Je suis actuellement en master de développement web et management à Efrei Paris. J'ai une forte attirance pour les sites web et les applications bien conçues. Mon objectif est d'être aussi bon en développement qu'en design.",
            "about": "À propos",
            "bio-2002": "Né à Bondy, France.",
            "bio-2022": "Obtention d'un DUT Informatique à l'unniversité Gustave Eiffel.",
            "bio-2022-2023": "Obtention d'une licence professionnelle en développement web et mobile, avec mention très bien, à la Sorbonne. J'ai été en alternance en tant que développeur fullstack chez Aloes.",
            "bio-2023-2025": "Obtention du master dev manager fullstack de l'Efrei Paris. Je suis en alternance en tant que développeur fullstack chez Aloes.",
            "projects": "Projets",
            "lang": "Langue",
            "I": "J'",
            "discogs": "Refonte Discogs",
            "hobbies": " Jeux vidéos, Automobile, Hardware (Ordinateur Custom)",
            "web": "Sur internet",
            "crm-aloes-insystem": "Outil interne d'Aloes (Prise de congés, gestion de tickets, interventions et licences, gestion de droits, gestion des temps de développement, balance agée, etc.)",
            "water-temperature": "Application web qui donne la temperature des cours d'eau en Gironde.",
            "title-theses": "Refonte Theses.fr",
            "theses": "J'ai réalisé une refonte totale du site Theses.fr, à la fois sur le côté design mais aussi fonctionnel. Theses.fr est un site qui répertorie l'ensemble des thèses de France.",
            "crm-description": "Outils internes Aloes (Réservation de vacances, gestion des billets, interventions et licences, gestion des droits, report du temps de développement, balance âgée, etc.)",
            "Platform": "Platforme",
            "Stack": "Technologie",
            "A web application that gives the temperature of the rivers in the Gironde region.": "Une application web qui donne la température des rivières de la Gironde.",
            "Photography": "Photographie",
            "I've been passionate about photography for several years but for lack of money and knowledge I've never bought any equipment. But I thought it was time to take the plunge. So I bought my first camera sold with a kit lens. And this is how I got started.": "Je suis passionné par la photographie depuis plusieurs années mais par manque d'argent et de connaissance je n'ai jamais acheter de matériels. Mais je me suis dis qu'il était temps de sauter le pas. Ainsi, j'ai acheter mon premier appareil photo vendu avec un objectif en kit. Et voici comment j'ai commencé.",
            "Equipment": "Matériels",
            "My photos": "Mes photos",
            "Preview": "Aperçu",
            "View the project": "Voir le projet",
            "graphite": "Application de dessin en ligne. Elle permet de dessiner, de réaliser des croquis ou des schémas et de partager des créations.",
            "bio-aloes": "J'occupe le poste de développeur fullstack chez Aloes, une entreprise spécialisée dans la création de logiciels de gestion pour les entreprises."
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;