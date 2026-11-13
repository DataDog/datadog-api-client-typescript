import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An arm's observations and new subjects on one UTC day.
 */
export class ExperimentsBanditDailyTrafficV2 {
  /**
   * The arm's new subjects from the bandit's start through this day, including days before the requested range.
   */
  "cumulativeNewSubjects": number;
  /**
   * The arm's observations from the bandit's start through this day, including days before the requested range.
   */
  "cumulativeObservations": number;
  /**
   * A UTC date as YYYY-MM-DD.
   */
  "date": Date;
  /**
   * The arm's variant ID on the flag.
   */
  "featureFlagVariantId": string;
  /**
   * Subjects whose first valid observation is on this day and arm.
   */
  "newSubjects": number;
  /**
   * The arm's valid observations on this day.
   */
  "observations": number;
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
    cumulativeNewSubjects: {
      baseName: "cumulative_new_subjects",
      type: "number",
      required: true,
      format: "int64",
    },
    cumulativeObservations: {
      baseName: "cumulative_observations",
      type: "number",
      required: true,
      format: "int64",
    },
    date: {
      baseName: "date",
      type: "Date",
      required: true,
      format: "date",
    },
    featureFlagVariantId: {
      baseName: "feature_flag_variant_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    newSubjects: {
      baseName: "new_subjects",
      type: "number",
      required: true,
      format: "int64",
    },
    observations: {
      baseName: "observations",
      type: "number",
      required: true,
      format: "int64",
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
    return ExperimentsBanditDailyTrafficV2.attributeTypeMap;
  }

  public constructor() {}
}
