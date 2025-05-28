/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Update an existing Cloud Workload Security Agent rule
*/
export class CloudWorkloadSecurityAgentRuleUpdateAttributes {
  /**
   * The description of the Agent rule
  */
  "description"?: string;
  /**
   * Whether the Agent rule is enabled
  */
  "enabled"?: boolean;
  /**
   * The SECL expression of the Agent rule
  */
  "expression"?: string;
  /**
   * The ID of the policy where the Agent rule is saved
  */
  "policyId"?: string;
  /**
   * The list of product tags associated with the rule
  */
  "productTags"?: Array<string>;

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
    "description": {
      "baseName": "description",
      "type": "string",
    },
    "enabled": {
      "baseName": "enabled",
      "type": "boolean",
    },
    "expression": {
      "baseName": "expression",
      "type": "string",
    },
    "policyId": {
      "baseName": "policy_id",
      "type": "string",
    },
    "productTags": {
      "baseName": "product_tags",
      "type": "Array<string>",
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




    return CloudWorkloadSecurityAgentRuleUpdateAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









