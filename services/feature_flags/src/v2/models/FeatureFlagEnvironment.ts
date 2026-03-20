import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FeatureFlagStatus } from "./FeatureFlagStatus";

/**
 * Environment-specific settings for a feature flag.
 */
export class FeatureFlagEnvironment {
  /**
   * Allocation metadata for this environment.
   */
  "allocations"?: { [key: string]: any };
  /**
   * The allocation key used for the default variant.
   */
  "defaultAllocationKey"?: string;
  /**
   * The ID of the default variant for this environment.
   */
  "defaultVariantId"?: string;
  /**
   * The ID of the environment.
   */
  "environmentId": string;
  /**
   * The name of the environment.
   */
  "environmentName"?: string;
  /**
   * Indicates whether the environment is production.
   */
  "isProduction"?: boolean;
  /**
   * The allocation key used for the override variant.
   */
  "overrideAllocationKey"?: string;
  /**
   * The ID of the override variant for this environment.
   */
  "overrideVariantId"?: string;
  /**
   * Pending suggestion identifier, if approval is required.
   */
  "pendingSuggestionId"?: string;
  /**
   * Indicates whether feature flag changes require approval in this environment.
   */
  "requireFeatureFlagApproval"?: boolean;
  /**
   * Rollout percentage for this environment.
   */
  "rolloutPercentage"?: number;
  /**
   * Environment targeting rules for this feature flag.
   */
  "rules"?: Array<{ [key: string]: any }>;
  /**
   * The status of a feature flag in an environment.
   */
  "status": FeatureFlagStatus;
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
    allocations: {
      baseName: "allocations",
      type: "{ [key: string]: any; }",
    },
    defaultAllocationKey: {
      baseName: "default_allocation_key",
      type: "string",
    },
    defaultVariantId: {
      baseName: "default_variant_id",
      type: "string",
    },
    environmentId: {
      baseName: "environment_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    environmentName: {
      baseName: "environment_name",
      type: "string",
    },
    isProduction: {
      baseName: "is_production",
      type: "boolean",
    },
    overrideAllocationKey: {
      baseName: "override_allocation_key",
      type: "string",
    },
    overrideVariantId: {
      baseName: "override_variant_id",
      type: "string",
    },
    pendingSuggestionId: {
      baseName: "pending_suggestion_id",
      type: "string",
    },
    requireFeatureFlagApproval: {
      baseName: "require_feature_flag_approval",
      type: "boolean",
    },
    rolloutPercentage: {
      baseName: "rollout_percentage",
      type: "number",
      format: "int64",
    },
    rules: {
      baseName: "rules",
      type: "Array<{ [key: string]: any; }>",
    },
    status: {
      baseName: "status",
      type: "FeatureFlagStatus",
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
    return FeatureFlagEnvironment.attributeTypeMap;
  }

  public constructor() {}
}
