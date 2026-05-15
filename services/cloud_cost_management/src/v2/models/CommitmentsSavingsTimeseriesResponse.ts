import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsTimeseriesMetric } from "./CommitmentsTimeseriesMetric";

/**
 * Response containing timeseries savings metrics for cloud commitment programs.
 */
export class CommitmentsSavingsTimeseriesResponse {
  /**
   * A timeseries metric containing timestamps, series values, and optional unit metadata.
   */
  "actualCost": CommitmentsTimeseriesMetric;
  /**
   * A timeseries metric containing timestamps, series values, and optional unit metadata.
   */
  "effectiveSavingsRate": CommitmentsTimeseriesMetric;
  /**
   * A timeseries metric containing timestamps, series values, and optional unit metadata.
   */
  "onDemandEquivalentCost": CommitmentsTimeseriesMetric;
  /**
   * A timeseries metric containing timestamps, series values, and optional unit metadata.
   */
  "realizedSavings": CommitmentsTimeseriesMetric;
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
    actualCost: {
      baseName: "actual_cost",
      type: "CommitmentsTimeseriesMetric",
      required: true,
    },
    effectiveSavingsRate: {
      baseName: "effective_savings_rate",
      type: "CommitmentsTimeseriesMetric",
      required: true,
    },
    onDemandEquivalentCost: {
      baseName: "on_demand_equivalent_cost",
      type: "CommitmentsTimeseriesMetric",
      required: true,
    },
    realizedSavings: {
      baseName: "realized_savings",
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
    return CommitmentsSavingsTimeseriesResponse.attributeTypeMap;
  }

  public constructor() {}
}
