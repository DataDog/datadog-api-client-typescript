import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsPatchProtocolAnalysisPlanInput } from "./ExperimentsPatchProtocolAnalysisPlanInput";
import { ExperimentsPatchProtocolEnforcementInput } from "./ExperimentsPatchProtocolEnforcementInput";
import { ExperimentsPatchProtocolExposureScheduleInput } from "./ExperimentsPatchProtocolExposureScheduleInput";
import { ExperimentsProtocolMetricGroupInput } from "./ExperimentsProtocolMetricGroupInput";
import { ExperimentsProtocolTargetingRuleInput } from "./ExperimentsProtocolTargetingRuleInput";
import { ExperimentsPublicProtocolResponseDataAttributesAssignmentSourceDefaultPropertiesItems } from "./ExperimentsPublicProtocolResponseDataAttributesAssignmentSourceDefaultPropertiesItems";

/**
 * Partial protocol update. Omitted attributes remain unchanged. Published protocols accept only name, description, and migration_metadata; archived protocols reject updates.
 */
export class ExperimentsPatchExperimentProtocolRequestDataAttributes {
  /**
   * Partial statistical settings. Omitted fields remain unchanged. Null clears the whole plan. Null clears nullable fields; null or an empty string clears confidence_interval_method.
   */
  "analysisPlan"?: ExperimentsPatchProtocolAnalysisPlanInput;
  /**
   * Assignment properties. Omission or null preserves them; an array replaces them.
   */
  "assignmentSourceDefaultProperties"?: Array<ExperimentsPublicProtocolResponseDataAttributesAssignmentSourceDefaultPropertiesItems>;
  /**
   * ID of the assignment source selected by the protocol. Omission or null keeps the current value. An empty string clears it.
   */
  "assignmentSourceId"?: string;
  /**
   * Default experiment duration supplied by the protocol, in days. Omission preserves it; null clears it. Sets analysis_plan.target_duration_days on experiments created from this protocol.
   */
  "defaultDurationDays"?: number;
  /**
   * Description. Empty string clears it; omission or null preserves it.
   */
  "description"?: string;
  /**
   * Partial lock map. Omitted fields remain unchanged. Null clears the whole map. Empty or null field values become `EDITABLE`, except `subject_type`, `flag_source`, and `confidence_interval_method`, which remain `LOCKED`.
   */
  "enforcement"?: ExperimentsPatchProtocolEnforcementInput;
  /**
   * ID of the feature flag environment used by the experiment. Omission or null keeps the current value. An empty string clears it.
   */
  "environmentId"?: string;
  /**
   * Partial traffic schedule. Omitted fields remain unchanged. Null clears the whole schedule. Null clears nullable fields and rollout_steps; null sets strategy to an empty string and `autostart` to false.
   */
  "exposureSchedule"?: ExperimentsPatchProtocolExposureScheduleInput;
  /**
   * Whether the protocol requires a duration before an experiment can start. Omission or null preserves it.
   */
  "isDurationRequiredToStart"?: boolean;
  /**
   * Whether the protocol requires equal traffic allocation across variants. Omission or null preserves it.
   */
  "isEqualSplitEnforced"?: boolean;
  /**
   * Whether the protocol limits the number of metrics. Omission or null preserves it.
   */
  "isMetricLimitEnabled"?: boolean;
  /**
   * Whether the protocol enforces a minimum experiment duration. Omission or null preserves it.
   */
  "isMinimumDurationEnabled"?: boolean;
  /**
   * Metric groups. Omission or null preserves them; an array replaces them.
   */
  "metricGroups"?: Array<ExperimentsProtocolMetricGroupInput>;
  /**
   * Maximum number of metrics allowed by the protocol. Omission preserves it; null clears it.
   */
  "metricLimit"?: number;
  /**
   * Metadata for imported resources. Must encode to at most 4096 bytes. Null clears it; omission preserves it on update.
   */
  "migrationMetadata"?: { [key: string]: any };
  /**
   * Minimum duration unit, `DAYS` or `WEEKS`. Empty string clears it. Omission or null preserves it.
   */
  "minimumDurationUnit"?: string;
  /**
   * Minimum experiment duration in the specified unit. Omission preserves it; null clears it.
   */
  "minimumDurationValue"?: number;
  /**
   * Protocol name. Leading and trailing spaces are removed. The trimmed name must contain 1 to 255 characters.
   */
  "name"?: string;
  /**
   * ID of the primary metric supplied by the protocol. Omission or null keeps the current value. An empty string clears it.
   */
  "primaryMetricId"?: string;
  /**
   * ID of the subject type used by this configuration. Omission or null keeps the current value. An empty string clears it.
   */
  "subjectTypeId"?: string;
  /**
   * Targeting rules. Omission or null preserves them; an array replaces them.
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
      type: "ExperimentsPatchProtocolAnalysisPlanInput",
    },
    assignmentSourceDefaultProperties: {
      baseName: "assignment_source_default_properties",
      type: "Array<ExperimentsPublicProtocolResponseDataAttributesAssignmentSourceDefaultPropertiesItems>",
    },
    assignmentSourceId: {
      baseName: "assignment_source_id",
      type: "string",
    },
    defaultDurationDays: {
      baseName: "default_duration_days",
      type: "number",
      format: "int64",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    enforcement: {
      baseName: "enforcement",
      type: "ExperimentsPatchProtocolEnforcementInput",
    },
    environmentId: {
      baseName: "environment_id",
      type: "string",
    },
    exposureSchedule: {
      baseName: "exposure_schedule",
      type: "ExperimentsPatchProtocolExposureScheduleInput",
    },
    isDurationRequiredToStart: {
      baseName: "is_duration_required_to_start",
      type: "boolean",
    },
    isEqualSplitEnforced: {
      baseName: "is_equal_split_enforced",
      type: "boolean",
    },
    isMetricLimitEnabled: {
      baseName: "is_metric_limit_enabled",
      type: "boolean",
    },
    isMinimumDurationEnabled: {
      baseName: "is_minimum_duration_enabled",
      type: "boolean",
    },
    metricGroups: {
      baseName: "metric_groups",
      type: "Array<ExperimentsProtocolMetricGroupInput>",
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
    name: {
      baseName: "name",
      type: "string",
    },
    primaryMetricId: {
      baseName: "primary_metric_id",
      type: "string",
    },
    subjectTypeId: {
      baseName: "subject_type_id",
      type: "string",
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
    return ExperimentsPatchExperimentProtocolRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
