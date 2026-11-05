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
 * AI Gateway budget configuration and metadata.
 */
export class AiGatewayBudgetAttributes {
  /**
   * Budget capacity in microcents.
   */
  "capacityMicrocents": Int64;
  /**
   * Time when the resource was created.
   */
  "createdAt": Date;
  /**
   * Identifier of the principal that created the resource.
   */
  "createdBy": string;
  /**
   * Whether the resource is enabled.
   */
  "enabled": boolean;
  /**
   * Action taken when spend exceeds the budget.
   */
  "enforcement": AiGatewayBudgetEnforcement;
  /**
   * Datadog monitor ID provisioned for this budget. Null when monitor provisioning was skipped or failed.
   */
  "monitorId": Int64 | null;
  /**
   * Human-readable resource name.
   */
  "name": string;
  /**
   * Whether provider or model scope metadata was withheld. Omit unchanged scope fields on an unrelated update to preserve their saved values.
   */
  "scopeRestricted": boolean;
  /**
   * Dimension rules for a template budget. A nonempty selector creates independent counters for matched instances. Omit or pass an empty selector for a legacy fixed-scope budget.
   */
  "selector"?: Array<AiGatewayBudgetSelectorEntry>;
  /**
   * Request tags that must match for the budget to apply.
   */
  "tags": { [key: string]: string };
  /**
   * Optional Datadog Team scope.
   */
  "teamId"?: string;
  /**
   * Time when the resource was last updated.
   */
  "updatedAt": Date;
  /**
   * User scope. Omitted when the budget is not user-scoped.
   */
  "userId"?: string;
  /**
   * Fraction of capacity at which to issue a warning.
   */
  "warningThreshold": number;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
      required: true,
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    enforcement: {
      baseName: "enforcement",
      type: "AiGatewayBudgetEnforcement",
      required: true,
    },
    monitorId: {
      baseName: "monitor_id",
      type: "number",
      required: true,
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    scopeRestricted: {
      baseName: "scope_restricted",
      type: "boolean",
      required: true,
    },
    selector: {
      baseName: "selector",
      type: "Array<AiGatewayBudgetSelectorEntry>",
    },
    tags: {
      baseName: "tags",
      type: "{ [key: string]: string; }",
      required: true,
    },
    teamId: {
      baseName: "team_id",
      type: "string",
      format: "uuid",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    userId: {
      baseName: "user_id",
      type: "string",
      format: "uuid",
    },
    warningThreshold: {
      baseName: "warning_threshold",
      type: "number",
      required: true,
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
    return AiGatewayBudgetAttributes.attributeTypeMap;
  }

  public constructor() {}
}
