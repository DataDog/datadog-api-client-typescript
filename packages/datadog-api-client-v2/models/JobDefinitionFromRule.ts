/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Definition of a historical job based on a security monitoring rule.
*/
export class JobDefinitionFromRule {
  /**
   * Index of the rule case applied by the job.
  */
  "caseIndex": number;
  /**
   * Starting time of data analyzed by the job.
  */
  "from": number;
  /**
   * ID of the detection rule used to create the job.
  */
  "id": string;
  /**
   * Index used to load the data.
  */
  "index": string;
  /**
   * Notifications sent when the job is completed.
  */
  "notifications"?: Array<string>;
  /**
   * Ending time of data analyzed by the job.
  */
  "to": number;

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
    "caseIndex": {
      "baseName": "caseIndex",
      "type": "number",
      "required": true,
      "format": "int32",
    },
    "from": {
      "baseName": "from",
      "type": "number",
      "required": true,
      "format": "int64",
    },
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "index": {
      "baseName": "index",
      "type": "string",
      "required": true,
    },
    "notifications": {
      "baseName": "notifications",
      "type": "Array<string>",
    },
    "to": {
      "baseName": "to",
      "type": "number",
      "required": true,
      "format": "int64",
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




    return JobDefinitionFromRule.attributeTypeMap;

  }

  public constructor() {











  }
}









