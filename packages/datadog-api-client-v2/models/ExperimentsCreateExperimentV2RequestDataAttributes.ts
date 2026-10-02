/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfiguration } from "./ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfiguration";
import { ExperimentsCreateExperimentV2RequestDataAttributesDecisionMetricsItems } from "./ExperimentsCreateExperimentV2RequestDataAttributesDecisionMetricsItems";
import { ExperimentsCreateExperimentV2RequestDataAttributesRelatedLinksItems } from "./ExperimentsCreateExperimentV2RequestDataAttributesRelatedLinksItems";
import { ExperimentsCreateExperimentV2RequestDataAttributesSplitByPropertiesItems } from "./ExperimentsCreateExperimentV2RequestDataAttributesSplitByPropertiesItems";
import { ExperimentsCreateExperimentV2RequestDataAttributesStructuredMetadataItems } from "./ExperimentsCreateExperimentV2RequestDataAttributesStructuredMetadataItems";
import { ExperimentsCreateExperimentV2RequestDataAttributesVariantsItems } from "./ExperimentsCreateExperimentV2RequestDataAttributesVariantsItems";
import { ExperimentsCreateExperimentV2RequestDataAttributesWarehouseExposureConfiguration } from "./ExperimentsCreateExperimentV2RequestDataAttributesWarehouseExposureConfiguration";
import { ExperimentsPatchExperimentV2ResponseDataAttributesTrafficExposure } from "./ExperimentsPatchExperimentV2ResponseDataAttributesTrafficExposure";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration and descriptive fields for the new experiment draft.
 */
export class ExperimentsCreateExperimentV2RequestDataAttributes {
  /**
   * End of the window assignments are read from. Optional; must be after assignments_start_date.
   */
  "assignmentsEndDate"?: Date;
  /**
   * Start of the window assignments are read from. Optional.
   */
  "assignmentsStartDate"?: Date;
  /**
   * Feature flag, environment, and targeting configuration for a Datadog experiment.
   */
  "datadogFlagConfiguration"?: ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfiguration;
  /**
   * Metrics selected to support the experiment decision.
   */
  "decisionMetrics"?: Array<ExperimentsCreateExperimentV2RequestDataAttributesDecisionMetricsItems>;
  /**
   * End of the window metric events are read from. Optional; must be after events_start_date.
   */
  "eventsEndDate"?: Date;
  /**
   * Start of the window metric events are read from. Optional; must fall within the assignments window.
   */
  "eventsStartDate"?: Date;
  /**
   * What the experiment is expected to show. Optional and free-form.
   */
  "hypothesis"?: string;
  /**
   * Metadata associated with migration of this resource.
   */
  "migrationMetadata"?: any;
  /**
   * Display name for the experiment. The only required attribute: a request carrying nothing but a name is accepted.
   */
  "name": string;
  /**
   * Published protocol whose defaults create this draft. May be combined with hypothesis, tags, teams, related links, and date overrides. Omit subject_type_id, decision_metrics, variants, warehouse_exposure_configuration, datadog_flag_configuration, traffic_exposure, and structured_metadata.
   */
  "protocolId"?: string;
  /**
   * External links associated with the experiment.
   */
  "relatedLinks"?: Array<ExperimentsCreateExperimentV2RequestDataAttributesRelatedLinksItems>;
  /**
   * Complete Datadog split-by selection. Identify each property by column_name. Omit this field to copy organization defaults.
   */
  "splitByProperties"?: Array<ExperimentsCreateExperimentV2RequestDataAttributesSplitByPropertiesItems>;
  /**
   * Custom metadata fields and their values for the experiment.
   */
  "structuredMetadata"?: Array<ExperimentsCreateExperimentV2RequestDataAttributesStructuredMetadataItems>;
  /**
   * Canonical ID of an existing subject type. Optional; defaults to the organization default.
   */
  "subjectTypeId"?: string;
  /**
   * Summary of the experiment. Optional and free-form.
   */
  "summary"?: string;
  /**
   * Non-team tag names to apply. Optional.
   */
  "tags"?: Array<string>;
  /**
   * Team handles that own the experiment. Optional.
   */
  "teams"?: Array<string>;
  /**
   * Traffic exposure fraction or schedule configured for the experiment.
   */
  "trafficExposure"?: ExperimentsPatchExperimentV2ResponseDataAttributesTrafficExposure;
  /**
   * Variants selected for the experiment and their traffic allocations.
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
      type: "ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfiguration",
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
      required: true,
    },
    protocolId: {
      baseName: "protocol_id",
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
      format: "uuid",
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
    return ExperimentsCreateExperimentV2RequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
