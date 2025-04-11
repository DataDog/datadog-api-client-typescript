import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * List of errors.
 */
export class HTTPLogError {
  /**
   * Error message.
   */
  "detail"?: string;
  /**
   * Error code.
   */
  "status"?: string;
  /**
   * Error title.
   */
  "title"?: string;
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
    detail: {
      baseName: "detail",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    title: {
      baseName: "title",
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
    return HTTPLogError.attributeTypeMap;
  }

  public constructor() {}
}
