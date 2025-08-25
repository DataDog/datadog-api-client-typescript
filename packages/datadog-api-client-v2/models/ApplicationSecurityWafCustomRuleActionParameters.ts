/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The definition of `ApplicationSecurityWafCustomRuleActionParameters` object.
*/
export class ApplicationSecurityWafCustomRuleActionParameters {
  /**
   * The location to redirect to when the WAF custom rule triggers.
  */
  "location"?: string;
  /**
   * The status code to return when the WAF custom rule triggers.
  */
  "statusCode"?: number;

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
    "location": {
      "baseName": "location",
      "type": "string",
    },
    "statusCode": {
      "baseName": "status_code",
      "type": "number",
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




    return ApplicationSecurityWafCustomRuleActionParameters.attributeTypeMap;

  }

  public constructor() {











  }
}









