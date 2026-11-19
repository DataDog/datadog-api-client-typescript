/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsBanditBayesianPriorInputV2 } from "./ExperimentsBanditBayesianPriorInputV2";
import { ExperimentsBanditFlagConfigurationInputV2 } from "./ExperimentsBanditFlagConfigurationInputV2";
import { ExperimentsBanditVariantInputV2 } from "./ExperimentsBanditVariantInputV2";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * The attributes to change. Omitted attributes are unchanged. Which ones can change depends on the bandit's status.
 */
export class ExperimentsPatchBanditV2RequestDataAttributes {
  /**
   * The aggregation window: how long after an exposure the bandit keeps counting its reward, in seconds. `null` restores the default of 3600 (1 hour). Only a draft can change it.
   */
  "aggregationWindowSeconds"?: Int64;
  /**
   * The prior the bandit's estimates start from, in the metric's units. Omitted fields keep their current values, or their defaults on create. A change takes effect on the next refresh.
   */
  "bayesianPrior"?: ExperimentsBanditBayesianPriorInputV2;
  /**
   * The flag and environment the bandit serves on, and who it serves there. The server chooses the rule's `allocation_key`. On create, `feature_flag_id` and `environment_id` are required, and `null` is the same as omitting it. On update, omitted fields are unchanged, and `null` takes a draft off its flag, which also clears its variants and scheduled end. Moving a draft to another flag clears its variants unless the request sets them. Only a draft can change it.
   */
  "datadogFlagConfiguration"?: ExperimentsBanditFlagConfigurationInputV2;
  /**
   * The bandit's description.
   */
  "description"?: string;
  /**
   * The exposure SQL model the bandit reads its exposures from. Only a draft can change it.
   */
  "exposureSqlModelId"?: string;
  /**
   * How far back each refresh reads observations, in seconds. `null` restores the default of 2592000 (30 days). Only a draft can change it.
   */
  "lookbackSeconds"?: Int64;
  /**
   * The metric the bandit optimizes. It must read a warehouse metric source. Only a draft can change it.
   */
  "metricId"?: string;
  /**
   * The bandit's name.
   */
  "name"?: string;
  /**
   * The schedule the bandit refreshes on.
   */
  "refreshScheduleId"?: string;
  /**
   * When the bandit ends and serves its fallback. Needs a fallback variant. `null` removes the scheduled end.
   */
  "scheduledEndAt"?: Date;
  /**
   * The subject type the bandit randomizes and measures by. Only a draft can change it.
   */
  "subjectTypeId"?: string;
  /**
   * Replaces the bandit's tags and keeps its teams. Allowed in any status.
   */
  "tags"?: Array<string>;
  /**
   * Replaces the bandit's teams and keeps its tags. Allowed in any status.
   */
  "teams"?: Array<string>;
  /**
   * Replaces the variants the bandit uses. Once the bandit has started, only `is_fallback` can change, so send the current arms with a different `is_fallback`. Only a draft can have an empty list.
   */
  "variants"?: Array<ExperimentsBanditVariantInputV2>;
  /**
   * How long the bandit serves its arms equally after it starts, in seconds. `null` removes the warmup. Only a draft can change it.
   */
  "warmupSeconds"?: Int64;

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
    aggregationWindowSeconds: {
      baseName: "aggregation_window_seconds",
      type: "number",
      format: "int64",
    },
    bayesianPrior: {
      baseName: "bayesian_prior",
      type: "ExperimentsBanditBayesianPriorInputV2",
    },
    datadogFlagConfiguration: {
      baseName: "datadog_flag_configuration",
      type: "ExperimentsBanditFlagConfigurationInputV2",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    exposureSqlModelId: {
      baseName: "exposure_sql_model_id",
      type: "string",
      format: "uuid",
    },
    lookbackSeconds: {
      baseName: "lookback_seconds",
      type: "number",
      format: "int64",
    },
    metricId: {
      baseName: "metric_id",
      type: "string",
      format: "uuid",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    refreshScheduleId: {
      baseName: "refresh_schedule_id",
      type: "string",
    },
    scheduledEndAt: {
      baseName: "scheduled_end_at",
      type: "Date",
      format: "date-time",
    },
    subjectTypeId: {
      baseName: "subject_type_id",
      type: "string",
      format: "uuid",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    teams: {
      baseName: "teams",
      type: "Array<string>",
    },
    variants: {
      baseName: "variants",
      type: "Array<ExperimentsBanditVariantInputV2>",
    },
    warmupSeconds: {
      baseName: "warmup_seconds",
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
    return ExperimentsPatchBanditV2RequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
