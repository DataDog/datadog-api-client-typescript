import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerMetaVersionOnly } from "./SensitiveDataScannerMetaVersionOnly";

/**
 * Update rule response.
 */
export class SensitiveDataScannerRuleUpdateResponse {
  /**
   * Meta payload containing information about the API.
   */
  "meta"?: SensitiveDataScannerMetaVersionOnly;
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
    meta: {
      baseName: "meta",
      type: "SensitiveDataScannerMetaVersionOnly",
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
