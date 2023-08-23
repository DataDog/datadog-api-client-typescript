/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringFilter } from "./SecurityMonitoringFilter";
import { SecurityMonitoringRuleCaseCreate } from "./SecurityMonitoringRuleCaseCreate";
import { SecurityMonitoringRuleOptions } from "./SecurityMonitoringRuleOptions";
import { SecurityMonitoringRuleTypeCreate } from "./SecurityMonitoringRuleTypeCreate";
import { SecurityMonitoringStandardRuleQuery } from "./SecurityMonitoringStandardRuleQuery";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Create a new rule.
 */
export class SecurityMonitoringStandardRuleCreatePayload {
  /**
   * Cases for generating signals.
   */
  "cases": Array<SecurityMonitoringRuleCaseCreate>;
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
  "isEnabled": boolean;
  /**
   * Message for generated signals.
   */
  "message": string;
  /**
   * The name of the rule.
   */
  "name": string;
  /**
   * Options on rules.
   */
  "options": SecurityMonitoringRuleOptions;
  /**
   * Queries for selecting logs which are part of the rule.
   */
  "queries": Array<SecurityMonitoringStandardRuleQuery>;
  /**
   * Tags for generated signals.
   */
  "tags"?: Array<string>;
  /**
   * The rule type.
   */
  "type"?: SecurityMonitoringRuleTypeCreate;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    cases: {
      type: "Array<SecurityMonitoringRuleCaseCreate>",
      required: true,
    },
    filters: {
      type: "Array<SecurityMonitoringFilter>",
    },
    hasExtendedTitle: {
      type: "boolean",
    },
    isEnabled: {
      type: "boolean",
      required: true,
    },
    message: {
      type: "string",
      required: true,
    },
    name: {
      type: "string",
      required: true,
    },
    options: {
      type: "SecurityMonitoringRuleOptions",
      required: true,
    },
    queries: {
      type: "Array<SecurityMonitoringStandardRuleQuery>",
      required: true,
    },
    tags: {
      type: "Array<string>",
    },
    type: {
      type: "SecurityMonitoringRuleTypeCreate",
    },
  };
}
