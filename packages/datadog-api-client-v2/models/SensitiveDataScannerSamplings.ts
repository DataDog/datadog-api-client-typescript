/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerProduct } from "./SensitiveDataScannerProduct";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
      type: "any",
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
