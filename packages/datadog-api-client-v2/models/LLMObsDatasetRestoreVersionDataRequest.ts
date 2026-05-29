/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsDatasetRestoreVersionDataAttributesRequest } from "./LLMObsDatasetRestoreVersionDataAttributesRequest";
import { LLMObsDatasetType } from "./LLMObsDatasetType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for restoring an LLM Observability dataset to a previous version.
 */
export class LLMObsDatasetRestoreVersionDataRequest {
  /**
   * Attributes for restoring an LLM Observability dataset to a previous version.
   */
  "attributes": LLMObsDatasetRestoreVersionDataAttributesRequest;
  /**
   * Unique identifier of the dataset to restore.
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
      type: "LLMObsDatasetRestoreVersionDataAttributesRequest",
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
    return LLMObsDatasetRestoreVersionDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
