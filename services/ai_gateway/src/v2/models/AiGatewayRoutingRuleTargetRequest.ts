import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayRoutingReasoningLevel } from "./AiGatewayRoutingReasoningLevel";
import { AiGatewayRoutingRuleTargetType } from "./AiGatewayRoutingRuleTargetType";

/**
 * Model target or reference to another routing rule used to create or replace a rule.
 */
export class AiGatewayRoutingRuleTargetRequest {
  /**
   * Marks the default destination of a classified tier. A classified tier has exactly one default, and the default has no rubric. It receives requests that no rubric fits, requests the decision model cannot place, and picks below the confidence threshold. Must be omitted, null, or false in other tiers.
   */
  "_default"?: boolean;
  /**
   * Saved target row ID. On replacement, retain this ID only within its original route and at most once. A stale or foreign ID is rejected.
   */
  "id"?: number;
  /**
   * Model name. Omit when retaining a saved target by ID or selecting a concrete target by model_id.
   */
  "model"?: string;
  /**
   * Opaque model catalog ID for a concrete model target. New selections require provider View; saved selections can be retained without metadata.
   */
  "modelId"?: number;
  /**
   * Provider slug. weighted_affinity and classified tiers require an explicit provider and do not allow "*".
   */
  "provider"?: string;
  /**
   * Optional reasoning effort preference for this model destination. Must be supported by the selected model and provider. For provider "*", every eligible provider must support the level. An explicit value overrides the request's reasoning setting, subject to model-group policy. Omitted or null preserves request and provider behavior; none is an explicit level, not the default. Omitted or null clears an override on full replacement. Routing-rule references cannot set this field; each referenced model destination owns its override. If an override cannot be applied at runtime, the gateway keeps the destination and restores the caller's original reasoning settings, or preserves the provider default when omitted. It rechecks all applicable route and model-group policies against those settings before sending. Model-group max_reasoning_level enforces hard limits; the override is not an additional cap. Normal fallback applies if governance denies the resulting request or the destination cannot otherwise serve it. Metrics and span tags record the override outcome and incompatibility reason. When response headers have not already been committed, `X-Ai-Gateway-Reasoning-Override` reports applied or not_applied for the returned attempt, and `X-Ai-Gateway-Reasoning-Override-Reason` reports the reason when not applied.
   */
  "reasoningLevel"?: AiGatewayRoutingReasoningLevel;
  /**
   * Describes when the decision model picks this destination, in up to 300 characters. Required on every destination of a classified tier except the default, and different for each destination in the tier. Leading and trailing spaces are trimmed. Must be omitted or null on the default destination and in other tiers.
   */
  "rubric"?: string;
  /**
   * Organization-unique routing rule slug. Allowed only in configured tiers.
   */
  "slug"?: string;
  /**
   * Type of routing target.
   */
  "type": AiGatewayRoutingRuleTargetType;
  /**
   * Relative weight in a weighted_affinity tier. Omitted or null defaults to 1. Weights need not total 100. Must be omitted or null in configured and classified tiers.
   */
  "weight"?: number;
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
    _default: {
      baseName: "default",
      type: "boolean",
    },
    id: {
      baseName: "id",
      type: "number",
      format: "int64",
    },
    model: {
      baseName: "model",
      type: "string",
    },
    modelId: {
      baseName: "model_id",
      type: "number",
      format: "int64",
    },
    provider: {
      baseName: "provider",
      type: "string",
    },
    reasoningLevel: {
      baseName: "reasoning_level",
      type: "AiGatewayRoutingReasoningLevel",
    },
    rubric: {
      baseName: "rubric",
      type: "string",
    },
    slug: {
      baseName: "slug",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "AiGatewayRoutingRuleTargetType",
      required: true,
    },
    weight: {
      baseName: "weight",
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
    return AiGatewayRoutingRuleTargetRequest.attributeTypeMap;
  }

  public constructor() {}
}
