/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsDatasetDataAttributesResponse } from "./LLMObsDatasetDataAttributesResponse";
import { LLMObsDatasetType } from "./LLMObsDatasetType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for an LLM Observability dataset.
 */
export class LLMObsDatasetDataResponse {
  /**
   * Attributes of an LLM Observability dataset.
   */
  "attributes": LLMObsDatasetDataAttributesResponse;
  /**
   * Unique identifier of the dataset.
   */
  "id": string;
  /**
   * Resource type of an LLM Observability dataset.
   */
  "type": LLMObsDatasetType;

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
    attributes: {
      baseName: "attributes",
      type: "LLMObsDatasetDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsDatasetType",
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
    return LLMObsDatasetDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
