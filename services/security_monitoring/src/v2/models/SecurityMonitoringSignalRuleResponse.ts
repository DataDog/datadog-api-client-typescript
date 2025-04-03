import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringFilter } from "./SecurityMonitoringFilter";
import { SecurityMonitoringRuleCase } from "./SecurityMonitoringRuleCase";
import { SecurityMonitoringRuleOptions } from "./SecurityMonitoringRuleOptions";
import { SecurityMonitoringSignalRuleResponseQuery } from "./SecurityMonitoringSignalRuleResponseQuery";
import { SecurityMonitoringSignalRuleType } from "./SecurityMonitoringSignalRuleType";

/**
 * Rule.
 */
export class SecurityMonitoringSignalRuleResponse {
  /**
   * Cases for generating signals.
   */
  "cases"?: Array<SecurityMonitoringRuleCase>;
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
   * Additional queries to filter matched events before they are processed. This field is deprecated for log detection, signal correlation, and workload security rules.
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
   * Options.
   */
  "options"?: SecurityMonitoringRuleOptions;
  /**
   * Queries for selecting logs which are part of the rule.
   */
  "queries"?: Array<SecurityMonitoringSignalRuleResponseQuery>;
  /**
   * Tags for generated signals.
   */
  "tags"?: Array<string>;
  /**
   * The rule type.
   */
  "type"?: SecurityMonitoringSignalRuleType;
  /**
   * User ID of the user who updated the rule.
   */
  "updateAuthorId"?: number;
  /**
   * The version of the rule.
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
    createdAt: {
      baseName: "createdAt",
      type: "number",
      format: "int64",
    },
    creationAuthorId: {
      baseName: "creationAuthorId",
      type: "number",
      format: "int64",
    },
    deprecationDate: {
      baseName: "deprecationDate",
      type: "number",
      format: "int64",
    },
    filters: {
      baseName: "filters",
      type: "Array<SecurityMonitoringFilter>",
    },
    hasExtendedTitle: {
      baseName: "hasExtendedTitle",
      type: "boolean",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    isDefault: {
      baseName: "isDefault",
      type: "boolean",
    },
    isDeleted: {
      baseName: "isDeleted",
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
      type: "Array<SecurityMonitoringSignalRuleResponseQuery>",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringSignalRuleType",
    },
    updateAuthorId: {
      baseName: "updateAuthorId",
      type: "number",
      format: "int64",
    },
    version: {
      baseName: "version",
      type: "number",
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringSignalRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
