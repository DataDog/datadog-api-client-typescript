import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A redirect hop encountered while performing the request.
 */
export class SyntheticsTestResultRedirect {
  /**
   * Target location of the redirect.
   */
  "location"?: string;
  /**
   * HTTP status code of the redirect response.
   */
  "statusCode"?: number;
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
    location: {
      baseName: "location",
      type: "string",
    },
    statusCode: {
      baseName: "status_code",
      type: "number",
      format: "int64",
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
    return SyntheticsTestResultRedirect.attributeTypeMap;
  }

  public constructor() {}
}
