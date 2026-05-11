import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FeatureFlagStatus } from "./FeatureFlagStatus";

/**
 * Environment-specific settings for a feature flag in list responses.
 */
export class FeatureFlagEnvironmentListItem {
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
   * Queries that target this environment.
   */
  "environmentQueries"?: Array<string>;
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
    environmentQueries: {
      baseName: "environment_queries",
      type: "Array<string>",
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
    return FeatureFlagEnvironmentListItem.attributeTypeMap;
  }

  public constructor() {}
}
