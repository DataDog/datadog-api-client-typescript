import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerFilter } from "./SensitiveDataScannerFilter";
import { SensitiveDataScannerGroupTarget } from "./SensitiveDataScannerGroupTarget";
import { SensitiveDataScannerSamplings } from "./SensitiveDataScannerSamplings";

/**
 * Attributes of a scanning group of a target.
 */
export class SensitiveDataScannerTargetGroupAttributes {
  /**
   * Description of the group.
   */
  "description": string;
  /**
   * Filter for the Scanning Group.
   */
  "filter": SensitiveDataScannerFilter;
  /**
   * Whether or not the group is enabled.
   */
  "isEnabled": boolean;
  /**
   * Name of the group.
   */
  "name": string;
  /**
   * Products the scanning group applies to.
   */
  "productList": Array<SensitiveDataScannerGroupTarget>;
  /**
   * Sampling rates per product type. Always empty for these targets.
   */
  "samplings": Array<SensitiveDataScannerSamplings>;
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
      required: true,
    },
    filter: {
      baseName: "filter",
      type: "SensitiveDataScannerFilter",
      required: true,
    },
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    productList: {
      baseName: "product_list",
      type: "Array<SensitiveDataScannerGroupTarget>",
      required: true,
    },
    samplings: {
      baseName: "samplings",
      type: "Array<SensitiveDataScannerSamplings>",
      required: true,
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
    return SensitiveDataScannerTargetGroupAttributes.attributeTypeMap;
  }

  public constructor() {}
}
