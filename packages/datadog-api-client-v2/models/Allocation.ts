/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AllocationExposureSchedule } from "./AllocationExposureSchedule";
import { AllocationType } from "./AllocationType";
import { GuardrailMetric } from "./GuardrailMetric";
import { TargetingRule } from "./TargetingRule";
import { VariantWeight } from "./VariantWeight";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Targeting rule (allocation) details for a feature flag environment.
 */
export class Allocation {
  /**
   * The timestamp when the targeting rule allocation was created.
   */
  "createdAt": Date;
  /**
   * Environment IDs associated with this targeting rule allocation.
   */
  "environmentIds": Array<string>;
  /**
   * The experiment ID linked to this targeting rule allocation.
   */
  "experimentId"?: string;
  /**
   * Progressive release details for a targeting rule allocation.
   */
  "exposureSchedule"?: AllocationExposureSchedule;
  /**
   * Guardrail metrics associated with this targeting rule allocation.
   */
  "guardrailMetrics": Array<GuardrailMetric>;
  /**
   * The unique identifier of the targeting rule allocation.
   */
  "id"?: string;
  /**
   * The unique key of the targeting rule allocation.
   */
  "key": string;
  /**
   * The display name of the targeting rule.
   */
  "name": string;
  /**
   * Sort order position within the environment.
   */
  "orderPosition": number;
  /**
   * Conditions associated with this targeting rule allocation.
   */
  "targetingRules": Array<TargetingRule>;
  /**
   * The type of targeting rule (called allocation in the API model).
   */
  "type": AllocationType;
  /**
   * The timestamp when the targeting rule allocation was last updated.
   */
  "updatedAt": Date;
  /**
   * Weighted variant assignments for this targeting rule allocation.
   */
  "variantWeights": Array<VariantWeight>;

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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    environmentIds: {
      baseName: "environment_ids",
      type: "Array<string>",
      required: true,
    },
    experimentId: {
      baseName: "experiment_id",
      type: "string",
    },
    exposureSchedule: {
      baseName: "exposure_schedule",
      type: "AllocationExposureSchedule",
    },
    guardrailMetrics: {
      baseName: "guardrail_metrics",
      type: "Array<GuardrailMetric>",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    key: {
      baseName: "key",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    orderPosition: {
      baseName: "order_position",
      type: "number",
      required: true,
      format: "int64",
    },
    targetingRules: {
      baseName: "targeting_rules",
      type: "Array<TargetingRule>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AllocationType",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    variantWeights: {
      baseName: "variant_weights",
      type: "Array<VariantWeight>",
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
    return Allocation.attributeTypeMap;
  }

  public constructor() {}
}
