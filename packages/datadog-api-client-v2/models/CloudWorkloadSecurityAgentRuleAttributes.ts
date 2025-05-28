/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudWorkloadSecurityAgentRuleAction } from "./CloudWorkloadSecurityAgentRuleAction";
import { CloudWorkloadSecurityAgentRuleCreatorAttributes } from "./CloudWorkloadSecurityAgentRuleCreatorAttributes";
import { CloudWorkloadSecurityAgentRuleUpdaterAttributes } from "./CloudWorkloadSecurityAgentRuleUpdaterAttributes";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A Cloud Workload Security Agent rule returned by the API
*/
export class CloudWorkloadSecurityAgentRuleAttributes {
  /**
   * The array of actions the rule can perform if triggered
  */
  "actions"?: Array<CloudWorkloadSecurityAgentRuleAction>;
  /**
   * The version of the Agent
  */
  "agentConstraint"?: string;
  /**
   * The category of the Agent rule
  */
  "category"?: string;
  /**
   * The ID of the user who created the rule
  */
  "creationAuthorUuId"?: string;
  /**
   * When the Agent rule was created, timestamp in milliseconds
  */
  "creationDate"?: number;
  /**
   * The attributes of the user who created the Agent rule
  */
  "creator"?: CloudWorkloadSecurityAgentRuleCreatorAttributes;
  /**
   * Whether the rule is included by default
  */
  "defaultRule"?: boolean;
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
   * The platforms the Agent rule is supported on
  */
  "filters"?: Array<string>;
  /**
   * The name of the Agent rule
  */
  "name"?: string;
  /**
   * The list of product tags associated with the rule
  */
  "productTags"?: Array<string>;
  /**
   * The ID of the user who updated the rule
  */
  "updateAuthorUuId"?: string;
  /**
   * Timestamp in milliseconds when the Agent rule was last updated
  */
  "updateDate"?: number;
  /**
   * When the Agent rule was last updated, timestamp in milliseconds
  */
  "updatedAt"?: number;
  /**
   * The attributes of the user who last updated the Agent rule
  */
  "updater"?: CloudWorkloadSecurityAgentRuleUpdaterAttributes;
  /**
   * The version of the Agent rule
  */
  "version"?: number;

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
    "agentConstraint": {
      "baseName": "agentConstraint",
      "type": "string",
    },
    "category": {
      "baseName": "category",
      "type": "string",
    },
    "creationAuthorUuId": {
      "baseName": "creationAuthorUuId",
      "type": "string",
    },
    "creationDate": {
      "baseName": "creationDate",
      "type": "number",
      "format": "int64",
    },
    "creator": {
      "baseName": "creator",
      "type": "CloudWorkloadSecurityAgentRuleCreatorAttributes",
    },
    "defaultRule": {
      "baseName": "defaultRule",
      "type": "boolean",
    },
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
    "filters": {
      "baseName": "filters",
      "type": "Array<string>",
    },
    "name": {
      "baseName": "name",
      "type": "string",
    },
    "productTags": {
      "baseName": "product_tags",
      "type": "Array<string>",
    },
    "updateAuthorUuId": {
      "baseName": "updateAuthorUuId",
      "type": "string",
    },
    "updateDate": {
      "baseName": "updateDate",
      "type": "number",
      "format": "int64",
    },
    "updatedAt": {
      "baseName": "updatedAt",
      "type": "number",
      "format": "int64",
    },
    "updater": {
      "baseName": "updater",
      "type": "CloudWorkloadSecurityAgentRuleUpdaterAttributes",
    },
    "version": {
      "baseName": "version",
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




    return CloudWorkloadSecurityAgentRuleAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









