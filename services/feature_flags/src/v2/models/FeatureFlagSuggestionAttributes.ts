import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FeatureFlagSuggestionAttributesCurrentStatus } from "./FeatureFlagSuggestionAttributesCurrentStatus";
import { FeatureFlagSuggestionAttributesLifecycleStatus } from "./FeatureFlagSuggestionAttributesLifecycleStatus";
import { FeatureFlagSuggestionMetadata } from "./FeatureFlagSuggestionMetadata";

/**
 * Attributes of a feature flag change suggestion.
 */
export class FeatureFlagSuggestionAttributes {
  /**
   * The action proposed by the suggestion.
   */
  "action": string;
  /**
   * The ID of the flag history entry on which the suggestion is based.
   */
  "baseFlagHistoryId": string;
  /**
   * The comment supplied by the suggestion's creator.
   */
  "comment"?: string;
  /**
   * The timestamp when the suggestion was created.
   */
  "createdAt": Date;
  /**
   * The ID of the user who created the suggestion.
   */
  "createdBy": string;
  /**
   * The legacy review status. Use `lifecycle_status` to distinguish approval from application.
   */
  "currentStatus": FeatureFlagSuggestionAttributesCurrentStatus;
  /**
   * The value before the proposed change, serialized as a string.
   */
  "currentValue": string;
  /**
   * The timestamp when the suggestion was deleted.
   */
  "deletedAt"?: Date;
  /**
   * The ID of the user who deleted the suggestion.
   */
  "deletedBy"?: string;
  /**
   * The ID of the environment targeted by the change, if the change is environment-specific.
   */
  "environmentId"?: string;
  /**
   * The ID of the feature flag that the suggestion changes.
   */
  "featureFlagId": string;
  /**
   * The lifecycle status of the suggestion.
   */
  "lifecycleStatus": FeatureFlagSuggestionAttributesLifecycleStatus;
  /**
   * A message explaining why a suggestion was created.
   */
  "message"?: string;
  /**
   * The feature flag property to update.
   */
  "property": string;
  /**
   * The proposed value, serialized as a string. Structured values, such as variants and allocations,
   * are JSON-encoded strings.
   */
  "suggestion": string;
  /**
   * Metadata associated with a suggestion. Fields other than `variant_id` are set by the server.
   */
  "suggestionMetadata"?: FeatureFlagSuggestionMetadata;
  /**
   * The timestamp when the suggestion was last updated.
   */
  "updatedAt"?: Date;
  /**
   * The ID of the user who last updated the suggestion.
   */
  "updatedBy"?: string;
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
    baseFlagHistoryId: {
      baseName: "base_flag_history_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    comment: {
      baseName: "comment",
      type: "string",
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
      format: "uuid",
    },
    currentStatus: {
      baseName: "current_status",
      type: "FeatureFlagSuggestionAttributesCurrentStatus",
      required: true,
    },
    currentValue: {
      baseName: "current_value",
      type: "string",
      required: true,
    },
    deletedAt: {
      baseName: "deleted_at",
      type: "Date",
      format: "date-time",
    },
    deletedBy: {
      baseName: "deleted_by",
      type: "string",
      format: "uuid",
    },
    environmentId: {
      baseName: "environment_id",
      type: "string",
      format: "uuid",
    },
    featureFlagId: {
      baseName: "feature_flag_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    lifecycleStatus: {
      baseName: "lifecycle_status",
      type: "FeatureFlagSuggestionAttributesLifecycleStatus",
      required: true,
    },
    message: {
      baseName: "message",
      type: "string",
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
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
    },
    updatedBy: {
      baseName: "updated_by",
      type: "string",
      format: "uuid",
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
    return FeatureFlagSuggestionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
