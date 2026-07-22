/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSCcmConfigValidationIssueCode } from "./AWSCcmConfigValidationIssueCode";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A single validation issue found while validating an AWS Cost and Usage Report (CUR) 2.0 configuration.
*/
export class AWSCcmConfigValidationIssue {
  /**
   * Identifies the specific reason a Cost and Usage Report (CUR) 2.0 configuration failed validation.
  */
  "code": AWSCcmConfigValidationIssueCode;
  /**
   * Human-readable description of the validation issue.
  */
  "description": string;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "code": {
      "baseName": "code",
      "type": "AWSCcmConfigValidationIssueCode",
      "required": true,
    },
    "description": {
      "baseName": "description",
      "type": "string",
      "required": true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return AWSCcmConfigValidationIssue.attributeTypeMap;

  }

  public constructor() {











  }
}









