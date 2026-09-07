import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringFilter } from "./SecurityMonitoringFilter";
import { SecurityMonitoringRuleCase } from "./SecurityMonitoringRuleCase";
import { SecurityMonitoringRuleMetadata } from "./SecurityMonitoringRuleMetadata";
import { SecurityMonitoringRuleOptions } from "./SecurityMonitoringRuleOptions";
import { SecurityMonitoringRuleUser } from "./SecurityMonitoringRuleUser";
import { SecurityMonitoringSignalRuleResponseQuery } from "./SecurityMonitoringSignalRuleResponseQuery";
import { SecurityMonitoringSignalRuleType } from "./SecurityMonitoringSignalRuleType";

/**
 * Rule.
 */
export class SecurityMonitoringSignalRuleResponse {
  /**
   * Whether the rule blocks attackers.
   */
  "blocking"?: boolean;
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
   * The user who created or last updated the rule.
   */
  "creator"?: SecurityMonitoringRuleUser;
  /**
   * Custom/Overridden message for generated signals (used in case of Default rule update).
   */
  "customMessage"?: string;
  /**
   * Custom/Overridden name of the rule (used in case of Default rule update).
   */
  "customName"?: string;
  /**
   * The ID of the corresponding default rule.
   */
  "defaultRuleId"?: string;
  /**
   * Default tags for default rules, included in tags.
   */
  "defaultTags"?: Array<string>;
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
   * Whether the rule is in beta.
   */
  "isBeta"?: boolean;
  /**
   * Whether the rule is included by default.
   */
  "isDefault"?: boolean;
  /**
   * Whether the rule has been deleted.
   */
  "isDeleted"?: boolean;
  /**
   * Whether the rule is deprecated.
   */
  "isDeprecated"?: boolean;
  /**
   * Whether the rule is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Whether the rule is provided by a partner.
   */
  "isPartner"?: boolean;
  /**
   * Message for generated signals.
   */
  "message"?: string;
  /**
   * Metadata associated with the rule.
   */
  "metadata"?: SecurityMonitoringRuleMetadata;
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
   * The date the rule was last updated, in milliseconds.
   */
  "updatedAt"?: number;
  /**
   * The user who created or last updated the rule.
   */
  "updater"?: SecurityMonitoringRuleUser;
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
    blocking: {
      baseName: "blocking",
      type: "boolean",
    },
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
    creator: {
      baseName: "creator",
      type: "SecurityMonitoringRuleUser",
    },
    customMessage: {
      baseName: "customMessage",
      type: "string",
    },
    customName: {
      baseName: "customName",
      type: "string",
    },
    defaultRuleId: {
      baseName: "defaultRuleId",
      type: "string",
    },
    defaultTags: {
      baseName: "defaultTags",
      type: "Array<string>",
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
    isBeta: {
      baseName: "isBeta",
      type: "boolean",
    },
    isDefault: {
      baseName: "isDefault",
      type: "boolean",
    },
    isDeleted: {
      baseName: "isDeleted",
      type: "boolean",
    },
    isDeprecated: {
      baseName: "isDeprecated",
      type: "boolean",
    },
    isEnabled: {
      baseName: "isEnabled",
      type: "boolean",
    },
    isPartner: {
      baseName: "isPartner",
      type: "boolean",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    metadata: {
      baseName: "metadata",
      type: "SecurityMonitoringRuleMetadata",
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
    updatedAt: {
      baseName: "updatedAt",
      type: "number",
      format: "int64",
    },
    updater: {
      baseName: "updater",
      type: "SecurityMonitoringRuleUser",
    },
    version: {
      baseName: "version",
      type: "number",
      format: "int64",
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
    return SecurityMonitoringSignalRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
