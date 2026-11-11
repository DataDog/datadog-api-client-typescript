import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FeatureFlagSuggestionMetadataRequest } from "./FeatureFlagSuggestionMetadataRequest";

/**
 * Attributes for creating a feature flag change suggestion.
 */
export class CreateFlagSuggestionAttributes {
  /**
   * The action proposed by the suggestion.
   */
  "action": string;
  /**
   * A comment explaining the proposed change.
   */
  "comment"?: string;
  /**
   * The ID of the target environment. Required for `ALLOCATIONS`, `DEFAULT_VARIANT`, and
   * `OVERRIDE_VARIANT` changes.
   */
  "environmentId"?: string;
  /**
   * Handles to notify about the review, without the `@` prefix. For example, an email address
   * or a Slack channel name.
   */
  "notificationRuleTargets": Array<string>;
  /**
   * The property to change. The property must require approval for this flag and environment.
   */
  "property": string;
  /**
   * The proposed value as a string. For structured values, supply a JSON-encoded string.
   */
  "suggestion"?: string;
  /**
   * Client-settable metadata for a suggestion.
   */
  "suggestionMetadata"?: FeatureFlagSuggestionMetadataRequest;
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
    comment: {
      baseName: "comment",
      type: "string",
    },
    environmentId: {
      baseName: "environment_id",
      type: "string",
      format: "uuid",
    },
    notificationRuleTargets: {
      baseName: "notification_rule_targets",
      type: "Array<string>",
      required: true,
    },
    property: {
      baseName: "property",
      type: "string",
      required: true,
    },
    suggestion: {
      baseName: "suggestion",
      type: "string",
    },
    suggestionMetadata: {
      baseName: "suggestion_metadata",
      type: "FeatureFlagSuggestionMetadataRequest",
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
    return CreateFlagSuggestionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
