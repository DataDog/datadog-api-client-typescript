import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Delete group response.
 */
export class SensitiveDataScannerGroupDeleteResponse {
  /**
   * Always `null`.
   */
  "data"?: { [key: string]: any };
  /**
   * Meta response. Always an empty object.
   */
  "meta"?: { [key: string]: any };
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
      type: "{ [key: string]: any; }",
    },
    meta: {
      baseName: "meta",
      type: "{ [key: string]: any; }",
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
    return SensitiveDataScannerGroupDeleteResponse.attributeTypeMap;
  }

  public constructor() {}
}
