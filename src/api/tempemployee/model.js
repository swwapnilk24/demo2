import mongoose, { Schema } from 'mongoose'

// const addressSchema = new Schema({
//   AddressType: {
//     type: String
//   },
//   AddressLine1: {
//     type: String
//   }
// })

// new comment added again
/*
{
  currentEmployee: [
    { identify: {
      hireDate: new Date(),
      company: '',
      eventReason: ''
    },
      personalInformation: {
        biographicalInformation: {
          DOB: new Date(),
          CountryOfBirth: '',
          DateOfDeath: new Date()
        },
        personalInformation: {
          personalInformation: {
            DOB: new Date(),
            CountryOfBirth: '',
            DateOfDeath: new Date(),
            firstName: '',
            middleName: '',
            lastName: '',
            suffix: '',
            displayName: '',
            formalName: '',
            title: '',
            birthName: '',
            initials: '',
            prefix: '',
            gender: '',
            maritalStatus: '',
            maritalStatusSinceDate: new Date(),
            secondNationality: '',
            thirdNationality: '',
            preferredLanguage: '',
            challengeStatus: ''
          },
          countrySpecificFields: {
            us: {
              ethnicGroup: '',
              veteran: '',
              challengedVeteran: ''
            }
          }

        },
        nationalIdInformation: {
          country1: {
            country: '',
            nationalIdCardType: '',
            nationalId: '',
            isPrimary: 'no'
          },
          country2: {
            country: '',
            nationalIdCardType: '',
            nationalId: '',
            isPrimary: 'no'
          }
        },
        addressInformation: {
          homeAddress: {
            addressType: '',
            country: '',
            line1: '',
            line2: '',
            city: '',
            state: '',
            zip: ''
          },
          mailingAddress: {
            addressType: '',
            country: '',
            line1: '',
            line2: '',
            city: '',
            state: '',
            zip: ''
          }
        },
        workPermitInformation: {
          permit1: {
            country: '',
            documentType: '',
            documentTitle: '',
            documentNumber: '',
            issueDate: '',
            issuePlace: '',
            issuingAuthority: '',
            expirationDate: '',
            validated: '',
            attachments: ''
          }
        },
        contactInformation: {
          emailInformation: {
            emailType: '',
            emailAddress: '',
            isPrimary: ''
          },
          phoneInformation: {
            phoneType: '',
            number: '',
            extension: '',
            isPrimary: ''
          }
        }

      },
      jobInformation: {
        employmentDetail: {
          keyJobAttribute: {
            jobCode: '',
            position: ''
          },
          organizationalInformation: {
            company: '',
            businessUnit: '',
            division: '',
            department: '',
            location: '',
            timeZone: '',
            costCenter: ''
          },
          jobInformation: {
            employmentStatus: '',
            supervisor: '',
            jobClassification: '',
            jobTitle: '',
            localJobTitle: '',
            payGrade: '',
            regularOrTemporary: '',
            standardWeeklyHours: '',
            fte: ''
          },
          timeInformation: {
            holidayCalendar: '',
            workSchedule: '',
            timeProfile: ''
          },
          countrySpecificFields: {
            us: {
              isFullTime: '',
              notes: '',
              employeeClass: '',
              flsaStatus: '',
              isShiftEmployee: '',
              shiftCode: '',
              shiftRate: '',
              shiftPercent: '',
              isCrossBorderWorker: '',
              eeoJobGroup: '',
              contractType: '',
              continuedSicknessPayPeriod: '',
              continuedSicknessPayMeasure: '',
              noticePeriod: '',
              initialEntry: '',
              entryIntoGroup: '',
              corporation: '',
              eeoCategory1: '',
              eeoCategory2: '',
              eeoCategory3: '',
              eeoCategory4: '',
              eeoCategory5: '',
              eeoCategory6: ''
            }
          }
        },
        jobRelationships: {
          globalFields: {
            relationshipType: '',
            name: ''
          }
        },
        employmentDetails: {
          globalFields: {
            hireDate: '',
            originalStartDate: '',
            seniorityStartDate: '',
            serviceDate: '',
            professionalServiceDate: '',
            retireDate: ''
          }
        }
      },
      compensationInformation: {
        compensationInformation: {
          compensationGroup: {
            payType: '',
            payGroup: '',
            isEligibleForBenefit: '',
            isEligibleForCar: '',
            benefitRate: '',
            compaRatio: '',
            rangePenetration: '',
            annualizedSalary: '',
            teo: ''
          },
          compensation: {
            payComponent: '',
            amount: '',
            currency: '',
            frequency: ''
          }
        },
        oneTimePayment: {
          oneTimePayment: {
            payComponent: '',
            amount: '',
            currency: '',
            paymentDate: ''
          }
        },
        recurringPayment: {
          recurringPayment: {
            payComponent: '',
            amount: '',
            currency: '',
            startDate: '',
            endDate: ''
          }
        }
      }
    }
  ]
};*/

