import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsCreateExperimentV2RequestDataAttributesDecisionMetricsItems } from "./ExperimentsCreateExperimentV2RequestDataAttributesDecisionMetricsItems";
import { ExperimentsCreateExperimentV2RequestDataAttributesRelatedLinksItems } from "./ExperimentsCreateExperimentV2RequestDataAttributesRelatedLinksItems";
import { ExperimentsExperimentV2DTODataAttributesSplitByPropertiesItems } from "./ExperimentsExperimentV2DTODataAttributesSplitByPropertiesItems";
import { ExperimentsExperimentV2DTODataAttributesStatus } from "./ExperimentsExperimentV2DTODataAttributesStatus";
import { ExperimentsExperimentV2DTODataAttributesVariantsItems } from "./ExperimentsExperimentV2DTODataAttributesVariantsItems";
import { ExperimentsPatchExperimentV2ResponseDataAttributesConclusion } from "./ExperimentsPatchExperimentV2ResponseDataAttributesConclusion";
import { ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfiguration } from "./ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfiguration";
import { ExperimentsPatchExperimentV2ResponseDataAttributesTrafficExposure } from "./ExperimentsPatchExperimentV2ResponseDataAttributesTrafficExposure";
import { ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfiguration } from "./ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfiguration";
import { ExperimentsStructuredMetadataResponse } from "./ExperimentsStructuredMetadataResponse";

/**
 * Details of the experiment.
 */
export class ExperimentsPatchExperimentV2ResponseDataAttributes {
  /**
   * End of the time window for experiment assignments.
   */
  "assignmentsEndDate"?: Date;
  /**
   * Start of the time window for experiment assignments.
   */
  "assignmentsStartDate"?: Date;
  /**
   * Time when the experiment was concluded.
   */
  "concludedAt"?: Date;
  /**
   * Outcome and supporting text recorded when the experiment is concluded.
   */
  "conclusion"?: ExperimentsPatchExperimentV2ResponseDataAttributesConclusion;
  /**
   * Time when this resource was created.
   */
  "createdAt"?: Date;
  /**
   * Feature flag, environment, and targeting configuration for the experiment.
   */
  "datadogFlagConfiguration"?: ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfiguration;
  /**
   * Metrics used to decide the experiment outcome.
   */
  "decisionMetrics"?: Array<ExperimentsCreateExperimentV2RequestDataAttributesDecisionMetricsItems>;
  /**
   * Key of the variant selected in the experiment decision.
   */
  "decisionVariantKey"?: string;
  /**
   * End of the time window for metric events.
   */
  "eventsEndDate"?: Date;
  /**
   * Start of the time window for metric events.
   */
  "eventsStartDate"?: Date;
  /**
   * Kind of experiment. STANDARD is an ordinary experiment. Other values, such as CANARY and HOLDOUT, identify experiments owned by another workflow. New kinds may be added; treat unknown values as non-standard.
   */
  "experimentType"?: string;
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
   * Suffix used to identify the experiment's pipeline output table.
   */
  "pipelineTableSuffix"?: string;
  /**
   * ID of the protocol associated with the experiment.
   */
  "protocolId"?: string;
  /**
   * Links to supporting material for the experiment.
   */
  "relatedLinks"?: Array<ExperimentsCreateExperimentV2RequestDataAttributesRelatedLinksItems>;
  /**
   * Time of the most recent update to the experiment's results.
   */
  "resultsLastUpdated"?: Date;
  /**
   * Properties used to split the experiment results into groups.
   */
  "splitByProperties"?: Array<ExperimentsExperimentV2DTODataAttributesSplitByPropertiesItems>;
  /**
   * Current stage in the experiment lifecycle.
   */
  "status"?: ExperimentsExperimentV2DTODataAttributesStatus;
  /**
   * Values of structured metadata fields attached to the experiment.
   */
  "structuredMetadata"?: Array<ExperimentsStructuredMetadataResponse>;
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
   * Time when this resource was last updated.
   */
  "updatedAt"?: Date;
  /**
   * Variants configured for the experiment.
   */
  "variants"?: Array<ExperimentsExperimentV2DTODataAttributesVariantsItems>;
  /**
   * Warehouse exposure model and settings used to identify experiment assignments.
   */
  "warehouseExposureConfiguration"?: ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfiguration;
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
    concludedAt: {
      baseName: "concluded_at",
      type: "Date",
      format: "date-time",
    },
    conclusion: {
      baseName: "conclusion",
      type: "ExperimentsPatchExperimentV2ResponseDataAttributesConclusion",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    datadogFlagConfiguration: {
      baseName: "datadog_flag_configuration",
      type: "ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfiguration",
    },
    decisionMetrics: {
      baseName: "decision_metrics",
      type: "Array<ExperimentsCreateExperimentV2RequestDataAttributesDecisionMetricsItems>",
    },
    decisionVariantKey: {
      baseName: "decision_variant_key",
      type: "string",
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
    experimentType: {
      baseName: "experiment_type",
      type: "string",
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
    pipelineTableSuffix: {
      baseName: "pipeline_table_suffix",
      type: "string",
    },
    protocolId: {
      baseName: "protocol_id",
      type: "string",
    },
    relatedLinks: {
      baseName: "related_links",
      type: "Array<ExperimentsCreateExperimentV2RequestDataAttributesRelatedLinksItems>",
    },
    resultsLastUpdated: {
      baseName: "results_last_updated",
      type: "Date",
      format: "date-time",
    },
    splitByProperties: {
      baseName: "split_by_properties",
      type: "Array<ExperimentsExperimentV2DTODataAttributesSplitByPropertiesItems>",
    },
    status: {
      baseName: "status",
      type: "ExperimentsExperimentV2DTODataAttributesStatus",
    },
    structuredMetadata: {
      baseName: "structured_metadata",
      type: "Array<ExperimentsStructuredMetadataResponse>",
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
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
    },
    variants: {
      baseName: "variants",
      type: "Array<ExperimentsExperimentV2DTODataAttributesVariantsItems>",
    },
    warehouseExposureConfiguration: {
      baseName: "warehouse_exposure_configuration",
      type: "ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfiguration",
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
    return ExperimentsPatchExperimentV2ResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
