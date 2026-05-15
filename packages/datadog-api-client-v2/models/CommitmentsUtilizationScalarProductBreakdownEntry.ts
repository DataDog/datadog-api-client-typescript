/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Per-product utilization data in a scalar utilization response.
 */
export class CommitmentsUtilizationScalarProductBreakdownEntry {
  /**
   * The cloud product name.
   */
  "product": string;
  /**
   * The utilization percentage for the product.
   */
  "utilization": number;

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
      type: "string",
      required: true,
    },
    utilization: {
      baseName: "utilization",
      type: "number",
      required: true,
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
    return CommitmentsUtilizationScalarProductBreakdownEntry.attributeTypeMap;
  }

  public constructor() {}
}
