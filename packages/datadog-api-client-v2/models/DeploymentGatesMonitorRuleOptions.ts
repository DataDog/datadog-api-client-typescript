/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Options for a `monitor` rule.
*/
export class DeploymentGatesMonitorRuleOptions {
  /**
   * Evaluation window in seconds. Maximum 7200 (2 hours).
  */
  "duration"?: number;
  /**
   * Monitor search query.
  */
  "query": string;

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
    "duration": {
      "baseName": "duration",
      "type": "number",
      "format": "int64",
    },
    "query": {
      "baseName": "query",
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




    return DeploymentGatesMonitorRuleOptions.attributeTypeMap;

  }

  public constructor() {











  }
}









