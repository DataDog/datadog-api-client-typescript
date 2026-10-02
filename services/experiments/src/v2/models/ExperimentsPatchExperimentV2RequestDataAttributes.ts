import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsCreateExperimentV2RequestDataAttributesDecisionMetricsItems } from "./ExperimentsCreateExperimentV2RequestDataAttributesDecisionMetricsItems";
import { ExperimentsCreateExperimentV2RequestDataAttributesRelatedLinksItems } from "./ExperimentsCreateExperimentV2RequestDataAttributesRelatedLinksItems";
import { ExperimentsCreateExperimentV2RequestDataAttributesSplitByPropertiesItems } from "./ExperimentsCreateExperimentV2RequestDataAttributesSplitByPropertiesItems";
import { ExperimentsCreateExperimentV2RequestDataAttributesStructuredMetadataItems } from "./ExperimentsCreateExperimentV2RequestDataAttributesStructuredMetadataItems";
import { ExperimentsCreateExperimentV2RequestDataAttributesVariantsItems } from "./ExperimentsCreateExperimentV2RequestDataAttributesVariantsItems";
import { ExperimentsCreateExperimentV2RequestDataAttributesWarehouseExposureConfiguration } from "./ExperimentsCreateExperimentV2RequestDataAttributesWarehouseExposureConfiguration";
import { ExperimentsPatchExperimentV2RequestDataAttributesDatadogFlagConfiguration } from "./ExperimentsPatchExperimentV2RequestDataAttributesDatadogFlagConfiguration";
import { ExperimentsPatchExperimentV2ResponseDataAttributesTrafficExposure } from "./ExperimentsPatchExperimentV2ResponseDataAttributesTrafficExposure";

/**
 * Fields supplied to update the experiment.
 */
export class ExperimentsPatchExperimentV2RequestDataAttributes {
  /**
   * End of the time window for experiment assignments.
   */
  "assignmentsEndDate"?: Date;
  /**
   * Start of the time window for experiment assignments.
   */
  "assignmentsStartDate"?: Date;
  /**
   * Feature flag, environment, and targeting configuration for the experiment.
   */
  "datadogFlagConfiguration"?: ExperimentsPatchExperimentV2RequestDataAttributesDatadogFlagConfiguration;
  /**
   * Metrics used to decide the experiment outcome.
   */
  "decisionMetrics"?: Array<ExperimentsCreateExperimentV2RequestDataAttributesDecisionMetricsItems>;
  /**
   * End of the time window for metric events.
   */
  "eventsEndDate"?: Date;
  /**
   * Start of the time window for metric events.
   */
  "eventsStartDate"?: Date;
  /**
   * Expected effect that the experiment is intended to test.
   */
  "hypothesis"?: string;
  /**
   * Metadata retained for resources imported from another system.
   */
  "migrationMetadata"?: any;
  /**
   * Display name of the experiment.
   */
  "name"?: string;
  /**
   * Links to supporting material for the experiment.
   */
  "relatedLinks"?: Array<ExperimentsCreateExperimentV2RequestDataAttributesRelatedLinksItems>;
  /**
   * Complete replacement for the Datadog split-by selection. Identify each property by column_name. Omit this field to leave the selection unchanged.
   */
  "splitByProperties"?: Array<ExperimentsCreateExperimentV2RequestDataAttributesSplitByPropertiesItems>;
  /**
   * Metadata values to update. Omit this field, send null, or send an empty array to leave metadata unchanged.
   */
  "structuredMetadata"?: Array<ExperimentsCreateExperimentV2RequestDataAttributesStructuredMetadataItems>;
  /**
   * ID of the subject type used by this configuration.
   */
  "subjectTypeId"?: string;
  /**
   * Summary text recorded for the experiment.
   */
  "summary"?: string;
  /**
   * Tags attached to the experiment.
   */
  "tags"?: Array<string>;
  /**
   * Teams associated with the experiment.
   */
  "teams"?: Array<string>;
  /**
   * Traffic exposure fraction or schedule configured for the experiment.
   */
  "trafficExposure"?: ExperimentsPatchExperimentV2ResponseDataAttributesTrafficExposure;
  /**
   * Variants configured for the experiment.
   */
  "variants"?: Array<ExperimentsCreateExperimentV2RequestDataAttributesVariantsItems>;
  /**
   * Warehouse model and experiment key used to read assignment data.
   */
  "warehouseExposureConfiguration"?: ExperimentsCreateExperimentV2RequestDataAttributesWarehouseExposureConfiguration;
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
    assignmentsEndDate: {
      baseName: "assignments_end_date",
      type: "Date",
      format: "date-time",
    },
    assignmentsStartDate: {
      baseName: "assignments_start_date",
      type: "Date",
      format: "date-time",
    },
    datadogFlagConfiguration: {
      baseName: "datadog_flag_configuration",
      type: "ExperimentsPatchExperimentV2RequestDataAttributesDatadogFlagConfiguration",
    },
    decisionMetrics: {
      baseName: "decision_metrics",
      type: "Array<ExperimentsCreateExperimentV2RequestDataAttributesDecisionMetricsItems>",
    },
    eventsEndDate: {
      baseName: "events_end_date",
      type: "Date",
      format: "date-time",
    },
    eventsStartDate: {
      baseName: "events_start_date",
      type: "Date",
      format: "date-time",
    },
    hypothesis: {
      baseName: "hypothesis",
      type: "string",
    },
    migrationMetadata: {
      baseName: "migration_metadata",
      type: "any",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    relatedLinks: {
      baseName: "related_links",
      type: "Array<ExperimentsCreateExperimentV2RequestDataAttributesRelatedLinksItems>",
    },
    splitByProperties: {
      baseName: "split_by_properties",
      type: "Array<ExperimentsCreateExperimentV2RequestDataAttributesSplitByPropertiesItems>",
    },
    structuredMetadata: {
      baseName: "structured_metadata",
      type: "Array<ExperimentsCreateExperimentV2RequestDataAttributesStructuredMetadataItems>",
    },
    subjectTypeId: {
      baseName: "subject_type_id",
      type: "string",
    },
    summary: {
      baseName: "summary",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    teams: {
      baseName: "teams",
      type: "Array<string>",
    },
    trafficExposure: {
      baseName: "traffic_exposure",
      type: "ExperimentsPatchExperimentV2ResponseDataAttributesTrafficExposure",
    },
    variants: {
      baseName: "variants",
      type: "Array<ExperimentsCreateExperimentV2RequestDataAttributesVariantsItems>",
    },
    warehouseExposureConfiguration: {
      baseName: "warehouse_exposure_configuration",
      type: "ExperimentsCreateExperimentV2RequestDataAttributesWarehouseExposureConfiguration",
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
    return ExperimentsPatchExperimentV2RequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