const personalInformationSchema = new Schema({
    firstName: {
      type: String,
      default: '',
      required: true,
      index: false,
      trim: true
    },
    middleName: {
      type: String,
      default: '',
      required: false,
      index: false,
      trim: true
    },
    lastName: {
      type: String,
      default: '',
      required: false,
      index: false,
      trim: true
    },
    suffix: {
      type: String,
      default: '',
      required: false,
      index: false,
      trim: true
    },
    displayName: {
      type: String,
      default: '',
      required: false,
      index: false,
      trim: true
    },
    formalName: {
      type: String,
      default: '',
      required: false,
      index: false,
      trim: true
    },
    title: {
      type: String,
      default: '',
      required: false,
      index: false,
      trim: true
    },
    birthName: {
      type: String,
      default: '',
      required: false,
      index: false,
      trim: true
    },
    initials: {
      type: String,
      default: '',
      required: false,
      index: false,
      trim: true
    },
    prefix: {
      type: String,
      default: '',
      required: false,
      index: false,
      trim: true
    },
    gender: {
      type: String,
      default: 'm',
      required: false,
      index: false,
      trim: true,
      enum: ['m', 'f']
    },
    dob: {
      type: Date,
      required: false,
      index: false
    },
    countryOfBirth: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    dateOfDeath: {
      type: Date,
      required: false,
      index: false
    },
    maritalStatus: {
      type: String,
      required: false,
      index: false,
      min: 0,
      max: 3,
      default: 0
    },
    numberOfChildren: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    maritalStatusSinceDate: {
      type: Date,
      required: false,
      index: false
    },
    secondNationality: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    thirdNationality: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    preferredLanguage: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    challengeStatus: {
      type: String,
      required: false,
      index: false,
      trim: true
    }
});

const biographicalInformationSchema = new Schema({
  biographicalInformation: {
    dob: {
      type: Date,
      required: false,
      index: false
    },
    countryOfBirth: {
      type: String,
      default: '',
      required: false,
      index: false,
      trim: true
    },
    regionOfBirth: {
      type: String,
      default: '',
      required: false,
      index: false,
      trim: true
    },
    dateOfDeath: {
      type: Date,
      required: false,
      index: false
    },
    employeeId: {
      type: String,
      default: '',
      required: false,
      index: false,
      trim: true
    },
    employeeGlobalId: {
      type: String,
      default: '',
      required: false,
      index: false,
      trim: true
    },
  }
});

const countrySpecificFieldsSchema = new Schema({
  us: {
    ethnicGroup: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    veteran: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    challengedVeteran: {
      type: String,
      required: false,
      index: false,
      trim: true
    }
  }

});

const nationalIdInformationSchema = new Schema({
    country: {
      type: String,
      // required: false,
      index: false,
      trim: true
    },
    nationalIdCardType: {
      type: String,
      // required: false,
      index: false,
      trim: true
    },
    nationalId: {
      type: String,
      // required: false,
      index: false,
      trim: true
    },
    isPrimary: {
      type: String,
      // required: false,
      // default:'no',
      index: false,
      trim: true
    }   
});

const addressInformationSchema = new Schema({
    addressType: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    country: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    line1: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    line2: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    city: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    state: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    zip: {
      type: String,
      required: false,
      index: false,
      trim: true
    }
  }
);

const workPermitInformationSchema = new Schema({
  
    country: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    documentType: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    documentTitle: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    documentNumber: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    issueDate: {
      type: Date,
      required: false,
      index: false
    },
    issuePlace: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    issuingAuthority: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    expirationDate: {
      type: Date,
      required: false,
      index: false
    },
    validated: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    attachments: {
      type: String,
      required: false,
      index: false,
      trim: true
    }
  }    
);

