import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Configured exposure plan rather than wall-clock history. At least two steps must have strictly increasing fractions and no gaps. Warehouse steps start at assignments_start_date and can use different durations. New Datadog plans have at most five steps and a first fraction above zero. Their nonfinal durations must be equal and exclude time paused. Datadog steps start with the experiment. Running warehouse experiments can replace step fractions, durations, and the exposure mode. After start, Datadog exposure plans cannot change through the public API. The final duration is null and its fraction holds until assignment ends.
 */
export class ExperimentsCreateExperimentV2RequestDataAttributesTrafficExposureStepsItems {
  /**
   * Positive step duration in milliseconds. Datadog durations exclude pauses. Send null for the final step.
   */
  "durationMs": number | null;
  /**
   * Fraction of traffic exposed during this step.
   */
  "fraction": number;
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
    durationMs: {
      baseName: "duration_ms",
      type: "number",
      required: true,
      format: "int64",
    },
    fraction: {
      baseName: "fraction",
      type: "number",
      required: true,
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
    return ExperimentsCreateExperimentV2RequestDataAttributesTrafficExposureStepsItems.attributeTypeMap;
  }

  public constructor() {}
}
