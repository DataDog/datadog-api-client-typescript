import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateFlagSuggestionData } from "./CreateFlagSuggestionData";

/**
 * Request to create a flag suggestion.
 */
export class CreateFlagSuggestionRequest {
  /**
   * Data for creating a flag suggestion.
   */
  "data": CreateFlagSuggestionData;
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
      type: "CreateFlagSuggestionData",
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
    return CreateFlagSuggestionRequest.attributeTypeMap;
  }

  public constructor() {}
}
