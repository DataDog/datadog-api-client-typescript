/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerFilter } from "./SensitiveDataScannerFilter";
import { SensitiveDataScannerProduct } from "./SensitiveDataScannerProduct";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   * @ignore
   */
  "unparsedObject"?: any;

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SensitiveDataScannerGroupAttributes.attributeTypeMap;
  }

  public constructor() {}
}
