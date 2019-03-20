console.log("test fonctionnement js");

const wilders = [{
        firstName: "Axel",
        familyName: "CHANDELIER",
        profilePic: "https://i.imgur.com/M3Who57.png",
        fewWords: "Développeur en formation, je suis courtois, travailleur et ponctuel. Je recherche un stage afin de compléter ma formation.",
        languages: "Javascript React Node.js HTML5.0 CSS3.0",
        softSkills: "Travail d'équipe - Autonomie - Ponctualité.",
        mobility: "Prêt à prendre le train tous les jours si nécessaire. Disponibilité jusque Paris.",
        linkedinLink: "https://www.linkedin.com/in/axel-chandelier-6a6079181/",
        githubLink: "https://github.com/Spartakyste",
        emailLink: "chandelieraxel0@gmail.com"
    },

    {
        firstName: "Grégoire",
        familyName: "SURAY",
        profilePic: "https://i.imgur.com/csYQ0pa.png",
        fewWords: "Avec un background de 5 ans en management et gestion, j'ai décidé de me réorienter vers le Web. Curieux et déterminé, je me donne toujours à 100% dans ce que j'entreprends.",
        languages: "Javascript React Node.js HTML5.0 CSS3.0",
        softSkills: "Aime travailler en équipe, rigoureux et organisé.",
        mobility: "Reims - Bordeaux - Québec",
        linkedinLink: "https://www.linkedin.com/in/gr%C3%A9goire-suray-38266a92/",
        githubLink: "https://github.com/Dezedene",
        emailLink: "gregoire.suray@gmail.com"
    },

    {
        firstName: "Jeremy",
        familyName: "FIGUEIREDO",
        profilePic: "https://i.imgur.com/DrhiIyK.png",
        fewWords: "Après huit ans d'expériences dans le Tourisme, j'ai décidé de me reconvertir afin que mon intérêt pour le web développement devienne mon métier.",
        languages: "Javascript React Node.js HTML5.0 CSS3.0",
        softSkills: "Gestion de Projet, Autonomie, Curiosité.",
        mobility: "Région Parisienne, Région Grand Est",
        linkedinLink: "https://www.linkedin.com/in/figueiredo-figueiredo-37200676/",
        githubLink: "https://github.com/0figueiredo",
        emailLink: "figueiredojeremy@gmail.com"
    },

    {
        firstName: "Matthieu",
        familyName: "NICOLAS",
        profilePic: "https://i.imgur.com/zRSo9X9.png",
        fewWords: "Après une première vie de contrôleur de gestion, j'ai rejoint les rangs de la Wild Code School pour me reconvertir dans le développement web. Je suis 100% motivé pour réussir cette nouvelle étape professionnelle dans un domaine qui me passionne.",
        languages: "Javascript React Node.js HTML5.0 CSS3.0",
        softSkills: "Organisation - Ecoute - Rigueur.",
        mobility: "Reims - Paris",
        linkedinLink: "https://www.linkedin.com/in/matthieunicolas/?locale:fr_FR",
        githubLink: "https://github.com/mtthncls",
        emailLink: "mtthncls@gmail.com"
    },

    {
        firstName: "Sébastien",
        familyName: "JOLLY",
        profilePic: "https://i.imgur.com/MLmuFxn.png",
        fewWords: "Désireux d'en apprendre plus sur le développement web/mobile, j'ai décidé de me réorienter professionnellement et ainsi pouvoir en faire mon futur métier.",
        languages: "Javascript React Node.js HTML5.0 CSS3.0",
        softSkills: "Résolution des problemes - Travail en équipe - Motivation",
        mobility: "Everywhere",
        linkedinLink: "https://www.linkedin.com/in/s%C3%A9bastien-jolly-b48b71115/",
        githubLink: "https://github.com/seb879",
        emailLink: "seb_879@hotmail.fr"
    }

]

