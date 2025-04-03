import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerMeta } from "./SensitiveDataScannerMeta";

/**
 * Group reorder response.
 */
export class SensitiveDataScannerReorderGroupsResponse {
  /**
   * Meta response containing information about the API.
   */
  "meta"?: SensitiveDataScannerMeta;
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
      type: "SensitiveDataScannerMeta",
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
    return SensitiveDataScannerReorderGroupsResponse.attributeTypeMap;
  }

  public constructor() {}
}
