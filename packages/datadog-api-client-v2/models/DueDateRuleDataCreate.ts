/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DueDateRuleAttributesCreate } from "./DueDateRuleAttributesCreate";
import { DueDateRuleType } from "./DueDateRuleType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The data object for a due date rule create or update request.
*/
export class DueDateRuleDataCreate {
  /**
   * Attributes for creating or updating a due date rule.
  */
  "attributes": DueDateRuleAttributesCreate;
  /**
   * The JSON:API type for due date rules.
  */
  "type": DueDateRuleType;

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
    "attributes": {
      "baseName": "attributes",
      "type": "DueDateRuleAttributesCreate",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "DueDateRuleType",
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




    return DueDateRuleDataCreate.attributeTypeMap;

  }

  public constructor() {











  }
}









