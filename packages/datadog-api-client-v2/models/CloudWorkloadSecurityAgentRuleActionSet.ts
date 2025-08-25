/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The set action applied on the scope matching the rule
*/
export class CloudWorkloadSecurityAgentRuleActionSet {
  /**
   * Whether the value should be appended to the field
  */
  "append"?: boolean;
  /**
   * The field of the set action
  */
  "field"?: string;
  /**
   * The name of the set action
  */
  "name"?: string;
  /**
   * The scope of the set action
  */
  "scope"?: string;
  /**
   * The size of the set action
  */
  "size"?: number;
  /**
   * The time to live of the set action
  */
  "ttl"?: number;
  /**
   * The value of the set action
  */
  "value"?: string;

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
    "append": {
      "baseName": "append",
      "type": "boolean",
    },
    "field": {
      "baseName": "field",
      "type": "string",
    },
    "name": {
      "baseName": "name",
      "type": "string",
    },
    "scope": {
      "baseName": "scope",
      "type": "string",
    },
    "size": {
      "baseName": "size",
      "type": "number",
      "format": "int64",
    },
    "ttl": {
      "baseName": "ttl",
      "type": "number",
      "format": "int64",
    },
    "value": {
      "baseName": "value",
      "type": "string",
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




    return CloudWorkloadSecurityAgentRuleActionSet.attributeTypeMap;

  }

  public constructor() {











  }
}









