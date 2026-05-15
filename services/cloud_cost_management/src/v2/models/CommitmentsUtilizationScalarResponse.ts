import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsScalarColumn } from "./CommitmentsScalarColumn";
import { CommitmentsUtilizationScalarProductBreakdownEntry } from "./CommitmentsUtilizationScalarProductBreakdownEntry";

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
