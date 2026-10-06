import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A request error returned by the CI logs intake API.
 */
export class CILogIntakeError {
  /**
   * Error details.
   */
  "detail"?: string;
  /**
   * HTTP status code.
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
    return CILogIntakeError.attributeTypeMap;
  }

  public constructor() {}
}
