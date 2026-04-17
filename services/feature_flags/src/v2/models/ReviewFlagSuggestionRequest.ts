import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReviewFlagSuggestionData } from "./ReviewFlagSuggestionData";

/**
 * Request to approve or reject a flag suggestion.
 */
export class ReviewFlagSuggestionRequest {
  /**
   * Data for reviewing a flag suggestion.
   */
  "data": ReviewFlagSuggestionData;
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
    data: {
      baseName: "data",
      type: "ReviewFlagSuggestionData",
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
    return ReviewFlagSuggestionRequest.attributeTypeMap;
  }

  public constructor() {}
}
