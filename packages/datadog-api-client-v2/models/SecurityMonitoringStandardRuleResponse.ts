/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringFilter } from "./SecurityMonitoringFilter";
import { SecurityMonitoringRuleCase } from "./SecurityMonitoringRuleCase";
import { SecurityMonitoringRuleOptions } from "./SecurityMonitoringRuleOptions";
import { SecurityMonitoringRuleTypeRead } from "./SecurityMonitoringRuleTypeRead";
import { SecurityMonitoringStandardRuleQuery } from "./SecurityMonitoringStandardRuleQuery";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Rule.
 */
export class SecurityMonitoringStandardRuleResponse {
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
  "unparsedObject"?: UnparsedObject;

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
      type: "Array<SecurityMonitoringStandardRuleQuery>",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringRuleTypeRead",
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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringStandardRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
