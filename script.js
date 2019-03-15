console.log("test fonctionnement js");

const wilders = [
    {
        firstName : "Axel",
        familyName : "CHANDELIER",
        profilePic : "https://i.imgur.com/dsKXOVX.jpg",
        fewWords :  "Développeur en formation, je suis courtois, travailleur et ponctuel. Je recherche un stage afin de compléter ma formation.",
        languages :  "Javascript React Node.js HTML5.0 CSS3.0",
        softSkills : "Travail d'équipe - Autonomie - Ponctualité.",
        mobility :  "Prêt à prendre le train tous les jours si nécessaire. Disponibilité jusque Paris.",
        linkedinLink : "https://www.linkedin.com/in/axel-chandelier-6a6079181/",
        githubLink : "https://github.com/Spartakyste",
        emailLink : "axeletcana@hotmail.fr"
    },

    {
        firstName : "Grégoire",
        familyName : "SURAY",
        profilePic : "https://i.imgur.com/5QztU6i.jpg",
        fewWords :  "Avec un background de 5 ans en management et gestion, j'ai décidé de me réorienter vers le Web. Curieux et déterminé, je me donne toujours à 100% dans ce que j'entreprends.",
        languages :  "Javascript React Node.js HTML5.0 CSS3.0",
        softSkills : "Aime travailler en équipe, rigoureux et organisé.",
        mobility :  "Reims - Bordeaux - Québec",
        linkedinLink : "https://www.linkedin.com/in/gr%C3%A9goire-suray-38266a92/",
        githubLink : "https://github.com/Dezedene",
        emailLink : "gregoire.suray@gmail.com"
    },

    {
        firstName : "Jeremy",
        familyName : "FIGUEIREDO",
        profilePic : "https://i.imgur.com/mWFYFPF.jpg",
        fewWords :  "Après huit ans d'expériences dans le Tourisme, j'ai décidé de me reconvertir afin que mon intérêt pour le web développement devienne mon métier.",
        languages :  "Javascript React Node.js HTML5.0 CSS3.0",
        softSkills : "Gestion de Projet, Autonomie, Curiosité.",
        mobility :  "Région Parisienne, Région Grand Est",
        linkedinLink : "https://www.linkedin.com/in/figueiredo-figueiredo-37200676/",
        githubLink : "https://github.com/0figueiredo",
        emailLink : "figueiredojeremy@gmail.com"
    },

    {
        firstName : "Matthieu",
        familyName : "NICOLAS",
        profilePic : "https://i.imgur.com/Z7ekieC.jpg",
        fewWords :  "Après une première vie de contrôleur de gestion, j'ai rejoint les rangs de la Wild Code School pour me reconvertir dans le développement web. Je suis 100% motivé pour réussir cette nouvelle étape professionnelle dans un domaine qui me passionne.",
        languages :  "Javascript React Node.js HTML5.0 CSS3.0",
        softSkills : "Organisation - Ecoute - Rigueur.",
        mobility :  "Reims - Paris",
        linkedinLink : "https://www.linkedin.com/in/matthieunicolas/?locale:fr_FR",
        githubLink : "https://github.com/mtthncls",
        emailLink : "mtthncls@gmail.com"
    },

    {
        firstName : "Sébastien",
        familyName : "JOLLY",
        profilePic : "https://i.imgur.com/d3O4XBt.jpg",
        fewWords :  "Désireux d'en apprendre plus sur le développement web/mobile, j'ai décidé de me réorienter professionnellement et ainsi pouvoir en faire mon futur métier.",
        languages :  "Javascript React Node.js HTML5.0 CSS3.0",
        softSkills : "Résolution des problemes - Travail en équipe - Motivation",
        mobility :  "Everywhere",
        linkedinLink : "https://www.linkedin.com/in/s%C3%A9bastien-jolly-b48b71115/",
        githubLink : "https://github.com/seb879",
        emailLink : "seb_879@hotmail.fr"
    }

]

const leaders = [
    {
        firstName : "Thomas",
        familyName : "CULDAUT",
        profilePic : "https://i.imgur.com/X4fMCZD.jpg",
        career :  "Après des études en informatique, Thomas a tout de suite lié la pratique du développement et de la pédagogie dans le monde de la formation professionnelle en France et au Cameroun. Après une expérience dans une startup parisienne, il rejoint l'équipe pédagogique de la WildCodeSchool, où il coordonne aujourd'hui les formations JS de tous les campus.",
        about :  "Thomas aime beaucoup de choses, des mangas aux jeux de rôles sur plateau, mais pas répondre aux questionnaires sur son parcours ;)",
        linkedinLink : "https://www.linkedin.com/in/thomas-culdaut-76ba593/",
        emailLink : "thomas@wildcodeschool.fr"
    },

    {
        firstName : "Etienne",
        familyName : "RABIN",
        profilePic : "https://i.imgur.com/vnDmgSe.jpg",
        career :  "Sa passion pour le dessin l'a naturellement amené à faire des études de graphisme. Mais sa nature curieuse et sa volonté d'élargir ses champs de création l'ont amené à rejoindre la WildCodeSchool, d'abord comme élève puis aujourd'hui comme formateur.",
        about :  "Ne prononcez pas les mots \"PSG\" et \"Remontada\" devant lui !",
        linkedinLink : "https://www.linkedin.com/in/etienne-rabin/",
        emailLink : "etienne@wildcodeschool.fr"
    },

    {
        firstName : "Clément",
        familyName : "BECHETOILLE",
        profilePic : "https://i.imgur.com/iFpWFRB.jpg",
        career :  "Après des fonctions marketing dans l’édition et les objets éducatifs, Clément s'est engagé dans l’enseignement supérieur au Vietnam puis en France (insertion professionnelle, développement personnel et recrutement innovant). Basé à Reims depuis quelques années, il s’implique dans les initiatives locales, notamment l’organisation de l'édition rémoise de TEDx. Passionné par les nouvelles approches pédagogiques, il a rejoint la Wild Code School comme Campus Manager en janvier 2018.",
        about :  "Clément à pour passion d'aller à la découverte des cultures du monde, et surtout de tout ce qui se mange !",
        linkedinLink : "https://www.linkedin.com/in/etienne-rabin/",
        emailLink : "clement@wildcodeschool.fr"
    }
]