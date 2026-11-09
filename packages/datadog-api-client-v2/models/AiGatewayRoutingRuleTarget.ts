/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayRoutingReasoningLevel } from "./AiGatewayRoutingReasoningLevel";
import { AiGatewayRoutingRuleTargetType } from "./AiGatewayRoutingRuleTargetType";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Model target or reference to another routing rule.
 */
export class AiGatewayRoutingRuleTarget {
  /**
   * True on the default destination of a classified tier. Omitted on other targets.
   */
  "_default"?: boolean;
  /**
   * Saved target row ID. On replacement, retain this ID only within its original route and at most once. A stale or foreign ID is rejected.
   */
  "id"?: Int64;
  /**
   * Model name or pattern. Omitted when the caller cannot view its provider.
   */
  "model"?: string;
  /**
   * Opaque model catalog ID for a concrete model target. New selections require provider View; saved selections can be retained without metadata.
   */
  "modelId"?: Int64;
  /**
   * Provider slug. Omitted for dynamic resolution and when the caller cannot view its provider.
   */
  "provider"?: string;
  /**
   * Optional reasoning effort preference for this model destination. Must be supported by the selected model and provider. For provider "*", every eligible provider must support the level. An explicit value overrides the request's reasoning setting, subject to model-group policy. Omitted or null preserves request and provider behavior; none is an explicit level, not the default. Omitted or null clears an override on full replacement. Routing-rule references cannot set this field; each referenced model destination owns its override. If an override cannot be applied at runtime, the gateway keeps the destination and restores the caller's original reasoning settings, or preserves the provider default when omitted. It rechecks all applicable route and model-group policies against those settings before sending. Model-group max_reasoning_level enforces hard limits; the override is not an additional cap. Normal fallback applies if governance denies the resulting request or the destination cannot otherwise serve it. Metrics and span tags record the override outcome and incompatibility reason. When response headers have not already been committed, `X-Ai-Gateway-Reasoning-Override` reports applied or not_applied for the returned attempt, and `X-Ai-Gateway-Reasoning-Override-Reason` reports the reason when not applied.
   */
  "reasoningLevel"?: AiGatewayRoutingReasoningLevel;
  /**
   * Describes when the decision model picks this destination. Returned only for destinations of classified tiers, not for the default.
   */
  "rubric"?: string;
  /**
   * Organization-unique resource slug.
   */
  "slug"?: string;
  /**
   * Type of routing target.
   */
  "type": AiGatewayRoutingRuleTargetType;
  /**
   * Effective relative weight. Returned only for targets in weighted_affinity tiers.
   */
  "weight"?: Int64;

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
    return AiGatewayRoutingRuleTarget.attributeTypeMap;
  }

  public constructor() {}
}
