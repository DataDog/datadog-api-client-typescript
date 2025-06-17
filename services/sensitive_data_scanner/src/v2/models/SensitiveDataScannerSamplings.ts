import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerProduct } from "./SensitiveDataScannerProduct";

/**
 * Sampling configurations for the Scanning Group.
 */
export class SensitiveDataScannerSamplings {
  /**
   * Datadog product onto which Sensitive Data Scanner can be activated.
   */
  "product"?: SensitiveDataScannerProduct;
  /**
   * Rate at which data in product type will be scanned, as a percentage.
   */
  "rate"?: number;
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
    product: {
      baseName: "product",
      type: "SensitiveDataScannerProduct",
    },
    rate: {
      baseName: "rate",
      type: "number",
      format: "double",
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
    return SensitiveDataScannerSamplings.attributeTypeMap;
  }

  public constructor() {}
}
