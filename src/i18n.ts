import { createI18Next } from '/runtime/v1/@opendatacapture/runtime-core';



export default function i18nSetUp() {
  document.documentElement.setAttribute('lang', 'fr');
  const i18n = createI18Next({
  translations: {
    welcome: {
      en: 'Welcome. Press any key to begin',
      fr: "Bienvenue. Appuyez sur n'importe quelle touche pour commencer"
    },
    correctResponse: {
      en: 'Correct response:',
      fr: 'La réponse correcte est:'
    },
    loadingStimulus: {
      en: 'Loading stimulus',
      fr: 'Stimulus de chargement'
    },
    guidelines: {
      en: `Guidelines:`,
      fr: `Directives:`
    },
    initialInstructions: {
      en: ` 
            This test measures your ability to recognize emotions.

            Your task is to watch a series of videos with image and sound, without sound, or without image, in which a person expresses an emotion. 
            
            You will watch each extract twice. After the second viewing, you will have to choose the word that best corresponds to the emotion expressed by the person.
            
            Make sure your volume is high enough to hear the sounds.`,

      fr: `  

            Ce test mesure votre capacité à reconnaître les émotions. <br><br> 

            Votre tâche consiste à visionner une série de vidéos avec image et son, sans son, ou sans image, dans lesquelles une personne exprime une émotion. <br><br> 
            
            Vous visionnerez chaque extrait 2 fois. Après le second visionnement, vous devrez choisir le mot qui correspond le mieux à l'émotion exprimée par la personne.<br><br>
            
            Assurez-vous que votre volume est suffisamment élevé pour entendre les sons. <br>`
    },
    audioInstructions: {
      en: `Snippets <span style="color:red"> <b> without images </b> </span> will now be presented.<br>
 
      Please click on the icon to play the audio.`,
      fr: `
      Des extraits <span style="color:red"> <b> sans image  </b> </span> seront maintenant présentés.<br>
 
      Veuillez cliquer sur l'icône afin de lancer l'extrait.`
    },
    videoTaskInstructions: {
      en: `Videos <span style="color:red"> <b> without sound </b> </span> will now be presented. <br>
 
            Please click on the video to launch it.`,

      fr: ` Des vidéos <span style="color:red"> <b> sans son </b> </span> seront maintenant présentées. <br>
 
        Veuillez cliquer sur le vidéo pour le lancer.`
    },
    audioVisualTaskInstructions: {
      en: `The first block is about to begin. <br>

         Videos <span style="color:red"> <b> with image and sound </b> </span> will be presented. <br>
          
          Please click on the video to play it`,
      fr: `Le premier bloc va commencer. <br>

          Des vidéos <span style="color:red"> <b> avec image et son  </b> </span> seront présentées. <br>
          
          Veuillez cliquer sur le vidéo pour le lancer.`
    },
    buttonSelectionWarning: {
      en: `Please select a button`,
      fr: `Veuillez sélectionner un bouton`
    },
    emotions: {
      Anger: {
        en: 'Anger',
        fr: 'Colère'
      },
      Fear: {
        en: 'Fear',
        fr: 'Peur'
      },
      Contempt: {
        en: 'Contempt',
        fr: 'Mépris'
      },
      Interest: {
        en: 'Interest',
        fr: 'Intérêt'
      },
      Joy: {
        en: 'Joy',
        fr: 'Joie'
      },
      Pride: {
        en: 'Pride',
        fr: 'Fierté'
      },
      Pleasure: {
        en: 'Pleasure',
        fr: 'Plaisir'
      },
      Relief: {
        en: 'Relief',
        fr: 'Soulagement'
      },
      Sadness: {
        en: 'Sadness',
        fr: 'Tristesse'
      },
      Disgust: {
        en: 'Disgust',
        fr: 'Dégoût'
      }
    }
  }
});
  return i18n

}



