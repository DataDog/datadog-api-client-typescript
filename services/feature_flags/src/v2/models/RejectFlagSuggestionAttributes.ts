import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Rejection options for the suggestion.
 */
export class RejectFlagSuggestionAttributes {
  /**
   * A comment explaining the rejection.
   */
  "comment"?: string;
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
    comment: {
      baseName: "comment",
      type: "string",
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
    return RejectFlagSuggestionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
