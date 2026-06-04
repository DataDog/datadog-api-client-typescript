/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating an LLM Observability experiment.
 */
export class LLMObsExperimentDataAttributesRequest {
  /**
   * Configuration parameters for the experiment.
   */
  "config"?: { [key: string]: any };
  /**
   * Identifier of the dataset used in this experiment.
   */
  "datasetId"?: string;
  /**
   * Version of the dataset to use. Defaults to the current version if not specified.
   */
  "datasetVersion"?: number;
  /**
   * Description of the experiment.
   */
  "description"?: string;
  /**
   * Whether to ensure the experiment name is unique. Defaults to `true`.
   */
  "ensureUnique"?: boolean;
  /**
   * Arbitrary metadata associated with the experiment.
   */
  "metadata"?: { [key: string]: any };
  /**
   * Name of the experiment.
   */
  "name": string;
  /**
   * Identifier of the parent (baseline) experiment this experiment is run against.
   */
  "parentExperimentId"?: string;
  /**
   * Identifier of the project this experiment belongs to.
   */
  "projectId": string;
  /**
   * Number of runs configured for this experiment.
   */
  "runCount"?: number;

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
    config: {
      baseName: "config",
      type: "{ [key: string]: any; }",
    },
    datasetId: {
      baseName: "dataset_id",
      type: "string",
    },
    datasetVersion: {
      baseName: "dataset_version",
      type: "number",
      format: "int64",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    ensureUnique: {
      baseName: "ensure_unique",
      type: "boolean",
    },
    metadata: {
      baseName: "metadata",
      type: "{ [key: string]: any; }",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LLMObsExperimentDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
