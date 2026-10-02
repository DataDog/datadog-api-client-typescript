import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsAnalysisPlanV2DTODataAttributesConfidenceIntervalMethod } from "./ExperimentsAnalysisPlanV2DTODataAttributesConfidenceIntervalMethod";
import { ExperimentsAnalysisPlanV2MutationResponseDataAttributesBayesianPrior } from "./ExperimentsAnalysisPlanV2MutationResponseDataAttributesBayesianPrior";

/**
 * Statistical settings and duration targets in the saved analysis plan.
 */
export class ExperimentsAnalysisPlanV2MutationResponseDataAttributes {
  /**
   * Parameters of the prior distribution used for Bayesian analysis.
   */
  "bayesianPrior"?: ExperimentsAnalysisPlanV2MutationResponseDataAttributesBayesianPrior;
  /**
   * Statistical method used to calculate the experiment results.
   */
  "confidenceIntervalMethod"?: ExperimentsAnalysisPlanV2DTODataAttributesConfidenceIntervalMethod;
  /**
   * Confidence level used for statistical analysis, expressed as a fraction.
   */
  "confidenceLevel"?: number;
  /**
   * Number of days of pre-experiment data used for CUPED variance reduction.
   */
  "cupedLookbackPeriodDays"?: number;
  /**
   * Number of days configured for the experiment to end automatically.
   */
  "experimentAutoEndDays"?: number;
  /**
   * Minimum experiment duration in days configured in the analysis plan.
   */
  "experimentMinDuration"?: number;
  /**
   * Minimum sample size configured in the analysis plan.
   */
  "experimentMinSampleSize"?: number;
  /**
   * Whether the experiment has custom analysis settings.
   */
  "hasCustomAnalysisSettings"?: boolean;
  /**
   * Whether CUPED uses pre-experiment data to reduce variance in the analysis.
   */
  "isCupedEnabled"?: boolean;
  /**
   * Whether the analysis adjusts for testing multiple hypotheses.
   */
  "isMultipleTestingCorrectionEnabled"?: boolean;
  /**
   * Weight assigned to the primary metric in the preferential Bonferroni correction.
   */
  "preferentialBonferroniPrimaryMetricWeight"?: number;
  /**
   * Planned experiment duration in days.
   */
  "targetDurationDays"?: number;
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
    bayesianPrior: {
      baseName: "bayesian_prior",
      type: "ExperimentsAnalysisPlanV2MutationResponseDataAttributesBayesianPrior",
    },
    confidenceIntervalMethod: {
      baseName: "confidence_interval_method",
      type: "ExperimentsAnalysisPlanV2DTODataAttributesConfidenceIntervalMethod",
    },
    confidenceLevel: {
      baseName: "confidence_level",
      type: "number",
      format: "double",
    },
    cupedLookbackPeriodDays: {
      baseName: "cuped_lookback_period_days",
      type: "number",
      format: "int64",
    },
    experimentAutoEndDays: {
      baseName: "experiment_auto_end_days",
      type: "number",
      format: "int64",
    },
    experimentMinDuration: {
      baseName: "experiment_min_duration",
      type: "number",
      format: "int64",
    },
    experimentMinSampleSize: {
      baseName: "experiment_min_sample_size",
      type: "number",
      format: "int64",
    },
    hasCustomAnalysisSettings: {
      baseName: "has_custom_analysis_settings",
      type: "boolean",
    },
    isCupedEnabled: {
      baseName: "is_cuped_enabled",
      type: "boolean",
    },
    isMultipleTestingCorrectionEnabled: {
      baseName: "is_multiple_testing_correction_enabled",
      type: "boolean",
    },
    preferentialBonferroniPrimaryMetricWeight: {
      baseName: "preferential_bonferroni_primary_metric_weight",
      type: "number",
      format: "double",
    },
    targetDurationDays: {
      baseName: "target_duration_days",
      type: "number",
      format: "int64",
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
    return ExperimentsAnalysisPlanV2MutationResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
