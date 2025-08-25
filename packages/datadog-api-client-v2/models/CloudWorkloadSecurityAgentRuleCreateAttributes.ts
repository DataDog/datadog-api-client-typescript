/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudWorkloadSecurityAgentRuleAction } from "./CloudWorkloadSecurityAgentRuleAction";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Create a new Cloud Workload Security Agent rule.
*/
export class CloudWorkloadSecurityAgentRuleCreateAttributes {
  /**
   * The array of actions the rule can perform if triggered
  */
  "actions"?: Array<CloudWorkloadSecurityAgentRuleAction>;
  /**
   * The blocking policies that the rule belongs to
  */
  "blocking"?: Array<string>;
  /**
   * The description of the Agent rule.
  */
  "description"?: string;
  /**
   * The disabled policies that the rule belongs to
  */
  "disabled"?: Array<string>;
  /**
   * Whether the Agent rule is enabled
  */
  "enabled"?: boolean;
  /**
   * The SECL expression of the Agent rule.
  */
  "expression": string;
  /**
   * The platforms the Agent rule is supported on
  */
  "filters"?: Array<string>;
  /**
   * The monitoring policies that the rule belongs to
  */
  "monitoring"?: Array<string>;
  /**
   * The name of the Agent rule.
  */
  "name": string;
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
    "actions": {
      "baseName": "actions",
      "type": "Array<CloudWorkloadSecurityAgentRuleAction>",
    },
    "blocking": {
      "baseName": "blocking",
      "type": "Array<string>",
    },
    "description": {
      "baseName": "description",
      "type": "string",
    },
    "disabled": {
      "baseName": "disabled",
      "type": "Array<string>",
    },
    "enabled": {
      "baseName": "enabled",
      "type": "boolean",
    },
    "expression": {
      "baseName": "expression",
      "type": "string",
      "required": true,
    },
    "filters": {
      "baseName": "filters",
      "type": "Array<string>",
    },
    "monitoring": {
      "baseName": "monitoring",
      "type": "Array<string>",
    },
    "name": {
      "baseName": "name",
      "type": "string",
      "required": true,
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




    return CloudWorkloadSecurityAgentRuleCreateAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









