import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FlagSuggestion } from "./FlagSuggestion";

/**
 * Response containing a flag suggestion.
 */
export class FlagSuggestionResponse {
  /**
   * A flag change suggestion.
   */
  "data": FlagSuggestion;
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
      type: "FlagSuggestion",
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
    return FlagSuggestionResponse.attributeTypeMap;
  }

  public constructor() {}
}
