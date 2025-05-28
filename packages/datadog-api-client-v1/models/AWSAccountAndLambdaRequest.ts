/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * AWS account ID and Lambda ARN.
*/
export class AWSAccountAndLambdaRequest {
  /**
   * Your AWS Account ID without dashes.
  */
  "accountId": string;
  /**
   * ARN of the Datadog Lambda created during the Datadog-Amazon Web services Log collection setup.
  */
  "lambdaArn": string;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "accountId": {
      "baseName": "account_id",
      "type": "string",
      "required": true,
    },
    "lambdaArn": {
      "baseName": "lambda_arn",
      "type": "string",
      "required": true,
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return AWSAccountAndLambdaRequest.attributeTypeMap;

  }

  public constructor() {











  }
}









