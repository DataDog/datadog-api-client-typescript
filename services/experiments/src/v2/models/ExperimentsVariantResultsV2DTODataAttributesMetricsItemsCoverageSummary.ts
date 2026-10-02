import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Population totals and allocation used to calculate metric coverage.
 */
export class ExperimentsVariantResultsV2DTODataAttributesMetricsItemsCoverageSummary {
  /**
   * Total metric value for the control population in the coverage calculation.
   */
  "controlTotal"?: number;
  /**
   * Estimated share of the global metric total from the eligible population if that population received
   * control. The estimate can exceed 1.
   */
  "coverage"?: number;
  /**
   * Reason that metric coverage could not be calculated.
   */
  "coverageUnavailableReason"?: string;
  /**
   * Estimated metric total for the eligible population if that population received control.
   */
  "eligiblePopulationTotal"?: number;
  /**
   * Total metric value for the experiment population in the coverage calculation.
   */
  "experimentTotal"?: number;
  /**
   * Observed metric total across subjects inside and outside the experiment.
   */
  "globalMetricTotal"?: number;
  /**
   * Fraction of eligible traffic allocated to the experiment, weighted by time.
   */
  "trafficAllocation"?: number;
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
    controlTotal: {
      baseName: "control_total",
      type: "number",
      format: "double",
    },
    coverage: {
      baseName: "coverage",
      type: "number",
      format: "double",
    },
    coverageUnavailableReason: {
      baseName: "coverage_unavailable_reason",
      type: "string",
    },
    eligiblePopulationTotal: {
      baseName: "eligible_population_total",
      type: "number",
      format: "double",
    },
    experimentTotal: {
      baseName: "experiment_total",
      type: "number",
      format: "double",
    },
    globalMetricTotal: {
      baseName: "global_metric_total",
      type: "number",
      format: "double",
    },
    trafficAllocation: {
      baseName: "traffic_allocation",
      type: "number",
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
    return ExperimentsVariantResultsV2DTODataAttributesMetricsItemsCoverageSummary.attributeTypeMap;
  }

  public constructor() {}
}
