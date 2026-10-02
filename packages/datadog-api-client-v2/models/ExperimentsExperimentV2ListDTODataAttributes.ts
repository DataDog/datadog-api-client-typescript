/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsCreateExperimentV2RequestDataAttributesRelatedLinksItems } from "./ExperimentsCreateExperimentV2RequestDataAttributesRelatedLinksItems";
import { ExperimentsExperimentV2DTODataAttributesStatus } from "./ExperimentsExperimentV2DTODataAttributesStatus";
import { ExperimentsPatchExperimentV2ResponseDataAttributesConclusion } from "./ExperimentsPatchExperimentV2ResponseDataAttributesConclusion";
import { ExperimentsStructuredMetadataResponse } from "./ExperimentsStructuredMetadataResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Summary fields for an experiment returned in a list.
 */
export class ExperimentsExperimentV2ListDTODataAttributes {
  /**
   * End of the window used to read experiment assignments.
   */
  "assignmentsEndDate"?: Date;
  /**
   * Start of the window used to read experiment assignments.
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
   * Time when the experiment was created.
   */
  "createdAt"?: Date;
  /**
   * End of the window used to read metric events.
   */
  "eventsEndDate"?: Date;
  /**
   * Start of the window used to read metric events.
   */
  "eventsStartDate"?: Date;
  /**
   * Kind of experiment. STANDARD is an ordinary experiment. Other values, such as CANARY and HOLDOUT, identify experiments owned by another workflow. New kinds may be added; treat unknown values as non-standard.
   */
  "experimentType"?: string;
  /**
   * Expected effect that the experiment is designed to test.
   */
  "hypothesis"?: string;
  /**
   * Metadata associated with migration of this resource.
   */
  "migrationMetadata"?: any;
  /**
   * Display name of the experiment.
   */
  "name"?: string;
  /**
   * Suffix used for the experiment tables in the analysis pipeline.
   */
  "pipelineTableSuffix"?: string;
  /**
   * Identifier of the protocol associated with the experiment.
   */
  "protocolId"?: string;
  /**
   * External links associated with the experiment.
   */
  "relatedLinks"?: Array<ExperimentsCreateExperimentV2RequestDataAttributesRelatedLinksItems>;
  /**
   * Time when the experiment results were last updated.
   */
  "resultsLastUpdated"?: Date;
  /**
   * Current stage in the experiment lifecycle.
   */
  "status"?: ExperimentsExperimentV2DTODataAttributesStatus;
  /**
   * Custom metadata fields and their values for the experiment.
   */
  "structuredMetadata"?: Array<ExperimentsStructuredMetadataResponse>;
  /**
   * Identifier of the subject type used for experiment assignments.
   */
  "subjectTypeId"?: string;
  /**
   * Free-form summary of the experiment.
   */
  "summary"?: string;
  /**
   * Tag names associated with the experiment.
   */
  "tags"?: Array<string>;
  /**
   * Team handles associated with the experiment.
   */
  "teams"?: Array<string>;
  /**
   * Time when the experiment was last updated.
   */
  "updatedAt"?: Date;

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
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
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
    return ExperimentsExperimentV2ListDTODataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
