import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsBanditOptimalVariantUnavailableReason } from "./ExperimentsBanditOptimalVariantUnavailableReason";
import { ExperimentsBanditStatus } from "./ExperimentsBanditStatus";

/**
 * Summary of a bandit. Use Get bandit for its setup, active policy, and latest refresh.
 */
export class ExperimentsBanditV2ListDTODataAttributes {
  /**
   * When the bandit was created.
   */
  "createdAt": Date;
  /**
   * The bandit's description.
   */
  "description": string;
  /**
   * When the bandit was stopped or reached its scheduled end. Null while it hasn't ended.
   */
  "endedAt": Date | null;
  /**
   * The metric the bandit optimizes. Null until set on a draft.
   */
  "metricId": string | null;
  /**
   * The bandit's name.
   */
  "name": string;
  /**
   * The key of the arm most likely to be best, when one arm leads and the bandit is outside warmup. Null otherwise.
   */
  "optimalVariantKey": string | null;
  /**
   * Why no optimal variant is reported. Absent when one is, or when the cause isn't known.
   */
  "optimalVariantUnavailableReason"?: ExperimentsBanditOptimalVariantUnavailableReason;
  /**
   * When the bandit started. Null until it starts.
   */
  "startedAt": Date | null;
  /**
   * The bandit's status. STOPPED means the bandit was stopped and serves the variant chosen then. COMPLETED means it reached its scheduled end and serves its fallback.
   */
  "status": ExperimentsBanditStatus;
  /**
   * The subject type the bandit randomizes and measures by. Null until set on a draft.
   */
  "subjectTypeId": string | null;
  /**
   * The bandit's tags, without team tags.
   */
  "tags": Array<string>;
  /**
   * Handles of the teams that own the bandit.
   */
  "teams": Array<string>;
  /**
   * When the bandit was last changed.
   */
  "updatedAt": Date;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    endedAt: {
      baseName: "ended_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    metricId: {
      baseName: "metric_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    optimalVariantKey: {
      baseName: "optimal_variant_key",
      type: "string",
      required: true,
    },
    optimalVariantUnavailableReason: {
      baseName: "optimal_variant_unavailable_reason",
      type: "ExperimentsBanditOptimalVariantUnavailableReason",
    },
    startedAt: {
      baseName: "started_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    status: {
      baseName: "status",
      type: "ExperimentsBanditStatus",
      required: true,
    },
    subjectTypeId: {
      baseName: "subject_type_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      required: true,
    },
    teams: {
      baseName: "teams",
      type: "Array<string>",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return ExperimentsBanditV2ListDTODataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
