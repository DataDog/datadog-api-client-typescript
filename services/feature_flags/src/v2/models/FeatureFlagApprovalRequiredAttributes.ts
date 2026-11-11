import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FeatureFlagSuggestionMetadata } from "./FeatureFlagSuggestionMetadata";

/**
 * The change to submit for approval.
 */
export class FeatureFlagApprovalRequiredAttributes {
  /**
   * The proposed action.
   */
  "action": string;
  /**
   * The ID of the environment targeted by the change.
   */
  "environmentId"?: string;
  /**
   * The feature flag property to change.
   */
  "property": string;
  /**
   * The proposed value, serialized as a string. Allocation sets are JSON-encoded strings.
   */
  "suggestion": string;
  /**
   * Metadata associated with a suggestion. Fields other than `variant_id` are set by the server.
   */
  "suggestionMetadata"?: FeatureFlagSuggestionMetadata;
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
    action: {
      baseName: "action",
      type: "string",
      required: true,
    },
    environmentId: {
      baseName: "environment_id",
      type: "string",
      format: "uuid",
    },
    property: {
      baseName: "property",
      type: "string",
      required: true,
    },
    suggestion: {
      baseName: "suggestion",
      type: "string",
      required: true,
    },
    suggestionMetadata: {
      baseName: "suggestion_metadata",
      type: "FeatureFlagSuggestionMetadata",
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
    return FeatureFlagApprovalRequiredAttributes.attributeTypeMap;
  }

  public constructor() {}
}
