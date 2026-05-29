import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDatasetRestoreVersionDataAttributesRequest } from "./LLMObsDatasetRestoreVersionDataAttributesRequest";
import { LLMObsDatasetType } from "./LLMObsDatasetType";

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
