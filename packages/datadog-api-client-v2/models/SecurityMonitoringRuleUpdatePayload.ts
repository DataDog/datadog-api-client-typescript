/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudConfigurationRuleComplianceSignalOptions } from "./CloudConfigurationRuleComplianceSignalOptions";
import { SecurityMonitoringFilter } from "./SecurityMonitoringFilter";
import { SecurityMonitoringRuleCase } from "./SecurityMonitoringRuleCase";
import { SecurityMonitoringRuleOptions } from "./SecurityMonitoringRuleOptions";
import { SecurityMonitoringRuleQuery } from "./SecurityMonitoringRuleQuery";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Update an existing rule.
 */
export class SecurityMonitoringRuleUpdatePayload {
  /**
   * Cases for generating signals.
   */
  "cases"?: Array<SecurityMonitoringRuleCase>;
  /**
   * How to generate compliance signals. Useful for cloud_configuration rules only.
   */
  "complianceSignalOptions"?: CloudConfigurationRuleComplianceSignalOptions;
  /**
   * Additional queries to filter matched events before they are processed.
   */
  "filters"?: Array<SecurityMonitoringFilter>;
  /**
   * Whether the notifications include the triggering group-by values in their title.
   */
  "hasExtendedTitle"?: boolean;
  /**
   * Whether the rule is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Message for generated signals.
   */
  "message"?: string;
  /**
   * Name of the rule.
   */
  "name"?: string;
  /**
   * Options on rules.
   */
  "options"?: SecurityMonitoringRuleOptions;
  /**
   * Queries for selecting logs which are part of the rule.
   */
  "queries"?: Array<SecurityMonitoringRuleQuery>;
  /**
   * Tags for generated signals.
   */
  "tags"?: Array<string>;
  /**
   * The version of the rule being updated.
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
    filters: {
      type: "Array<SecurityMonitoringFilter>",
    },
    hasExtendedTitle: {
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
      type: "Array<SecurityMonitoringRuleQuery>",
    },
    tags: {
      type: "Array<string>",
    },
    version: {
      type: "number",
      format: "int32",
    },
  };
}
