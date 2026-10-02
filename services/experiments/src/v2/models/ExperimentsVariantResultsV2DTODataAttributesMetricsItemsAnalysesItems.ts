import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsConfidenceInterval } from "./ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsConfidenceInterval";
import { ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsLiftType } from "./ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsLiftType";
import { ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsMethod } from "./ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsMethod";
import { ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsUnreliableReason } from "./ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsUnreliableReason";

/**
 * One statistical comparison for a metric and variant.
 */
export class ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItems {
  /**
   * Lower and upper bounds of the reported statistical interval.
   */
  "confidenceInterval"?: ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsConfidenceInterval;
  /**
   * Configured nominal confidence level. Interval bounds can use an adjusted level for multiple testing or hybrid methods.
   */
  "confidenceLevel"?: number;
  /**
   * Expected reduction in minimum expected regret from collecting more sample data.
   */
  "evsi"?: number;
  /**
   * Expected effect when the effect is positive.
   */
  "expectationAboveZero"?: number;
  /**
   * Expected effect when the effect is negative.
   */
  "expectationBelowZero"?: number;
  /**
   * Estimated lift across the population. Calculated as metric coverage multiplied by the experiment lift.
   */
  "globalLift"?: number;
  /**
   * Lower bound of the estimated lift across the population.
   */
  "globalLiftLowerBound"?: number;
  /**
   * Upper bound of the estimated lift across the population.
   */
  "globalLiftUpperBound"?: number;
  /**
   * Whether CUPED used pre-experiment data to reduce variance in this result.
   */
  "isCupedAdjusted"?: boolean;
  /**
   * Whether the statistical result is marked as unreliable.
   */
  "isUnreliable"?: boolean;
  /**
   * Whether the reported lift is relative or absolute.
   */
  "liftType"?: ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsLiftType;
  /**
   * Statistical method used to calculate this result.
   */
  "method"?: ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsMethod;
  /**
   * The smaller expected opportunity cost of choosing treatment or control.
   */
  "minimumExpectedRegret"?: number;
  /**
   * Probability, under the no-effect hypothesis, of a result at least as extreme as the observed result.
   */
  "pValue"?: number;
  /**
   * Estimated difference between the variant and control for this metric.
   */
  "pointEstimate"?: number;
  /**
   * Estimated probability that the effect is greater than zero.
   */
  "probabilityAboveZero"?: number;
  /**
   * Estimated probability that the effect is less than zero.
   */
  "probabilityBelowZero"?: number;
  /**
   * Estimated uncertainty in the effect estimate.
   */
  "standardError"?: number;
  /**
   * Reason that the statistical result is marked as unreliable.
   */
  "unreliableReason"?: ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsUnreliableReason;
  /**
   * Metric value calculated for this variant.
   */
  "variantMetricValue"?: number;
  /**
   * Standardized statistic used to compare the observed effect with zero.
   */
  "zScore"?: number;
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
    confidenceInterval: {
      baseName: "confidence_interval",
      type: "ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsConfidenceInterval",
    },
    confidenceLevel: {
      baseName: "confidence_level",
      type: "number",
      format: "double",
    },
    evsi: {
      baseName: "evsi",
      type: "number",
      format: "double",
    },
    expectationAboveZero: {
      baseName: "expectation_above_zero",
      type: "number",
      format: "double",
    },
    expectationBelowZero: {
      baseName: "expectation_below_zero",
      type: "number",
      format: "double",
    },
    globalLift: {
      baseName: "global_lift",
      type: "number",
      format: "double",
    },
    globalLiftLowerBound: {
      baseName: "global_lift_lower_bound",
      type: "number",
      format: "double",
    },
    globalLiftUpperBound: {
      baseName: "global_lift_upper_bound",
      type: "number",
      format: "double",
    },
    isCupedAdjusted: {
      baseName: "is_cuped_adjusted",
      type: "boolean",
    },
    isUnreliable: {
      baseName: "is_unreliable",
      type: "boolean",
    },
    liftType: {
      baseName: "lift_type",
      type: "ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsLiftType",
    },
    method: {
      baseName: "method",
      type: "ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsMethod",
    },
    minimumExpectedRegret: {
      baseName: "minimum_expected_regret",
      type: "number",
      format: "double",
    },
    pValue: {
      baseName: "p_value",
      type: "number",
      format: "double",
    },
    pointEstimate: {
      baseName: "point_estimate",
      type: "number",
      format: "double",
    },
    probabilityAboveZero: {
      baseName: "probability_above_zero",
      type: "number",
      format: "double",
    },
    probabilityBelowZero: {
      baseName: "probability_below_zero",
      type: "number",
      format: "double",
    },
    standardError: {
      baseName: "standard_error",
      type: "number",
      format: "double",
    },
    unreliableReason: {
      baseName: "unreliable_reason",
      type: "ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsUnreliableReason",
    },
    variantMetricValue: {
      baseName: "variant_metric_value",
      type: "number",
      format: "double",
    },
    zScore: {
      baseName: "z_score",
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
    return ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItems.attributeTypeMap;
  }

  public constructor() {}
}
