/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsExperimentStatus } from "./LLMObsExperimentStatus";
import { LLMObsExperimentUser } from "./LLMObsExperimentUser";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an LLM Observability experiment.
 */
export class LLMObsExperimentDataAttributesResponse {
  /**
   * Pre-computed aggregate metrics for this experiment run, including eval score distributions, token costs, and error rates.
   */
  "aggregateData"?: { [key: string]: any };
  /**
   * User data for the author of an experiment. Only present when `include[user_data]` is `true`.
   */
  "author"?: LLMObsExperimentUser;
  /**
   * Configuration parameters for the experiment.
   */
  "config": { [key: string]: any } | null;
  /**
   * Timestamp when the experiment was created.
   */
  "createdAt": Date;
  /**
   * Identifier of the dataset used in this experiment.
   */
  "datasetId": string;
  /**
   * Name of the dataset used in this experiment.
   * Only present when `include[dataset_names]` is `true`.
   */
  "datasetName"?: string;
  /**
   * Version of the dataset used in this experiment.
   */
  "datasetVersion"?: number;
  /**
   * Timestamp when the experiment was soft-deleted, if applicable.
   */
  "deletedAt"?: Date;
  /**
   * Description of the experiment.
   */
  "description": string | null;
  /**
   * Error message describing why the experiment failed, if applicable.
   */
  "error"?: string;
  /**
   * Logical name of the experiment, shared across all runs of the same pipeline.
   */
  "experiment"?: string;
  /**
   * Arbitrary metadata associated with the experiment.
   */
  "metadata": { [key: string]: any } | null;
  /**
   * Name of the experiment.
   */
  "name": string;
  /**
   * Identifier of the parent (baseline) experiment this experiment was run against, if any.
   */
  "parentExperimentId"?: string;
  /**
   * Identifier of the project this experiment belongs to.
   */
  "projectId": string;
  /**
   * Expected number of runs for this experiment.
   */
  "runCount"?: number;
  /**
   * Execution status of an LLM Observability experiment.
   */
  "status"?: LLMObsExperimentStatus;
  /**
   * Timestamp when the experiment was last updated.
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
    aggregateData: {
      baseName: "aggregate_data",
      type: "{ [key: string]: any; }",
    },
    author: {
      baseName: "author",
      type: "LLMObsExperimentUser",
    },
    config: {
      baseName: "config",
      type: "{ [key: string]: any; }",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    datasetId: {
      baseName: "dataset_id",
      type: "string",
      required: true,
    },
    datasetName: {
      baseName: "dataset_name",
      type: "string",
    },
    datasetVersion: {
      baseName: "dataset_version",
      type: "number",
      format: "int64",
    },
    deletedAt: {
      baseName: "deleted_at",
      type: "Date",
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    error: {
      baseName: "error",
      type: "string",
    },
    experiment: {
      baseName: "experiment",
      type: "string",
    },
    metadata: {
      baseName: "metadata",
      type: "{ [key: string]: any; }",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    parentExperimentId: {
      baseName: "parent_experiment_id",
      type: "string",
    },
    projectId: {
      baseName: "project_id",
      type: "string",
      required: true,
    },
    runCount: {
      baseName: "run_count",
      type: "number",
      format: "int32",
    },
    status: {
      baseName: "status",
      type: "LLMObsExperimentStatus",
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
    return LLMObsExperimentDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
