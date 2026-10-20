import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A saved filter authorization error containing at least one error message.
 */
export class SavedFilterAPIErrorResponse {
  /**
   * The authorization error messages.
   */
  "errors": Array<string>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    errors: {
      baseName: "errors",
      type: "Array<string>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SavedFilterAPIErrorResponse.attributeTypeMap;
  }

  public constructor() {}
}
