import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerFilter } from "./SensitiveDataScannerFilter";
import { SensitiveDataScannerProduct } from "./SensitiveDataScannerProduct";

/**
 * Attributes of the Sensitive Data Scanner group.
 */
export class SensitiveDataScannerGroupAttributes {
  /**
   * Description of the group.
   */
  "description"?: string;
  /**
   * Filter for the Scanning Group.
   */
  "filter"?: SensitiveDataScannerFilter;
  /**
   * Whether or not the group is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Name of the group.
   */
  "name"?: string;
  /**
   * List of products the scanning group applies.
   */
  "productList"?: Array<SensitiveDataScannerProduct>;
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
    description: {
      baseName: "description",
      type: "string",
    },
    filter: {
      baseName: "filter",
      type: "SensitiveDataScannerFilter",
    },
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    productList: {
      baseName: "product_list",
      type: "Array<SensitiveDataScannerProduct>",
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
    return SensitiveDataScannerGroupAttributes.attributeTypeMap;
  }

  public constructor() {}
}