const teachers = [{
        firstName: "Thomas",
        familyName: "CULDAUT",
        profilePic: "https://i.imgur.com/CgNFFqi.png",
        career: "Après des études en informatique, Thomas a tout de suite lié la pratique du développement et de la pédagogie dans le monde de la formation professionnelle en France et au Cameroun. Après une expérience dans une startup parisienne, il rejoint l'équipe pédagogique de la WildCodeSchool, où il coordonne aujourd'hui les formations JS de tous les campus.",
        about: "Thomas aime beaucoup de choses, des mangas aux jeux de rôles sur plateau, mais pas répondre aux questionnaires sur son parcours ;)",
        linkedinLink: "https://www.linkedin.com/in/thomas-culdaut-76ba593/",
        emailLink: "thomas@wildcodeschool.fr"
    },

    {
        firstName: "Etienne",
        familyName: "RABIN",
        profilePic: "https://i.imgur.com/DdN2Su4.png",
        career: "Sa passion pour le dessin l'a naturellement amené à faire des études de graphisme. Mais sa nature curieuse et sa volonté d'élargir ses champs de création l'ont amené à rejoindre la WildCodeSchool, d'abord comme élève puis aujourd'hui comme formateur.",
        about: "Ne prononcez pas les mots \"PSG\" et \"Remontada\" devant lui !",
        linkedinLink: "https://www.linkedin.com/in/etienne-rabin/",
        emailLink: "etienne@wildcodeschool.fr"
    },

    {
        firstName: "Clément",
        familyName: "BECHETOILLE",
        profilePic: "https://i.imgur.com/erXJsNE.png",
        career: "Après des fonctions marketing dans l’édition et les objets éducatifs, Clément s'est engagé dans l’enseignement supérieur au Vietnam puis en France (insertion professionnelle, développement personnel et recrutement innovant). Basé à Reims depuis quelques années, il s’implique dans les initiatives locales, notamment l’organisation de l'édition rémoise de TEDx. Passionné par les nouvelles approches pédagogiques, il a rejoint la Wild Code School comme Campus Manager en janvier 2018.",
        about: "Clément à pour passion d'aller à la découverte des cultures du monde, et surtout de tout ce qui se mange !",
        linkedinLink: "https://www.linkedin.com/in/clementbechetoille/",
        emailLink: "clement@wildcodeschool.fr"
    }
]


const peoplesWildersCard = (peoplesType, peoplesArray) => {
    //Get the element with wilders id
    const peoplesWildersElem = document.getElementById(peoplesType)
    //Define loop for wilders cards
    let cardWildersPeoples = ""
    for (i = 0; i < peoplesArray.length; i++) {
        cardWildersPeoples += ` <article class="col-12 col-md-4"><div class="modal fade" id="${peoplesArray[i].firstName}${peoplesArray[i].familyName}Modal" tabindex="-1" role="dialog"
        aria-labelledby="${peoplesArray[i].firstName}${peoplesArray[i].familyName}ModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-center w-100" id="${peoplesArray[i].firstName}${peoplesArray[i].familyName}ModalLabel">${peoplesArray[i].firstName} ${peoplesArray[i].familyName}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modale">
                    <div class="modal-body row justify-content-center align-items-center">
                        <div class="col-12 col-md-6">
                            <img class="w-100 rounded-circle modimg"
                                src="${peoplesArray[i].profilePic}" alt="photo ${peoplesArray[i].firstName} ${peoplesArray[i].familyName}">
                        </div>
                        <div class="col-12 col-md-6">
                            <p class="souligne">Quelques mots de notre wilder</p>
                            <p class="text-justify">${peoplesArray[i].fewWords}</p>
                            <div>
                                <p class="souligne">Langages de programmation</p>
                                <p>${peoplesArray[i].languages}</p>
                            </div>
                            <div>
                                <p class="souligne">Soft Skills</p>
                                <p>${peoplesArray[i].softSkills}</p>
                            </div>
                            <div>
                                <p class="souligne">Mobilité professionnelle</p>
                                <p>${peoplesArray[i].mobility}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="modal-footer justify-content-center">
                        <div class="col imagebox">
                            <a href="${peoplesArray[i].linkedinLink}"
                                target="_blank">
                                <img class="img-fluid rounded-circle"
                                    src="https://i.imgur.com/JFjk02U.png"
                                    alt="Logo LinkedIn"></a>
                        </div>
                        <div class="col imagebox">                            
                            <a href="${peoplesArray[i].githubLink}" target="_blank">
                                <img class="img-fluid rounded-circle"
                                    src="https://i.imgur.com/f46V8rb.png"
                                    alt="logo GitHub"></a>
                        </div>
                        <div class="col imagebox envelope">
                        <p class="infobulle">Cliquez pour copier l'email</p>
                        <input class="emailaddress" value="${peoplesArray[i].emailLink}">
                                <img class="img-fluid"
                                    src="https://i.imgur.com/gKdLQvr.png"
                                    alt="Logo enveloppe">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><div>
                <img src="${peoplesArray[i].profilePic}" class="card-img-top rounded-circle test modimg"
                    alt="photo ${peoplesArray[i].firstName} ${peoplesArray[i].familyName}">
            </div>
            <div class="card-body border-0">
                <h5 class="card-title font-weight-bold">${peoplesArray[i].firstName} <br />${peoplesArray[i].familyName}</h5>
                <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#${peoplesArray[i].firstName}${peoplesArray[i].familyName}Modal">Voir le
                    profil</a>
            </div></article>`
    }
    peoplesWildersElem.innerHTML = cardWildersPeoples;
}

