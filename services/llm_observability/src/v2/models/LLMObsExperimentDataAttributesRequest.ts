import { AttributeTypeMap } from "@datadog/datadog-api-client";

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
  "datasetId": string;
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
   * Identifier of the project this experiment belongs to.
   */
  "projectId": string;
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
      required: true,
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
    projectId: {
      baseName: "project_id",
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
    return LLMObsExperimentDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
