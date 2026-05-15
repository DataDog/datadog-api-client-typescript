/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CommitmentsScalarColumn } from "./CommitmentsScalarColumn";
import { CommitmentsUtilizationScalarProductBreakdownEntry } from "./CommitmentsUtilizationScalarProductBreakdownEntry";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing scalar utilization metrics for cloud commitment programs.
 */
export class CommitmentsUtilizationScalarResponse {
  /**
   * Array of scalar columns in the response.
   */
  "columns": Array<CommitmentsScalarColumn>;
  /**
   * Array of per-product utilization breakdown entries.
   */
  "productBreakdown"?: Array<CommitmentsUtilizationScalarProductBreakdownEntry>;

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
    columns: {
      baseName: "columns",
      type: "Array<CommitmentsScalarColumn>",
      required: true,
    },
    productBreakdown: {
      baseName: "product_breakdown",
      type: "Array<CommitmentsUtilizationScalarProductBreakdownEntry>",
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
    return CommitmentsUtilizationScalarResponse.attributeTypeMap;
  }

  public constructor() {}
}
