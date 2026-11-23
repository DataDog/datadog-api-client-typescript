import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsUtilizationScalarResponseData } from "./CommitmentsUtilizationScalarResponseData";

/**
 * Response containing scalar utilization metrics for cloud commitment programs.
 */
export class CommitmentsUtilizationScalarResponse {
  /**
   * The scalar utilization resource.
   */
  "data": CommitmentsUtilizationScalarResponseData;
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
      type: "CommitmentsUtilizationScalarResponseData",
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
    return CommitmentsUtilizationScalarResponse.attributeTypeMap;
  }

  public constructor() {}
}
