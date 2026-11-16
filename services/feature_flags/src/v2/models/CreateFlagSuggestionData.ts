import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateFlagSuggestionAttributes } from "./CreateFlagSuggestionAttributes";
import { FeatureFlagSuggestionDataType } from "./FeatureFlagSuggestionDataType";

/**
 * The suggestion to create.
 */
export class CreateFlagSuggestionData {
  /**
   * Attributes for creating a feature flag change suggestion.
   */
  "attributes": CreateFlagSuggestionAttributes;
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
      type: "CreateFlagSuggestionAttributes",
      required: true,
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
    return CreateFlagSuggestionData.attributeTypeMap;
  }

  public constructor() {}
}