const contactInformationSchema = new Schema({
  emailInformation: [{
    emailType: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    emailAddress: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    isPrimary: {
      type: String,
      required: false,
      default: 'no',
      index: false,
      trim: true
    }
  }],
  phoneInformation: [{
    phoneType: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    number: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    extension: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    isPrimary: {
      type: String,
      required: false,
      default: 'no',
      index: false,
      trim: true
    }
  }]
});

const keyJobAttributeSchema = new Schema({
  jobCode: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  position: {
    type: String,
    required: false,
    index: false,
    trim: true
  }
});
const organizationalInformationSchema = new Schema({
  company: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  businessUnit: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  division: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  department: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  location: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  timeZone: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  costCenter: {
    type: String,
    required: false,
    index: false,
    trim: true
  }
});
const jobInformationSchema = new Schema({
  employmentStatus: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  supervisor: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  jobClassification: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  jobTitle: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  localJobTitle: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  payGrade: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  regularOrTemporary: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  standardWeeklyHours: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  fte: {
    type: String,
    required: false,
    index: false,
    trim: true
  }
});

const jobCountrySpecificFieldsSchema = new Schema({
  us: {
    isFullTime: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    notes: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    employeeClass: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    flsaStatus: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    isShiftEmployee: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    shiftCode: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    shiftRate: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    shiftPercent: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    isCrossBorderWorker: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    eeoJobGroup: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    contractType: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    continuedSicknessPayPeriod: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    continuedSicknessPayMeasure: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    noticePeriod: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    initialEntry: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    entryIntoGroup: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    corporation: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    eeoCategory1: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    eeoCategory2: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    eeoCategory3: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    eeoCategory4: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    eeoCategory5: {
      type: String,
      required: false,
      index: false,
      trim: true
    },
    eeoCategory6: {
      type: String,
      required: false,
      index: false,
      trim: true
    }
  }

});
const jobRelationshipsSchema = new Schema({
  relationshipType: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  name: {
    type: String,
    required: false,
    index: false,
    trim: true
  }
});

const timeInformationSchema = new Schema({
  holidayCalendar: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  workSchedule: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  timeProfile: {
    type: String,
    required: false,
    index: false,
    trim: true
  }
  // jobTitle: {
  //   type: String,
  //   required: false,
  //   index: false,
  //   trim: true
  // },
  // localJobTitle: {
  //   type: String,
  //   required: false,
  //   index: false,
  //   trim: true
  // },
  // payGrade: {
  //   type: String,
  //   required: false,
  //   index: false,
  //   trim: true
  // },
  // regularOrTemporary: {
  //   type: String,
  //   required: false,
  //   index: false,
  //   trim: true
  // },
  // standardWeeklyHours: {
  //   type: String,
  //   required: false,
  //   index: false,
  //   trim: true
  // },
  // fte: {
  //   type: String,
  //   required: false,
  //   index: false,
  //   trim: true
  // }
});
const employmentDetailsSchema = new Schema({
  hireDate: {
    type: Date,
    required: false,
    index: false
  },
  originalStartDate: {
    type: Date,
    required: false,
    index: false
  },
  seniorityStartDate: {
    type: Date,
    required: false,
    index: false
  },
  serviceDate: {
    type: Date,
    required: false,
    index: false
  },
  professionalServiceDate: {
    type: Date,
    required: false,
    index: false
  },
  retireDate: {
    type: Date,
    required: false,
    index: false
  }
});
const compensationGroupSchema = new Schema({
  payType: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  payGroup: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  isEligibleForBenefit: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  isEligibleForCar: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  benefitRate: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  compaRatio: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  rangePenetration: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  annualizedSalary: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  teo: {
    type: String,
    required: false,
    index: false,
    trim: true
  }
});
const compensationSchema = new Schema({
  payComponent: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  amount: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  currency: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  frequency: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  markPaymentIsEligibleForEmployee: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  markTaxDeductionAtSource: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  socialContributionRelevant: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  contributionFromEmployee: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  markContributionForEmployer: {
    type: String,
    required: false,
    index: false,
    trim: true
  }
});
const oneTimePaymentSchema = new Schema({
  payComponent: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  amount: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  currency: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  paymentDate: {
    type: Date,
    required: false,
    index: false
  }
});
const recurringPaymentSchema = new Schema({
  payComponent: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  amount: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  currency: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  startDate: {
    type: Date,
    required: false,
    index: false
  },
  endDate: {
    type: Date,
    required: false,
    index: false
  },
  markPaymentIsEligibleForEmployee: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  markTaxDeductionAtSource: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  socialContributionRelevant: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  contributionFromEmployee: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  markContributionForEmployer: {
    type: String,
    required: false,
    index: false,
    trim: true
  }
});
const entityInformationSchema = new Schema({
  owner: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  approver: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  status: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  customer: {
    type: String,
    required: false,
    index: false,
    trim: true
  },
  approval_date: {
    type: Date,
    required: false,
    index: false
  }
});
const identifySchema = new Schema({
  identify: {
    identify: {
      hireDate: {
        type: Date,
        required: false,
        index: false
      },
      company: {
        type: Schema.Types.ObjectId,
        ref: 'Company'
      },
      corporateCompany: {
        type: Schema.Types.ObjectId,
        index: false,
        trim: true
      },
      eventReason: {
        type: String,
        required: false,
        index: false,
        trim: true
      }
    }
  }

});

