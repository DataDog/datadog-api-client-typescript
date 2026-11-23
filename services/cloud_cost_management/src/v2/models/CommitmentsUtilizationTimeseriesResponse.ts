import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsUtilizationTimeseriesResponseData } from "./CommitmentsUtilizationTimeseriesResponseData";

/**
 * Response containing timeseries utilization metrics for cloud commitment programs.
 */
export class CommitmentsUtilizationTimeseriesResponse {
  /**
   * The timeseries utilization resource.
   */
  "data": CommitmentsUtilizationTimeseriesResponseData;
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
      type: "CommitmentsUtilizationTimeseriesResponseData",
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
    return CommitmentsUtilizationTimeseriesResponse.attributeTypeMap;
  }

  public constructor() {}
}
