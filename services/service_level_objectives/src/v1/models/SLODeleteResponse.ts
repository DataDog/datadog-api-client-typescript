import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A response list of all service level objective deleted.
 */
export class SLODeleteResponse {
  /**
   * An array containing the ID of the deleted service level objective object.
   */
  "data"?: Array<string>;
  /**
   * An dictionary containing the ID of the SLO as key and a deletion error as value.
   */
  "errors"?: { [key: string]: string };
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
      type: "Array<string>",
    },
    errors: {
      baseName: "errors",
      type: "{ [key: string]: string; }",
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
    return SLODeleteResponse.attributeTypeMap;
  }

  public constructor() {}
}