const NomineesSchema = new Schema({
  nominationType: {
    type: String,
    required: false
  },
  nomineeFirstName: {
    type: String,
    required: false
  },
  nomineeLastName: {
    type: String,
    required: false
  },
  nomineeRelationShip: {
    type: String,
    required: false
  }, 
  dob: {
    type: Date,
    require: false
  }
});

const companyInfoSchema = new Schema({
  companyName: {
    type: String,
    required: false
  },
  countryName: {
    type: String,
    required: false
  },
  cityName: {
    type: String,
    required: false
  },
  stateName: {
    type: String,
    required: false
  },
  zipCode: {
    type: String,
    required: false
  },
  addressLine1: {
    type: String,
    required: false
  },
  addressLine2: {
    type: String,
    required: false
  },
  numberOfEmployees: {
    type: String,
    required: false
  }
});
const employeeSchema = new Schema({
  entityInformation: entityInformationSchema,
  identify: identifySchema,
  personalInformation: {
    biographicalInformation: biographicalInformationSchema,
    personalInformation: { personalInformation: personalInformationSchema, countrySpecificFields: countrySpecificFieldsSchema },
    nationalIdInformation: [nationalIdInformationSchema],
    addressInformation: { addressInformation: [addressInformationSchema] },
    workPermitInformation: { workPermitInformation: [workPermitInformationSchema] },
    contactInformation: contactInformationSchema,
  },
  jobInformation: {
    employmentDetail: {
      keyJobAttribute: keyJobAttributeSchema,
      organizationalInformation: [organizationalInformationSchema],
      jobInformation: [jobInformationSchema],
      timeInformation: timeInformationSchema,
      countrySpecificFields: jobCountrySpecificFieldsSchema
    },
    jobRelationships: {
      globalFields: [jobRelationshipsSchema]
    },
    employmentDetails: {
      globalFields: employmentDetailsSchema
    }
  },
  compensationInformation: {
    compensationInformation: {
      compensationGroup: compensationGroupSchema,
      compensation: [compensationSchema]
    },
    oneTimePayment: {
      oneTimePayment: [oneTimePaymentSchema]
    },
    recurringPayment: {
      recurringPayment: [recurringPaymentSchema]
  }
  },
  companyInformation: {
    companyInformation: companyInfoSchema
  }
}, {
  timestamps: true
})

employeeSchema.methods = {
  view (full) {
    const fullView = {
      // simple view
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      entityInformation: this.entityInformation,
      identify: this.identify,
      personalInformation: this.personalInformation,
      jobInformation: this.jobInformation,
      compensationInformation: this.compensationInformation
    }

    const partialView = {
      // simple view
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...fullView
      // add properties for a full view
    } : {...partialView}
  }
}

const model = mongoose.model('TempEmployee', employeeSchema)

// //get employee data
// module.exports.getEmployeeDtls = function(callback,limit){
//   model.find(callback).limit(limit);
// }

export const schema = model.schema
export default model
