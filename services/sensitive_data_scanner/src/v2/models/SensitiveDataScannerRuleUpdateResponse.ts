import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Update rule response.
 */
export class SensitiveDataScannerRuleUpdateResponse {
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
    return SensitiveDataScannerRuleUpdateResponse.attributeTypeMap;
  }

  public constructor() {}
}
