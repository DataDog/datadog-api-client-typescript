import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AllocationType } from "./AllocationType";
import { ExposureScheduleRequest } from "./ExposureScheduleRequest";
import { GuardrailMetricRequest } from "./GuardrailMetricRequest";
import { TargetingRuleRequest } from "./TargetingRuleRequest";
import { VariantWeightRequest } from "./VariantWeightRequest";

/**
 * Request to create or update a targeting rule (allocation) for a feature flag environment.
 */
export class UpsertAllocationRequest {
  /**
   * The experiment ID for experiment-linked allocations.
   */
  "experimentId"?: string;
  /**
   * Progressive release request payload.
   */
  "exposureSchedule"?: ExposureScheduleRequest;
  /**
   * Guardrail metrics used to monitor and auto-pause or abort.
   */
  "guardrailMetrics"?: Array<GuardrailMetricRequest>;
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
   * Targeting rules that determine audience eligibility.
   */
  "targetingRules"?: Array<TargetingRuleRequest>;
  /**
   * The type of targeting rule (called allocation in the API model).
   */
  "type": AllocationType;
  /**
   * Variant distribution weights.
   */
  "variantWeights"?: Array<VariantWeightRequest>;
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
    experimentId: {
      baseName: "experiment_id",
      type: "string",
    },
    exposureSchedule: {
      baseName: "exposure_schedule",
      type: "ExposureScheduleRequest",
    },
    guardrailMetrics: {
      baseName: "guardrail_metrics",
      type: "Array<GuardrailMetricRequest>",
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
    targetingRules: {
      baseName: "targeting_rules",
      type: "Array<TargetingRuleRequest>",
    },
    type: {
      baseName: "type",
      type: "AllocationType",
      required: true,
    },
    variantWeights: {
      baseName: "variant_weights",
      type: "Array<VariantWeightRequest>",
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
    return UpsertAllocationRequest.attributeTypeMap;
  }

  public constructor() {}
}
