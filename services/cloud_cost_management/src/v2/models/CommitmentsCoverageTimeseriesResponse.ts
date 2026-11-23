import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsCoverageTimeseriesResponseData } from "./CommitmentsCoverageTimeseriesResponseData";

/**
 * Response containing timeseries coverage metrics for cloud commitment programs.
 */
export class CommitmentsCoverageTimeseriesResponse {
  /**
   * The timeseries coverage resource.
   */
  "data": CommitmentsCoverageTimeseriesResponseData;
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
      type: "CommitmentsCoverageTimeseriesResponseData",
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
    return CommitmentsCoverageTimeseriesResponse.attributeTypeMap;
  }

  public constructor() {}
}
