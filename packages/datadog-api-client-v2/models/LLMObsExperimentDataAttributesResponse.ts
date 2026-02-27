/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an LLM Observability experiment.
 */
export class LLMObsExperimentDataAttributesResponse {
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
   * Description of the experiment.
   */
  "description": string | null;
  /**
   * Arbitrary metadata associated with the experiment.
   */
  "metadata": { [key: string]: any } | null;
  /**
   * Name of the experiment.
   */
  "name": string;
  /**
   * Identifier of the project this experiment belongs to.
   */
  "projectId": string;
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
    description: {
      baseName: "description",
      type: "string",
      required: true,
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
    projectId: {
      baseName: "project_id",
      type: "string",
      required: true,
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
