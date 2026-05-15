import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsTimeseriesMetric } from "./CommitmentsTimeseriesMetric";

/**
 * Response containing timeseries coverage metrics for cloud commitment programs.
 */
export class CommitmentsCoverageTimeseriesResponse {
  /**
   * A timeseries metric containing timestamps, series values, and optional unit metadata.
   */
  "cost": CommitmentsTimeseriesMetric;
  /**
   * A timeseries metric containing timestamps, series values, and optional unit metadata.
   */
  "hours": CommitmentsTimeseriesMetric;
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
    cost: {
      baseName: "cost",
      type: "CommitmentsTimeseriesMetric",
      required: true,
    },
    hours: {
      baseName: "hours",
      type: "CommitmentsTimeseriesMetric",
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
