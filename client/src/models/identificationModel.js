const INITIAL_MODEL = {
  locale: "is",
  logoPosition: "none",
  showTitle: false,
  showCompletedPage: false,
  showProgressBar: "both",
  storeOthersAsComment: false,
  goNextPageAutomatic: false,
  completeText : {
    is : 'Senda svör',
    en : 'Submit answers'
  },
  pages : [
    {
      name : "Identification",
      description : {
        is : "Vinsamlegast fyllið in eftirfarandi upplýsingar",
        en : "Please provide the following information"
      },
      elements : [
        {
          type: "text",
          name : "name",
          title: {
            is : "Nafn",
            default : "Name"
          },
          hideNumber: true,
          isRequired: true,
          requiredErrorText: {
           is: "Vinsamlegast fylltu in nafn",
           default : "Please provide a name"
          },
          placeHolder: {
           is: "Nafn",
           default: "Name"
          }
         },
        {
          type: "text",
          name : "socialSecurityNumber",
          title: {
            is : "Kennitala",
            default : "Social security number"
          },
          hideNumber: true,
          isRequired: true,
          requiredErrorText: {
           is: "Vinsamlegast fylltu in gilda kennitölu",
           default : "Please provide a valid Icelandic social security number"
          },
          validators: [
           {
            type: "regex",
            text: {
             is: "Vinsamlegast fylltu in gilda kennitölu",
             default : "Please provide a valid Icelandic social security number"
            },
            regex: "[0-3]\\d[01]\\d{3}[-]*\\d{3}[09]"
           }
          ],
          placeHolder: {
           is: "DDMMYY-XXXX",
           default: "DDMMYY-XXXX"
          }
         }
      ]
    }
  ]
}

export const getInitialSurveyModel = () => {
  return INITIAL_MODEL;
}