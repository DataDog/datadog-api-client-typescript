/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsDatasetVersionDataAttributes } from "./LLMObsDatasetVersionDataAttributes";
import { LLMObsDatasetVersionType } from "./LLMObsDatasetVersionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for an LLM Observability dataset version.
 */
export class LLMObsDatasetVersionData {
  /**
   * Attributes of an LLM Observability dataset version.
   */
  "attributes": LLMObsDatasetVersionDataAttributes;
  /**
   * Unique identifier of the dataset version.
   */
  "id": string;
  /**
   * Resource type of an LLM Observability dataset version.
   */
  "type": LLMObsDatasetVersionType;

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
      type: "LLMObsDatasetVersionDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsDatasetVersionType",
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
    return LLMObsDatasetVersionData.attributeTypeMap;
  }

  public constructor() {}
}
