/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudConfigurationRuleComplianceSignalOptions } from "./CloudConfigurationRuleComplianceSignalOptions";
import { SecurityMonitoringFilter } from "./SecurityMonitoringFilter";
import { SecurityMonitoringRuleCase } from "./SecurityMonitoringRuleCase";
import { SecurityMonitoringRuleOptions } from "./SecurityMonitoringRuleOptions";
import { SecurityMonitoringRuleTypeRead } from "./SecurityMonitoringRuleTypeRead";
import { SecurityMonitoringStandardRuleQuery } from "./SecurityMonitoringStandardRuleQuery";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Rule.
 */
export class SecurityMonitoringStandardRuleResponse {
  /**
   * Cases for generating signals.
   */
  "cases"?: Array<SecurityMonitoringRuleCase>;
  /**
   * How to generate compliance signals. Useful for cloud_configuration rules only.
   */
  "complianceSignalOptions"?: CloudConfigurationRuleComplianceSignalOptions;
  /**
   * When the rule was created, timestamp in milliseconds.
   */
  "createdAt"?: number;
  /**
   * User ID of the user who created the rule.
   */
  "creationAuthorId"?: number;
  /**
   * When the rule will be deprecated, timestamp in milliseconds.
   */
  "deprecationDate"?: number;
  /**
   * Additional queries to filter matched events before they are processed.
   */
  "filters"?: Array<SecurityMonitoringFilter>;
  /**
   * Whether the notifications include the triggering group-by values in their title.
   */
  "hasExtendedTitle"?: boolean;
  /**
   * The ID of the rule.
   */
  "id"?: string;
  /**
   * Whether the rule is included by default.
   */
  "isDefault"?: boolean;
  /**
   * Whether the rule has been deleted.
   */
  "isDeleted"?: boolean;
  /**
   * Whether the rule is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Message for generated signals.
   */
  "message"?: string;
  /**
   * The name of the rule.
   */
  "name"?: string;
  /**
   * Options on rules.
   */
  "options"?: SecurityMonitoringRuleOptions;
  /**
   * Queries for selecting logs which are part of the rule.
   */
  "queries"?: Array<SecurityMonitoringStandardRuleQuery>;
  /**
   * Tags for generated signals.
   */
  "tags"?: Array<string>;
  /**
   * The rule type.
   */
  "type"?: SecurityMonitoringRuleTypeRead;
  /**
   * User ID of the user who updated the rule.
   */
  "updateAuthorId"?: number;
  /**
   * The version of the rule.
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
    cases: {
      type: "Array<SecurityMonitoringRuleCase>",
    },
    complianceSignalOptions: {
      type: "CloudConfigurationRuleComplianceSignalOptions",
    },
    createdAt: {
      type: "number",
      format: "int64",
    },
    creationAuthorId: {
      type: "number",
      format: "int64",
    },
    deprecationDate: {
      type: "number",
      format: "int64",
    },
    filters: {
      type: "Array<SecurityMonitoringFilter>",
    },
    hasExtendedTitle: {
      type: "boolean",
    },
    id: {
      type: "string",
    },
    isDefault: {
      type: "boolean",
    },
    isDeleted: {
      type: "boolean",
    },
    isEnabled: {
      type: "boolean",
    },
    message: {
      type: "string",
    },
    name: {
      type: "string",
    },
    options: {
      type: "SecurityMonitoringRuleOptions",
    },
    queries: {
      type: "Array<SecurityMonitoringStandardRuleQuery>",
    },
    tags: {
      type: "Array<string>",
    },
    type: {
      type: "SecurityMonitoringRuleTypeRead",
    },
    updateAuthorId: {
      type: "number",
      format: "int64",
    },
    version: {
      type: "number",
      format: "int64",
    },
  };
}
