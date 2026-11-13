import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsBanditBayesianPriorV2 } from "./ExperimentsBanditBayesianPriorV2";
import { ExperimentsBanditFlagConfigurationV2 } from "./ExperimentsBanditFlagConfigurationV2";
import { ExperimentsBanditOptimalVariantUnavailableReason } from "./ExperimentsBanditOptimalVariantUnavailableReason";
import { ExperimentsBanditPolicyV2 } from "./ExperimentsBanditPolicyV2";
import { ExperimentsBanditRefreshV2 } from "./ExperimentsBanditRefreshV2";
import { ExperimentsBanditScheduledEndFailureV2 } from "./ExperimentsBanditScheduledEndFailureV2";
import { ExperimentsBanditStatus } from "./ExperimentsBanditStatus";
import { ExperimentsBanditVariantV2 } from "./ExperimentsBanditVariantV2";

/**
 * A bandit's setup, the policy it serves, and its latest refresh.
 */
export class ExperimentsBanditV2DTODataAttributes {
  /**
   * The policy the bandit serves. Null until the bandit starts.
   */
  "activePolicy": ExperimentsBanditPolicyV2 | null;
  /**
   * How long after an exposure its reward is counted, in seconds.
   */
  "aggregationWindowSeconds": number;
  /**
   * The prior the bandit's estimates start from.
   */
  "bayesianPrior": ExperimentsBanditBayesianPriorV2;
  /**
   * The version of the bandit's configuration. Each saved change adds one.
   */
  "configVersion": number;
  /**
   * When the bandit was created.
   */
  "createdAt": Date;
  /**
   * The flag rule the bandit serves through. Absent until a draft is put on a flag, and when the caller lacks feature flag and environment read permissions (`meta.warnings` then says so).
   */
  "datadogFlagConfiguration"?: ExperimentsBanditFlagConfigurationV2;
  /**
   * The bandit's description.
   */
  "description": string;
  /**
   * When the bandit was stopped or reached its scheduled end. Null while it hasn't ended.
   */
  "endedAt": Date | null;
  /**
   * The exposure SQL model the bandit reads its exposures from. Null until set on a draft.
   */
  "exposureSqlModelId": string | null;
  /**
   * The most recently started refresh. Null until one starts.
   */
  "latestRefresh": ExperimentsBanditRefreshV2 | null;
  /**
   * How far back each refresh reads observations, in seconds.
   */
  "lookbackSeconds": number;
  /**
   * The metric the bandit optimizes. Null until set on a draft.
   */
  "metricId": string | null;
  /**
   * The bandit's name.
   */
  "name": string;
  /**
   * The key of the arm most likely to be best, when one arm leads and the bandit is outside warmup. Null otherwise. Matches Get bandit results.
   */
  "optimalVariantKey": string | null;
  /**
   * Why no optimal variant is reported. Absent when one is, or when the cause isn't known.
   */
  "optimalVariantUnavailableReason"?: ExperimentsBanditOptimalVariantUnavailableReason;
  /**
   * The schedule the bandit refreshes on.
   */
  "refreshScheduleId": string | null;
  /**
   * When the bandit ends and serves its fallback. Null when it has no scheduled end.
   */
  "scheduledEndAt": Date | null;
  /**
   * Why the scheduled end couldn't run. It isn't retried until the end or fallback changes. Absent when there's no failure.
   */
  "scheduledEndFailure"?: ExperimentsBanditScheduledEndFailureV2;
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
   * The flag variants the bandit uses: its arms in arm order, then its fallback when the fallback isn't an arm.
   */
  "variants": Array<ExperimentsBanditVariantV2>;
  /**
   * How long after starting the bandit serves its arms equally, in seconds. Null when it has no warmup.
   */
  "warmupSeconds": number | null;
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
    activePolicy: {
      baseName: "active_policy",
      type: "ExperimentsBanditPolicyV2",
      required: true,
    },
    aggregationWindowSeconds: {
      baseName: "aggregation_window_seconds",
      type: "number",
      required: true,
      format: "int64",
    },
    bayesianPrior: {
      baseName: "bayesian_prior",
      type: "ExperimentsBanditBayesianPriorV2",
      required: true,
    },
    configVersion: {
      baseName: "config_version",
      type: "number",
      required: true,
      format: "int64",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    datadogFlagConfiguration: {
      baseName: "datadog_flag_configuration",
      type: "ExperimentsBanditFlagConfigurationV2",
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
    exposureSqlModelId: {
      baseName: "exposure_sql_model_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    latestRefresh: {
      baseName: "latest_refresh",
      type: "ExperimentsBanditRefreshV2",
      required: true,
    },
    lookbackSeconds: {
      baseName: "lookback_seconds",
      type: "number",
      required: true,
      format: "int64",
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
    refreshScheduleId: {
      baseName: "refresh_schedule_id",
      type: "string",
      required: true,
    },
    scheduledEndAt: {
      baseName: "scheduled_end_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    scheduledEndFailure: {
      baseName: "scheduled_end_failure",
      type: "ExperimentsBanditScheduledEndFailureV2",
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
    variants: {
      baseName: "variants",
      type: "Array<ExperimentsBanditVariantV2>",
      required: true,
    },
    warmupSeconds: {
      baseName: "warmup_seconds",
      type: "number",
      required: true,
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
    return ExperimentsBanditV2DTODataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
