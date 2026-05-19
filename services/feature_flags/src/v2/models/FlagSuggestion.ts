import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FlagSuggestionAttributes } from "./FlagSuggestionAttributes";
import { FlagSuggestionDataType } from "./FlagSuggestionDataType";

/**
 * A flag change suggestion.
 */
export class FlagSuggestion {
  /**
   * Attributes of a flag suggestion.
   */
  "attributes": FlagSuggestionAttributes;
  /**
   * Unique identifier for the suggestion.
   */
  "id": string;
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
      type: "FlagSuggestionAttributes",
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
    return FlagSuggestion.attributeTypeMap;
  }

  public constructor() {}
}
