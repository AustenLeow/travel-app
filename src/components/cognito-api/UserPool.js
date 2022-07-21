import { CognitoUserPool } from 'amazon-cognito-identity-js'

const poolData = {
  UserPoolId: "ap-southeast-1_MZb0CxZzA",
  ClientId: "3ur5c8jclg5iki4j9tuvor5k74"

  // austen's aws
  // UserPoolId: "ap-southeast-1_R2An4Znub",
  // ClientId: "nedviigalgvmiqmc8an6bluns"

}

export default new CognitoUserPool(poolData)