/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudWorkloadSecurityAgentPolicyUpdaterAttributes } from "./CloudWorkloadSecurityAgentPolicyUpdaterAttributes";
import { CloudWorkloadSecurityAgentPolicyVersion } from "./CloudWorkloadSecurityAgentPolicyVersion";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A Cloud Workload Security Agent policy returned by the API
 */
export class CloudWorkloadSecurityAgentPolicyAttributes {
  /**
   * The number of rules with the blocking feature in this policy
   */
  "blockingRulesCount"?: number;
  /**
   * Whether the policy is managed by Datadog
   */
  "datadogManaged"?: boolean;
  /**
   * The description of the policy
   */
  "description"?: string;
  /**
   * The number of rules that are disabled in this policy
   */
  "disabledRulesCount"?: number;
  /**
   * Whether the Agent policy is enabled
   */
  "enabled"?: boolean;
  /**
   * The host tags defining where this policy is deployed
   */
  "hostTags"?: Array<string>;
  /**
   * The host tags defining where this policy is deployed, the inner values are linked with AND, the outer values are linked with OR
   */
  "hostTagsLists"?: Array<Array<string>>;
  /**
   * The number of rules in the monitoring state in this policy
   */
  "monitoringRulesCount"?: number;
  /**
   * The name of the policy
   */
  "name"?: string;
  /**
   * Whether the policy is pinned
   */
  "pinned"?: boolean;
  /**
   * The version of the policy
   */
  "policyVersion"?: string;
  /**
   * The priority of the policy
   */
  "priority"?: number;
  /**
   * The number of rules in this policy
   */
  "ruleCount"?: number;
  /**
   * Timestamp in milliseconds when the policy was last updated
   */
  "updateDate"?: number;
  /**
   * When the policy was last updated, timestamp in milliseconds
   */
  "updatedAt"?: number;
  /**
   * The attributes of the user who last updated the policy
   */
  "updater"?: CloudWorkloadSecurityAgentPolicyUpdaterAttributes;
  /**
   * The versions of the policy
   */
  "versions"?: Array<CloudWorkloadSecurityAgentPolicyVersion>;

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
    blockingRulesCount: {
      baseName: "blockingRulesCount",
      type: "number",
      format: "int32",
    },
    datadogManaged: {
      baseName: "datadogManaged",
      type: "boolean",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    disabledRulesCount: {
      baseName: "disabledRulesCount",
      type: "number",
      format: "int32",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    hostTags: {
      baseName: "hostTags",
      type: "Array<string>",
    },
    hostTagsLists: {
      baseName: "hostTagsLists",
      type: "Array<Array<string>>",
    },
    monitoringRulesCount: {
      baseName: "monitoringRulesCount",
      type: "number",
      format: "int32",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    pinned: {
      baseName: "pinned",
      type: "boolean",
    },
    policyVersion: {
      baseName: "policyVersion",
      type: "string",
    },
    priority: {
      baseName: "priority",
      type: "number",
      format: "int64",
    },
    ruleCount: {
      baseName: "ruleCount",
      type: "number",
      format: "int32",
    },
    updateDate: {
      baseName: "updateDate",
      type: "number",
      format: "int64",
    },
    updatedAt: {
      baseName: "updatedAt",
      type: "number",
      format: "int64",
    },
    updater: {
      baseName: "updater",
      type: "CloudWorkloadSecurityAgentPolicyUpdaterAttributes",
    },
    versions: {
      baseName: "versions",
      type: "Array<CloudWorkloadSecurityAgentPolicyVersion>",
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
    return CloudWorkloadSecurityAgentPolicyAttributes.attributeTypeMap;
  }

  public constructor() {}
}
