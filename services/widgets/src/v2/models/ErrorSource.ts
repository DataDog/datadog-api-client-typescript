import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An object containing references to the primary source of the error.
 * See: https://jsonapi.org/format/#error-objects
 */
export class ErrorSource {
  "header"?: string;
  "parameter"?: string;
  "pointer"?: string;
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
    header: {
      baseName: "header",
      type: "string",
    },
    parameter: {
      baseName: "parameter",
      type: "string",
    },
    pointer: {
      baseName: "pointer",
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
    return ErrorSource.attributeTypeMap;
  }

  public constructor() {}
}
