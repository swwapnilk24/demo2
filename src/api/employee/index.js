import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { uploadfile } from '../../services/upload'
import { uploaddocfile, downloadfile } from '../../services/docUpload'
import {
  create,
  index,
  show,
  update,
  destroy,
  updateNewEmployee,
  findNewEmployee,
  showEmpData,
  getLastEmployeeData,
  listOfMyEmployees,
  getFirstRecordData,
  creditTimeOff,
  postHouseRent,
  getHouseRent,
  postfile,
  deleteHouseRent,
  postMedicalBills,
  getMedicalBills,
  postLtaBills,
  getLtaBills,
  deleteOtherBills,
  deleteFile,
  creditIndividualTimeOff,
  postIndTaxSavings,
  getIndTaxSavings,
  getRetiralBenifits,
  postRetiralBenifits,
  deleteRetiralBenifits,
  getTaxBenifits,
  postTaxBenifits,
  postSkills,
  deleteTaxBenifits,
  createNewEmployee,
  getLeaveByEmpId,
  postPosition,
  updateApproveSkills,
  approveClaims,
  rejectClaims,
  postClaims,
  // deleteTaxBenifits,
  getEmpPayRoll,
  getNominee,
  postNominee,
  deleteNominee,
  getAllEmpData,
  performAndPostFile,
  fillFileDetails,
  verifyLogin,
  approveEnrollments
  // getPlan
 } from './controller'
import { schema } from './model'
export Employee, { schema } from './model'
import multer from 'multer'
// configuring Multer to use files directory for storing files
// this is important because later we'll need to access file path
const storage = multer.diskStorage({
  destination: './files',
  filename (req, file, cb) {
    cb(null, `${file.originalname}`)
  }
})
const upload = multer({ storage })

const router = new Router()
const { employee } = schema.tree
//const EmployeeDtls = require('./model')
router.get('/getAllEmpData', getAllEmpData)
/**
 * @api {post} /employees Create employee
 * @apiName CreateEmployee
 * @apiGroup Employee
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam {Object} employee Employee's FirstName.
 * @apiSuccess {Object} employee Employee's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Employee not found.
 * @apiError 401 admin access only.
 */
// router.post('/',
//   //body({ identify, personalInformation, jobInformation, compensationInformation, DisplayName, FormalName, Title, BirthName, Initials, Prefix, Gender, MaritalStatus, MaritalStatusSince, SecondNationality, ThirdNationality, NativePreferredLanguage, ChallengeStatus, CertificateStartDate, CertificateEndDate, Addresses }),
//   //body({employee}),
//   create)

router.post('/new',
  createNewEmployee);

router.post('/login',
  verifyLogin);  

/**
 * @api {get} /employees Retrieve employees
 * @apiName RetrieveEmployees
 * @apiGroup Employee
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} employees List of employees.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 admin access only.
 */
router.get('/',
token({ required: false, roles: ['admin'] }),
query(),
index)

/**
 * @api {get} /employees/getLastEmpCode Retrieve employee
 * @apiName RetrieveEmployee
 * @apiGroup Employee
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess {Object} employee Employee's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Employee not found.
 * @apiError 401 admin access only.
 */
router.get('/getLastEmployeeData',
token({ required: false, roles: ['admin'] }),
query(),
getLastEmployeeData)

/**
 * @api {get} /employees/firstRecord Retrieve employee
 * @apiName RetrieveEmployee
 * @apiGroup Employee
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess {Object} employee Employee's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Employee not found.
 * @apiError 401 admin access only.
 */
router.get('/firstRecord/:id',token({ required: false, roles: ['admin'] }),
query(),
getFirstRecordData)

/**
 * @api {get} /employees/myEmployees Retrieve myEmployees
 * @apiName RetrieveMyEmployees
 * @apiGroup MyEmployees
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess {Object} employee Employee's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 MyEmployees not found.
 * @apiError 401 admin access only.
 */
router.get('/myEmployees',
token({ required: false, roles: ['admin'] }),
query(),
listOfMyEmployees)

/**
 * @api {get} /employees/getCurrentEmployeeData Retrieve employees
 * @apiName RetrieveEmployees
 * @apiGroup Employee
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} employees List of employees.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 admin access only.
 */
router.get('/getCurrentEmployeeData',
  token({ required: false, roles: ['admin'] }),
  query(),
  showEmpData)

