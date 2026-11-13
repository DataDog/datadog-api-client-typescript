import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsBanditArmDataStatus } from "./ExperimentsBanditArmDataStatus";
import { ExperimentsBanditNullableConfidenceIntervalV2 } from "./ExperimentsBanditNullableConfidenceIntervalV2";
import { ExperimentsBanditPosteriorUnavailableReason } from "./ExperimentsBanditPosteriorUnavailableReason";

/**
 * An arm's estimates from the latest saved refresh.
 */
export class ExperimentsBanditVariantResultV2 {
  /**
   * A central interval around point_estimate at confidence_level. Null when the estimate is unavailable.
   */
  "confidenceInterval": ExperimentsBanditNullableConfidenceIntervalV2 | null;
  /**
   * Where the arm's reward variance came from, or why it's unavailable.
   */
  "dataStatus"?: ExperimentsBanditArmDataStatus;
  /**
   * The arm's variant ID on the flag.
   */
  "featureFlagVariantId": string;
  /**
   * The arm's valid observations whose aggregation window has closed. The estimate uses these.
   */
  "matureObservations": number;
  /**
   * The arm's estimated mean of the metric, in the metric's units. It isn't a lift.
   */
  "pointEstimate": number | null;
  /**
   * Why the arm's estimate and interval are unavailable. Absent when they are available.
   */
  "posteriorUnavailableReason"?: ExperimentsBanditPosteriorUnavailableReason;
  /**
   * The probability that this arm is the best.
   */
  "probabilityOfBeingOptimal": number | null;
  /**
   * The arm's variant key.
   */
  "variantKey": string | null;
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
      type: "ExperimentsBanditNullableConfidenceIntervalV2",
      required: true,
    },
    dataStatus: {
      baseName: "data_status",
      type: "ExperimentsBanditArmDataStatus",
    },
    featureFlagVariantId: {
      baseName: "feature_flag_variant_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    matureObservations: {
      baseName: "mature_observations",
      type: "number",
      required: true,
      format: "int64",
    },
    pointEstimate: {
      baseName: "point_estimate",
      type: "number",
      required: true,
      format: "double",
    },
    posteriorUnavailableReason: {
      baseName: "posterior_unavailable_reason",
      type: "ExperimentsBanditPosteriorUnavailableReason",
    },
    probabilityOfBeingOptimal: {
      baseName: "probability_of_being_optimal",
      type: "number",
      required: true,
      format: "double",
    },
    variantKey: {
      baseName: "variant_key",
      type: "string",
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
    return ExperimentsBanditVariantResultV2.attributeTypeMap;
  }

  public constructor() {}
}
