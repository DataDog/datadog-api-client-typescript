import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsBanditDailyTrafficV2 } from "./ExperimentsBanditDailyTrafficV2";
import { ExperimentsBanditObservationCountsV2 } from "./ExperimentsBanditObservationCountsV2";
import { ExperimentsBanditTrafficVariantV2 } from "./ExperimentsBanditTrafficVariantV2";

/**
 * What the bandit has observed, as of its latest saved refresh.
 */
export class ExperimentsBanditTrafficSummaryV2DTODataAttributes {
  /**
   * Valid observations per arm on the UTC day of their anchor time, for each day from the bandit's start to the data cutoff that overlaps the requested range. Days without any have zero counts. Empty before the first saved refresh.
   */
  "daily": Array<ExperimentsBanditDailyTrafficV2>;
  /**
   * The latest warehouse data the latest saved refresh read.
   */
  "dataAsOf": Date | null;
  /**
   * How many observations the latest saved refresh saw, whatever the range. Null when its counts can't be read.
   */
  "observationCounts": ExperimentsBanditObservationCountsV2 | null;
  /**
   * The latest refresh that saved results. The counts come from it.
   */
  "refreshId": string | null;
  /**
   * Distinct subjects with a valid observation, whatever the range.
   */
  "totalSubjects": number;
  /**
   * One row per arm, whatever the range.
   */
  "variants": Array<ExperimentsBanditTrafficVariantV2>;
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
    daily: {
      baseName: "daily",
      type: "Array<ExperimentsBanditDailyTrafficV2>",
      required: true,
    },
    dataAsOf: {
      baseName: "data_as_of",
      type: "Date",
      required: true,
      format: "date-time",
    },
    observationCounts: {
      baseName: "observation_counts",
      type: "ExperimentsBanditObservationCountsV2",
      required: true,
    },
    refreshId: {
      baseName: "refresh_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    totalSubjects: {
      baseName: "total_subjects",
      type: "number",
      required: true,
      format: "int64",
    },
    variants: {
      baseName: "variants",
      type: "Array<ExperimentsBanditTrafficVariantV2>",
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
    return ExperimentsBanditTrafficSummaryV2DTODataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
