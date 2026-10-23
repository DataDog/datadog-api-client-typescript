/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsProtocolAnalysisPlanInput } from "./ExperimentsProtocolAnalysisPlanInput";
import { ExperimentsProtocolExposureScheduleInput } from "./ExperimentsProtocolExposureScheduleInput";
import { ExperimentsProtocolMetricGroupInput } from "./ExperimentsProtocolMetricGroupInput";
import { ExperimentsProtocolTargetingRuleInput } from "./ExperimentsProtocolTargetingRuleInput";
import { ExperimentsPublicProtocolResponseDataAttributesAssignmentSourceDefaultPropertiesItems } from "./ExperimentsPublicProtocolResponseDataAttributesAssignmentSourceDefaultPropertiesItems";
import { ExperimentsReplaceProtocolEnforcementInput } from "./ExperimentsReplaceProtocolEnforcementInput";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Replace a published protocol template. Omitted optional template fields are cleared. Omitted enforcement and migration_metadata are preserved. Enabled limits require their values; allocation settings require environment_id.
 */
export class ExperimentsReplaceExperimentProtocolRequestDataAttributes {
  /**
   * Statistical settings. Use `default_duration_days` for duration; `target_duration_days` is not accepted here.
   */
  "analysisPlan"?: ExperimentsProtocolAnalysisPlanInput;
  /**
   * Assignment properties.
   */
  "assignmentSourceDefaultProperties"?: Array<ExperimentsPublicProtocolResponseDataAttributesAssignmentSourceDefaultPropertiesItems>;
  /**
   * ID of the assignment source selected by the protocol.
   */
  "assignmentSourceId"?: string;
  /**
   * Default experiment duration supplied by the protocol, in days.
   */
  "defaultDurationDays"?: number;
  /**
   * Complete lock map. Omit this object to preserve current locks. Null is rejected; every field is required.
   */
  "enforcement"?: ExperimentsReplaceProtocolEnforcementInput;
  /**
   * ID of the feature flag environment used by the experiment.
   */
  "environmentId"?: string;
  /**
   * Traffic schedule. Publishing and replacement require `NO_ROLLOUT` with exactly one step, or `UNIFORM_INTERVALS` with a positive selection interval and at least one step. Requires `environment_id`.
   */
  "exposureSchedule"?: ExperimentsProtocolExposureScheduleInput;
  /**
   * Whether the protocol requires a duration before an experiment can start.
   */
  "isDurationRequiredToStart": boolean;
  /**
   * Whether the protocol requires equal traffic allocation across variants.
   */
  "isEqualSplitEnforced": boolean;
  /**
   * Whether the protocol limits the number of metrics.
   */
  "isMetricLimitEnabled": boolean;
  /**
   * Whether the protocol enforces a minimum experiment duration.
   */
  "isMinimumDurationEnabled": boolean;
  /**
   * Metric groups.
   */
  "metricGroups": Array<ExperimentsProtocolMetricGroupInput>;
  /**
   * Maximum number of metrics allowed by the protocol.
   */
  "metricLimit"?: number;
  /**
   * Metadata for imported resources. Must encode to at most 4096 bytes. Null clears it; omission preserves it on update.
   */
  "migrationMetadata"?: { [key: string]: any };
  /**
   * Minimum duration unit, DAYS or WEEKS.
   */
  "minimumDurationUnit"?: string;
  /**
   * Minimum experiment duration in the specified unit.
   */
  "minimumDurationValue"?: number;
  /**
   * ID of the primary metric supplied by the protocol.
   */
  "primaryMetricId"?: string;
  /**
   * ID of the subject type used by this configuration.
   */
  "subjectTypeId": string;
  /**
   * Targeting rules.
   */
  "targetingRules"?: Array<ExperimentsProtocolTargetingRuleInput>;

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
    analysisPlan: {
      baseName: "analysis_plan",
      type: "ExperimentsProtocolAnalysisPlanInput",
    },
    assignmentSourceDefaultProperties: {
      baseName: "assignment_source_default_properties",
      type: "Array<ExperimentsPublicProtocolResponseDataAttributesAssignmentSourceDefaultPropertiesItems>",
    },
    assignmentSourceId: {
      baseName: "assignment_source_id",
      type: "string",
      format: "uuid",
    },
    defaultDurationDays: {
      baseName: "default_duration_days",
      type: "number",
      format: "int64",
    },
    enforcement: {
      baseName: "enforcement",
      type: "ExperimentsReplaceProtocolEnforcementInput",
    },
    environmentId: {
      baseName: "environment_id",
      type: "string",
      format: "uuid",
    },
    exposureSchedule: {
      baseName: "exposure_schedule",
      type: "ExperimentsProtocolExposureScheduleInput",
    },
    isDurationRequiredToStart: {
      baseName: "is_duration_required_to_start",
      type: "boolean",
      required: true,
    },
    isEqualSplitEnforced: {
      baseName: "is_equal_split_enforced",
      type: "boolean",
      required: true,
    },
    isMetricLimitEnabled: {
      baseName: "is_metric_limit_enabled",
      type: "boolean",
      required: true,
    },
    isMinimumDurationEnabled: {
      baseName: "is_minimum_duration_enabled",
      type: "boolean",
      required: true,
    },
    metricGroups: {
      baseName: "metric_groups",
      type: "Array<ExperimentsProtocolMetricGroupInput>",
      required: true,
    },
    metricLimit: {
      baseName: "metric_limit",
      type: "number",
      format: "int64",
    },
    migrationMetadata: {
      baseName: "migration_metadata",
      type: "{ [key: string]: any; }",
    },
    minimumDurationUnit: {
      baseName: "minimum_duration_unit",
      type: "string",
    },
    minimumDurationValue: {
      baseName: "minimum_duration_value",
      type: "number",
      format: "int64",
    },
    primaryMetricId: {
      baseName: "primary_metric_id",
      type: "string",
      format: "uuid",
    },
    subjectTypeId: {
      baseName: "subject_type_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    targetingRules: {
      baseName: "targeting_rules",
      type: "Array<ExperimentsProtocolTargetingRuleInput>",
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
    return ExperimentsReplaceExperimentProtocolRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
