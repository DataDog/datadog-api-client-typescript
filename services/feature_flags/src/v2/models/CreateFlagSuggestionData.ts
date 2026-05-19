import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateFlagSuggestionAttributes } from "./CreateFlagSuggestionAttributes";
import { FlagSuggestionDataType } from "./FlagSuggestionDataType";

/**
 * Data for creating a flag suggestion.
 */
export class CreateFlagSuggestionData {
  /**
   * Attributes for creating a flag suggestion.
   */
  "attributes": CreateFlagSuggestionAttributes;
  /**
   * Flag suggestions resource type.
   */
  "type": FlagSuggestionDataType;
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
      type: "FlagSuggestionDataType",
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
