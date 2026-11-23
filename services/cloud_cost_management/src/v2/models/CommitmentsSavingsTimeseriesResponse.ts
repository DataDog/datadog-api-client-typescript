import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsSavingsTimeseriesResponseData } from "./CommitmentsSavingsTimeseriesResponseData";

/**
 * Response containing timeseries savings metrics for cloud commitment programs.
 */
export class CommitmentsSavingsTimeseriesResponse {
  /**
   * The timeseries savings resource.
   */
  "data": CommitmentsSavingsTimeseriesResponseData;
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
      type: "CommitmentsSavingsTimeseriesResponseData",
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
    return CommitmentsSavingsTimeseriesResponse.attributeTypeMap;
  }

  public constructor() {}
}
