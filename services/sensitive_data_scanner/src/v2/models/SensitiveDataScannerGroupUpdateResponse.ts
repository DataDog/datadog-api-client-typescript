import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerMetaVersionOnly } from "./SensitiveDataScannerMetaVersionOnly";

/**
 * Update group response.
 */
export class SensitiveDataScannerGroupUpdateResponse {
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
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SensitiveDataScannerGroupUpdateResponse.attributeTypeMap;
  }

  public constructor() {}
}