/**
 * @api {get} /employees/updateNewEmployee Retrieve employees
 * @apiName RetrieveEmployees
 * @apiGroup Employee
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam {String} access_token admin access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} employees List of employees.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 admin access only.
 */
router.post('/updateNewEmployee',
    token({ required: false, roles: ['admin'] }),
    updateNewEmployee)

router.post('/creditTimeOff',
  creditTimeOff)

router.post('/creditIndividualTimeOff',
  creditIndividualTimeOff)


/**
 * @api {get} /employees/updateNewEmployee Retrieve employees
 * @apiName RetrieveEmployees
 * @apiGroup Employee
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam {String} access_token admin access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} employees List of employees.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 admin access only.
 */
router.post('/findNewEmployee',
  token({ required: false, roles: ['admin'] }),
  findNewEmployee)

/**
 * @api {get} /employees/:id Retrieve employee
 * @apiName RetrieveEmployee
 * @apiGroup Employee
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess {Object} employee Employee's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Employee not found.
 * @apiError 401 admin access only.
 */
router.get('/:id', token({required: false, roles: ['admin']}), show)

/**
 * @api {put} /employees/:id Update employee
 * @apiName UpdateEmployee
 * @apiGroup Employee
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam {Object} identify Employee's FirstName.
 * @apiParam {Object} personalInformation Employee's LastName.
 * @apiParam {Object} jobInformation Employee's MiddleName.
 * @apiParam {Object} compensationInformation Employee's Sufix.
 * @apiSuccess {Object} employee Employee's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Employee not found.
 * @apiError 401 admin access only.
 */
router.put('/:id',
  token({ required: false, roles: ['admin'] }),
  //body({ FirstName, LastName, MiddleName, Sufix, DisplayName, FormalName, Title, BirthName, Initials, Prefix, Gender, MaritalStatus, MaritalStatusSince, SecondNationality, ThirdNationality, NativePreferredLanguage, ChallengeStatus, CertificateStartDate, CertificateEndDate, Addresses }),
  body({ employee}),
  update)

/**
 * @api {delete} /employees/:id Delete employee
 * @apiName DeleteEmployee
 * @apiGroup Employee
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Employee not found.
 * @apiError 401 admin access only.
 */
router.delete('/:id', token({required: false, roles: ['admin']}), destroy)

router.post('/houserent',
postHouseRent)
router.get('/houserent/:id',
getHouseRent)
router.post('/upload/:id', uploadfile(),
postfile)
router.get('/deletefile/:id/:filename',
deleteFile)

router.get('/deletehouserent/:id/:rentid',
deleteHouseRent)

// Used for medical and lta bills updations
router.post('/medicalbills/',
postMedicalBills)
router.get('/medicalbills/:id',
getMedicalBills)
router.post('/ltabills/',
postLtaBills)
router.get('/ltabills/:id',
getLtaBills)
router.post('/indtaxsavings/',
postIndTaxSavings)
router.get('/indtaxsavings/:id',
getIndTaxSavings)
router.get('/retiralbenifits/:id',
getRetiralBenifits)
router.post('/retiralbenifits/',
postRetiralBenifits)
router.get('/retiralbenifits/delete/:id/:deleteid',
deleteRetiralBenifits)
router.get('/taxbenifits/:id',
getTaxBenifits)
router.post('/taxbenifits/',
postTaxBenifits)
router.get('/taxbenifits/delete/:id/:deleteid',
deleteTaxBenifits)
router.get('/otherbills/:id/:savingtype/:savingsid',
deleteOtherBills)
router.post('/skills/',
postSkills)
router.post('/approveSkills/',
updateApproveSkills)
router.post('/approveClaims/',
approveClaims)
router.post('/rejectClaims/',
rejectClaims)
router.post('/position/',
postPosition)
router.post('/nominee/',
postNominee)
router.get('/nominee/:id/:nomineeType',
getNominee)
router.post('/approveEnrollments/',
approveEnrollments)
// router.get('/nominee/plan/:id/:position', getPlan);
router.delete('/nominee/:id/:deleteid', deleteNominee)


router.get('/leaveByEmpId/:id/:date',
getLeaveByEmpId)

router.post('/docupload/:id', uploaddocfile(),
performAndPostFile)
router.post('/submitclaims/:id', postClaims);
router.get('/downloadfile/:id/:filename', downloadfile(),
fillFileDetails);

// Get employee payroll
router.get('/getEmpSalDtls/:id', getEmpPayRoll)

export default router