const peopleTeachersCard = (peoplesType, peoplesArray) => {
    //Get the element with teachers id
    const teachersElem = document.getElementById('teachers')
    //Define loop for teachers cards
    let cardTeachers = ""
    for (i = 0; i < teachers.length; i++) {
        cardTeachers += `<article class="col-12 col-md-4">
    <div class="modal fade" id="${peoplesArray[i].firstName}${peoplesArray[i].familyName}Modal" tabindex="-1" role="dialog"
        aria-labelledby="${peoplesArray[i].firstName}${peoplesArray[i].familyName}ModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-center w-100" id="${peoplesArray[i].firstName}${peoplesArray[i].familyName}ModalLabel">${peoplesArray[i].firstName} ${peoplesArray[i].familyName}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modale">
                    <div class="modal-body row justify-content-center align-items-center">
                        <div class="col-12 col-md-6">
                            <img class="w-100 rounded-circle modimg"
                                src="${peoplesArray[i].profilePic}" alt="photo ${peoplesArray[i].firstName} ${peoplesArray[i].familyName}">
                        </div>
                        <div class="col-12 col-md-6">
                            <div>
                                <p class="souligne">Son parcours</p>
                                <p class="text-justify">${peoplesArray[i].career}</p>
                            </div>
                            <div>
                                <p class="souligne">Une anecdote</p>
                                <p class="text-justify">${peoplesArray[i].about}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="modal-footer justify-content-center">
                        <div class="col imagebox">
                            <a href="${peoplesArray[i].linkedinLink}"
                                target="_blank">
                                <img class="img-fluid rounded-circle"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW0m7yXW45tMa1MmBfOm904CyHUrPYTK8BZufKdA5O4NtvvSui"
                                    alt="Responsive image"></a>
                        </div>
                        <div class="col imagebox envelope">
                        <p class="infobulle">Cliquez pour copier l'email</p>
                        <input class="emailaddress" value="${peoplesArray[i].emailLink}">
                                <img class="img-fluid"
                                    src="http://www.cril54.org/wp-content/uploads/2018/04/enveloppe-mail.png"
                                    alt="Responsive image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <img src="${peoplesArray[i].profilePic}" class="card-img-top rounded-circle test modimg"
            alt="${peoplesArray[i].firstName} ${peoplesArray[i].familyName}">
    </div>
    <div class="card-body border-0">
        <h5 class="card-title font-weight-bold">${peoplesArray[i].firstName} <br />${peoplesArray[i].familyName}</h5>
        <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#${peoplesArray[i].firstName}${peoplesArray[i].familyName}Modal">Voir le
            profil</a>
    </div>
</article>`
    }
    teachersElem.innerHTML = cardTeachers;
}

peoplesWildersCard('wilders', wilders)
peopleTeachersCard('teachers', teachers)


const emailElems = document.getElementsByClassName('envelope');
const inputEmailElems = document.getElementsByClassName('emailaddress');
for (let i = 0; i < emailElems.length; i++) {
    console.log(emailElems)
    emailElems[i].addEventListener("click", (e) => {
        e.preventDefault()
        console.log(i)
        console.log(inputEmailElems[i])
        inputEmailElems[i].select()
        document.execCommand("copy")

    })
}