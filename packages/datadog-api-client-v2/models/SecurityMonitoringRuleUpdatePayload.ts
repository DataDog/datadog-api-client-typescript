/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudConfigurationRuleComplianceSignalOptions } from "./CloudConfigurationRuleComplianceSignalOptions";
import { SecurityMonitoringFilter } from "./SecurityMonitoringFilter";
import { SecurityMonitoringReferenceTable } from "./SecurityMonitoringReferenceTable";
import { SecurityMonitoringRuleCase } from "./SecurityMonitoringRuleCase";
import { SecurityMonitoringRuleOptions } from "./SecurityMonitoringRuleOptions";
import { SecurityMonitoringRuleQuery } from "./SecurityMonitoringRuleQuery";
import { SecurityMonitoringThirdPartyRuleCase } from "./SecurityMonitoringThirdPartyRuleCase";

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
   * Custom/Overridden Message for generated signals (used in case of Default rule update).
   */
  "customMessage"?: string;
  /**
   * Custom/Overridden name (used in case of Default rule update).
   */
  "customName"?: string;
  /**
   * Additional queries to filter matched events before they are processed. This field is deprecated for log detection, signal correlation, and workload security rules.
   */
  "filters"?: Array<SecurityMonitoringFilter>;
  /**
   * Additional grouping to perform on top of the existing groups in the query section. Must be a subset of the existing groups.
   */
  "groupSignalsBy"?: Array<string>;
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
   * Options.
   */
  "options"?: SecurityMonitoringRuleOptions;
  /**
   * Queries for selecting logs which are part of the rule.
   */
  "queries"?: Array<SecurityMonitoringRuleQuery>;
  /**
   * Reference tables for the rule.
   */
  "referenceTables"?: Array<SecurityMonitoringReferenceTable>;
  /**
   * Tags for generated signals.
   */
  "tags"?: Array<string>;
  /**
   * Cases for generating signals from third-party rules. Only available for third-party rules.
   */
  "thirdPartyCases"?: Array<SecurityMonitoringThirdPartyRuleCase>;
  /**
   * The version of the rule being updated.
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
    cases: {
      baseName: "cases",
      type: "Array<SecurityMonitoringRuleCase>",
    },
    complianceSignalOptions: {
      baseName: "complianceSignalOptions",
      type: "CloudConfigurationRuleComplianceSignalOptions",
    },
    customMessage: {
      baseName: "customMessage",
      type: "string",
    },
    customName: {
      baseName: "customName",
      type: "string",
    },
    filters: {
      baseName: "filters",
      type: "Array<SecurityMonitoringFilter>",
    },
    groupSignalsBy: {
      baseName: "groupSignalsBy",
      type: "Array<string>",
    },
    hasExtendedTitle: {
      baseName: "hasExtendedTitle",
      type: "boolean",
    },
    isEnabled: {
      baseName: "isEnabled",
      type: "boolean",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    options: {
      baseName: "options",
      type: "SecurityMonitoringRuleOptions",
    },
    queries: {
      baseName: "queries",
      type: "Array<SecurityMonitoringRuleQuery>",
    },
    referenceTables: {
      baseName: "referenceTables",
      type: "Array<SecurityMonitoringReferenceTable>",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    thirdPartyCases: {
      baseName: "thirdPartyCases",
      type: "Array<SecurityMonitoringThirdPartyRuleCase>",
    },
    version: {
      baseName: "version",
      type: "number",
      format: "int32",
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
    return SecurityMonitoringRuleUpdatePayload.attributeTypeMap;
  }

  public constructor() {}
}
