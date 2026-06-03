/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsExperimentStatus } from "./LLMObsExperimentStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for updating an LLM Observability experiment.
 */
export class LLMObsExperimentUpdateDataAttributesRequest {
  /**
   * Updated identifier of the dataset used in this experiment.
   */
  "datasetId"?: string;
  /**
   * Updated description of the experiment.
   */
  "description"?: string;
  /**
   * Error message describing why the experiment failed, if applicable.
   */
  "error"?: string;
  /**
   * Updated arbitrary metadata associated with the experiment.
   */
  "metadata"?: { [key: string]: any };
  /**
   * Updated name of the experiment.
   */
  "name"?: string;
  /**
   * Execution status of an LLM Observability experiment.
   */
  "status"?: LLMObsExperimentStatus;

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
    datasetId: {
      baseName: "dataset_id",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    error: {
      baseName: "error",
      type: "string",
    },
    metadata: {
      baseName: "metadata",
      type: "{ [key: string]: any; }",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "LLMObsExperimentStatus",
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
    return LLMObsExperimentUpdateDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
