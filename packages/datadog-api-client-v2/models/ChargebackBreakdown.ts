/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Charges breakdown.
 */
export class ChargebackBreakdown {
  /**
   * The type of charge for a particular product.
   */
  "chargeType"?: string;
  /**
   * The cost for a particular product and charge type during a given month.
   */
  "cost"?: number;
  /**
   * The product for which cost is being reported.
   */
  "productName"?: string;

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
    chargeType: {
      baseName: "charge_type",
      type: "string",
    },
    cost: {
      baseName: "cost",
      type: "number",
      format: "double",
    },
    productName: {
      baseName: "product_name",
      type: "string",
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
    return ChargebackBreakdown.attributeTypeMap;
  }

  public constructor() {}
}
