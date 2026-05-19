import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FlagSuggestionEventDataType } from "./FlagSuggestionEventDataType";
import { ReviewFlagSuggestionAttributes } from "./ReviewFlagSuggestionAttributes";

/**
 * Data for reviewing a flag suggestion.
 */
export class ReviewFlagSuggestionData {
  /**
   * Attributes for reviewing a flag suggestion.
   */
  "attributes"?: ReviewFlagSuggestionAttributes;
  /**
   * Flag suggestion events resource type.
   */
  "type": FlagSuggestionEventDataType;
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
      type: "ReviewFlagSuggestionAttributes",
    },
    type: {
      baseName: "type",
      type: "FlagSuggestionEventDataType",
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
    return ReviewFlagSuggestionData.attributeTypeMap;
  }

  public constructor() {}
}
