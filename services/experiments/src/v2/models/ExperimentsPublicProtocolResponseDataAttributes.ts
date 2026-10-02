import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsPublicProtocolResponseDataAttributesAnalysisPlan } from "./ExperimentsPublicProtocolResponseDataAttributesAnalysisPlan";
import { ExperimentsPublicProtocolResponseDataAttributesAssignmentSourceDefaultPropertiesItems } from "./ExperimentsPublicProtocolResponseDataAttributesAssignmentSourceDefaultPropertiesItems";
import { ExperimentsPublicProtocolResponseDataAttributesEnforcement } from "./ExperimentsPublicProtocolResponseDataAttributesEnforcement";
import { ExperimentsPublicProtocolResponseDataAttributesExposureSchedule } from "./ExperimentsPublicProtocolResponseDataAttributesExposureSchedule";
import { ExperimentsPublicProtocolResponseDataAttributesMetricGroupsItems } from "./ExperimentsPublicProtocolResponseDataAttributesMetricGroupsItems";
import { ExperimentsPublicProtocolResponseDataAttributesStatus } from "./ExperimentsPublicProtocolResponseDataAttributesStatus";
import { ExperimentsPublicProtocolResponseDataAttributesSubjectType } from "./ExperimentsPublicProtocolResponseDataAttributesSubjectType";
import { ExperimentsPublicProtocolResponseDataAttributesTargetingRulesItems } from "./ExperimentsPublicProtocolResponseDataAttributesTargetingRulesItems";

/**
 * Settings and defaults supplied by the protocol.
 */
export class ExperimentsPublicProtocolResponseDataAttributes {
  /**
   * Default statistical settings supplied by the protocol.
   */
  "analysisPlan"?: ExperimentsPublicProtocolResponseDataAttributesAnalysisPlan;
  /**
   * Default properties supplied by the protocol's assignment source.
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
   * Text that explains the protocol.
   */
  "description"?: string;
  /**
   * Controls that determine which protocol settings can be changed in an experiment.
   */
  "enforcement"?: ExperimentsPublicProtocolResponseDataAttributesEnforcement;
  /**
   * ID of the feature flag environment used by the experiment.
   */
  "environmentId"?: string;
  /**
   * Schedule that controls traffic exposure for experiments created from the protocol.
   */
  "exposureSchedule"?: ExperimentsPublicProtocolResponseDataAttributesExposureSchedule;
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
   * Metric groups supplied by the protocol.
   */
  "metricGroups": Array<ExperimentsPublicProtocolResponseDataAttributesMetricGroupsItems>;
  /**
   * Maximum number of metrics allowed by the protocol.
   */
  "metricLimit"?: number;
  /**
   * Metadata retained for resources imported from another system.
   */
  "migrationMetadata"?: any;
  /**
   * Unit used to express the protocol's minimum duration.
   */
  "minimumDurationUnit"?: string;
  /**
   * Minimum experiment duration in the specified unit.
   */
  "minimumDurationValue"?: number;
  /**
   * Display name of the protocol.
   */
  "name": string;
  /**
   * Subject type selected by the protocol.
   */
  "primaryMetric"?: ExperimentsPublicProtocolResponseDataAttributesSubjectType;
  /**
   * ID of the primary metric supplied by the protocol.
   */
  "primaryMetricId"?: string;
  /**
   * Time when the protocol was published.
   */
  "publishedAt"?: Date;
  /**
   * Publication status of the protocol.
   */
  "status": ExperimentsPublicProtocolResponseDataAttributesStatus;
  /**
   * Subject type selected by the protocol.
   */
  "subjectType"?: ExperimentsPublicProtocolResponseDataAttributesSubjectType;
  /**
   * ID of the subject type used by this configuration.
   */
  "subjectTypeId"?: string;
  /**
   * Rules that select subjects for the experiment.
   */
  "targetingRules"?: Array<ExperimentsPublicProtocolResponseDataAttributesTargetingRulesItems>;
  /**
   * RFC3339 update time. Preserve all fractional seconds when passing this value as expected_updated_at.
   */
  "updatedAt": string;
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
      type: "ExperimentsPublicProtocolResponseDataAttributesAnalysisPlan",
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
      type: "ExperimentsPublicProtocolResponseDataAttributesEnforcement",
    },
    environmentId: {
      baseName: "environment_id",
      type: "string",
    },
    exposureSchedule: {
      baseName: "exposure_schedule",
      type: "ExperimentsPublicProtocolResponseDataAttributesExposureSchedule",
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
      type: "Array<ExperimentsPublicProtocolResponseDataAttributesMetricGroupsItems>",
      required: true,
    },
    metricLimit: {
      baseName: "metric_limit",
      type: "number",
      format: "int64",
    },
    migrationMetadata: {
      baseName: "migration_metadata",
      type: "any",
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
      required: true,
    },
    primaryMetric: {
      baseName: "primary_metric",
      type: "ExperimentsPublicProtocolResponseDataAttributesSubjectType",
    },
    primaryMetricId: {
      baseName: "primary_metric_id",
      type: "string",
    },
    publishedAt: {
      baseName: "published_at",
      type: "Date",
      format: "date-time",
    },
    status: {
      baseName: "status",
      type: "ExperimentsPublicProtocolResponseDataAttributesStatus",
      required: true,
    },
    subjectType: {
      baseName: "subject_type",
      type: "ExperimentsPublicProtocolResponseDataAttributesSubjectType",
    },
    subjectTypeId: {
      baseName: "subject_type_id",
      type: "string",
    },
    targetingRules: {
      baseName: "targeting_rules",
      type: "Array<ExperimentsPublicProtocolResponseDataAttributesTargetingRulesItems>",
    },
    updatedAt: {
      baseName: "updated_at",
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
    return ExperimentsPublicProtocolResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
