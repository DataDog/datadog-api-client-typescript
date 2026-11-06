import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * API error response.
 */
export class RumManagedArchiveErrorResponse {
  /**
   * Errors as plain-text messages or JSON:API error objects containing status, title, and detail.
   */
  "errors": Array<any>;
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
    errors: {
      baseName: "errors",
      type: "Array<any>",
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
    return RumManagedArchiveErrorResponse.attributeTypeMap;
  }

  public constructor() {}
}
