import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsMetricV2DTODataAttributesDesiredChange } from "./ExperimentsMetricV2DTODataAttributesDesiredChange";
import { ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItems } from "./ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItems";
import { ExperimentsVariantResultsV2DTODataAttributesMetricsItemsCoverageSummary } from "./ExperimentsVariantResultsV2DTODataAttributesMetricsItemsCoverageSummary";

/**
 * Metric values and statistical results for one variant.
 */
export class ExperimentsVariantResultsV2DTODataAttributesMetricsItems {
  /**
   * Statistical analyses calculated for this metric and variant.
   */
  "analyses"?: Array<ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItems>;
  /**
   * Number of subjects assigned to this variant.
   */
  "assignmentCount"?: number;
  /**
   * Estimated share of the global metric total from the eligible population if that population received
   * control. The estimate can exceed 1.
   */
  "coverage"?: number;
  /**
   * Population totals and allocation used to calculate metric coverage.
   */
  "coverageSummary"?: ExperimentsVariantResultsV2DTODataAttributesMetricsItemsCoverageSummary;
  /**
   * Reason that metric coverage could not be calculated.
   */
  "coverageUnavailableReason"?: string;
  /**
   * Aggregated denominator value for this metric and variant.
   */
  "denominator"?: number;
  /**
   * Direction of metric change considered desirable.
   */
  "desiredChange"?: ExperimentsMetricV2DTODataAttributesDesiredChange;
  /**
   * ID of the metric represented by this entry.
   */
  "metricId"?: string;
  /**
   * Display name of the metric represented by this entry.
   */
  "metricName"?: string;
  /**
   * Aggregated numerator value for this metric and variant.
   */
  "numerator"?: number;
  /**
   * Name of the property used to split this metric result.
   */
  "subMetricPropertyName"?: string;
  /**
   * Property value represented by this split metric result.
   */
  "subMetricPropertyValue"?: string;
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
    analyses: {
      baseName: "analyses",
      type: "Array<ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItems>",
    },
    assignmentCount: {
      baseName: "assignment_count",
      type: "number",
      format: "int64",
    },
    coverage: {
      baseName: "coverage",
      type: "number",
      format: "double",
    },
    coverageSummary: {
      baseName: "coverage_summary",
      type: "ExperimentsVariantResultsV2DTODataAttributesMetricsItemsCoverageSummary",
    },
    coverageUnavailableReason: {
      baseName: "coverage_unavailable_reason",
      type: "string",
    },
    denominator: {
      baseName: "denominator",
      type: "number",
      format: "double",
    },
    desiredChange: {
      baseName: "desired_change",
      type: "ExperimentsMetricV2DTODataAttributesDesiredChange",
    },
    metricId: {
      baseName: "metric_id",
      type: "string",
    },
    metricName: {
      baseName: "metric_name",
      type: "string",
    },
    numerator: {
      baseName: "numerator",
      type: "number",
      format: "double",
    },
    subMetricPropertyName: {
      baseName: "sub_metric_property_name",
      type: "string",
    },
    subMetricPropertyValue: {
      baseName: "sub_metric_property_value",
      type: "string",
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
    return ExperimentsVariantResultsV2DTODataAttributesMetricsItems.attributeTypeMap;
  }

  public constructor() {}
}
