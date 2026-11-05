/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayBudgetEnforcement } from "./AiGatewayBudgetEnforcement";
import { AiGatewayBudgetSelectorEntry } from "./AiGatewayBudgetSelectorEntry";
import { AiGatewayBudgetWindowPolicy } from "./AiGatewayBudgetWindowPolicy";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Attributes used to create an AI Gateway budget.
 */
export class AiGatewayBudgetCreateAttributes {
  /**
   * Budget capacity in microcents.
   */
  "capacityMicrocents": Int64;
  /**
   * Action taken when spend exceeds the budget.
   */
  "enforcement": AiGatewayBudgetEnforcement;
  /**
   * Human-readable resource name.
   */
  "name": string;
  /**
   * Dimension rules for a template budget. A nonempty selector creates independent counters for matched instances. Omit or pass an empty selector for a legacy fixed-scope budget.
   */
  "selector"?: Array<AiGatewayBudgetSelectorEntry>;
  /**
   * Request tags that must match for the budget to apply.
   */
  "tags"?: { [key: string]: string };
  /**
   * Optional Datadog Team scope.
   */
  "teamId"?: string;
  /**
   * Initialize current-period spend from historical priced LLM Observability spans. Defaults to false. Unsupported for template budgets; failures can be retried with an update.
   */
  "trackExisting"?: boolean;
  /**
   * Optional user scope.
   */
  "userId"?: string;
  /**
   * Fraction of capacity at which to issue a warning.
   */
  "warningThreshold"?: number;
  /**
   * UTC accounting period for a budget.
   */
  "windowPolicy": AiGatewayBudgetWindowPolicy;

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
    capacityMicrocents: {
      baseName: "capacity_microcents",
      type: "number",
      required: true,
      format: "int64",
    },
    enforcement: {
      baseName: "enforcement",
      type: "AiGatewayBudgetEnforcement",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    selector: {
      baseName: "selector",
      type: "Array<AiGatewayBudgetSelectorEntry>",
    },
    tags: {
      baseName: "tags",
      type: "{ [key: string]: string; }",
    },
    teamId: {
      baseName: "team_id",
      type: "string",
      format: "uuid",
    },
    trackExisting: {
      baseName: "track_existing",
      type: "boolean",
    },
    userId: {
      baseName: "user_id",
      type: "string",
      format: "uuid",
    },
    warningThreshold: {
      baseName: "warning_threshold",
      type: "number",
      format: "double",
    },
    windowPolicy: {
      baseName: "window_policy",
      type: "AiGatewayBudgetWindowPolicy",
      required: true,
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
    return AiGatewayBudgetCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
