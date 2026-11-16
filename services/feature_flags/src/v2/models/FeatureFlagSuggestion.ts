import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FeatureFlagSuggestionAttributes } from "./FeatureFlagSuggestionAttributes";
import { FeatureFlagSuggestionDataType } from "./FeatureFlagSuggestionDataType";

/**
 * A proposed feature flag change and its approval lifecycle.
 */
export class FeatureFlagSuggestion {
  /**
   * Attributes of a feature flag change suggestion.
   */
  "attributes": FeatureFlagSuggestionAttributes;
  /**
   * The unique identifier of the suggestion.
   */
  "id": string;
  /**
   * The resource type for feature flag suggestions.
   */
  "type": FeatureFlagSuggestionDataType;
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
    attributes: {
      baseName: "attributes",
      type: "FeatureFlagSuggestionAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "FeatureFlagSuggestionDataType",
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
    return FeatureFlagSuggestion.attributeTypeMap;
  }

  public constructor() {}
}
