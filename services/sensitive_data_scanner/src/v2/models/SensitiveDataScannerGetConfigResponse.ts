import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerGetConfigIncludedItem } from "./SensitiveDataScannerGetConfigIncludedItem";
import { SensitiveDataScannerGetConfigResponseData } from "./SensitiveDataScannerGetConfigResponseData";
import { SensitiveDataScannerMeta } from "./SensitiveDataScannerMeta";

/**
 * Get all groups response.
 */
export class SensitiveDataScannerGetConfigResponse {
  /**
   * Response data related to the scanning groups.
   */
  "data"?: SensitiveDataScannerGetConfigResponseData;
  /**
   * Included objects from relationships.
   */
  "included"?: Array<SensitiveDataScannerGetConfigIncludedItem>;
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
    data: {
      baseName: "data",
      type: "SensitiveDataScannerGetConfigResponseData",
    },
    included: {
      baseName: "included",
      type: "Array<SensitiveDataScannerGetConfigIncludedItem>",
    },
    meta: {
      baseName: "meta",
      type: "SensitiveDataScannerMeta",
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
    return SensitiveDataScannerGetConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
