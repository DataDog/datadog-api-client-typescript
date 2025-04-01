/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Options for the operator of this condition.
*/
export class ApplicationSecurityWafCustomRuleConditionOptions {
  /**
   * Evaluate the value as case sensitive.
  */
  "caseSensitive"?: boolean;
  /**
   * Only evaluate this condition if the value has a minimum amount of characters.
  */
  "minLength"?: number;

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
    "caseSensitive": {
      "baseName": "case_sensitive",
      "type": "boolean",
    },
    "minLength": {
      "baseName": "min_length",
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




    return ApplicationSecurityWafCustomRuleConditionOptions.attributeTypeMap;

  }

  public constructor() {











  }
}









