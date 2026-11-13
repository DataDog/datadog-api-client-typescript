import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RejectFlagSuggestionAttributes } from "./RejectFlagSuggestionAttributes";
import { ReviewFlagSuggestionDataType } from "./ReviewFlagSuggestionDataType";

/**
 * The rejection event to create.
 */
export class RejectFlagSuggestionData {
  /**
   * Rejection options for the suggestion.
   */
  "attributes": RejectFlagSuggestionAttributes;
  /**
   * The resource type for reviewing feature flag suggestions.
   */
  "type": ReviewFlagSuggestionDataType;
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
      type: "RejectFlagSuggestionAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ReviewFlagSuggestionDataType",
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
    return RejectFlagSuggestionData.attributeTypeMap;
  }

  public constructor() {}
}
