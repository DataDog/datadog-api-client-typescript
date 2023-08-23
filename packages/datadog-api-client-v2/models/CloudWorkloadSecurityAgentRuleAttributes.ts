/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudWorkloadSecurityAgentRuleCreatorAttributes } from "./CloudWorkloadSecurityAgentRuleCreatorAttributes";
import { CloudWorkloadSecurityAgentRuleUpdaterAttributes } from "./CloudWorkloadSecurityAgentRuleUpdaterAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A Cloud Workload Security Agent rule returned by the API.
 */
export class CloudWorkloadSecurityAgentRuleAttributes {
  /**
   * The version of the agent.
   */
  "agentConstraint"?: string;
  /**
   * The category of the Agent rule.
   */
  "category"?: string;
  /**
   * The ID of the user who created the rule.
   */
  "creationAuthorUuId"?: string;
  /**
   * When the Agent rule was created, timestamp in milliseconds.
   */
  "creationDate"?: number;
  /**
   * The attributes of the user who created the Agent rule.
   */
  "creator"?: CloudWorkloadSecurityAgentRuleCreatorAttributes;
  /**
   * Whether the rule is included by default.
   */
  "defaultRule"?: boolean;
  /**
   * The description of the Agent rule.
   */
  "description"?: string;
  /**
   * Whether the Agent rule is enabled.
   */
  "enabled"?: boolean;
  /**
   * The SECL expression of the Agent rule.
   */
  "expression"?: string;
  /**
   * The name of the Agent rule.
   */
  "name"?: string;
  /**
   * The ID of the user who updated the rule.
   */
  "updateAuthorUuId"?: string;
  /**
   * Timestamp in milliseconds when the Agent rule was last updated.
   */
  "updateDate"?: number;
  /**
   * When the Agent rule was last updated, timestamp in milliseconds.
   */
  "updatedAt"?: number;
  /**
   * The attributes of the user who last updated the Agent rule.
   */
  "updater"?: CloudWorkloadSecurityAgentRuleUpdaterAttributes;
  /**
   * The version of the Agent rule.
   */
  "version"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    agentConstraint: {
      type: "string",
    },
    category: {
      type: "string",
    },
    creationAuthorUuId: {
      type: "string",
    },
    creationDate: {
      type: "number",
      format: "int64",
    },
    creator: {
      type: "CloudWorkloadSecurityAgentRuleCreatorAttributes",
    },
    defaultRule: {
      type: "boolean",
    },
    description: {
      type: "string",
    },
    enabled: {
      type: "boolean",
    },
    expression: {
      type: "string",
    },
    name: {
      type: "string",
    },
    updateAuthorUuId: {
      type: "string",
    },
    updateDate: {
      type: "number",
      format: "int64",
    },
    updatedAt: {
      type: "number",
      format: "int64",
    },
    updater: {
      type: "CloudWorkloadSecurityAgentRuleUpdaterAttributes",
    },
    version: {
      type: "number",
      format: "int64",
    },
  };
}
