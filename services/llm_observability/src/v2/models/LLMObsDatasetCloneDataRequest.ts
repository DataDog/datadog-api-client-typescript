import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDatasetCloneDataAttributesRequest } from "./LLMObsDatasetCloneDataAttributesRequest";
import { LLMObsDatasetType } from "./LLMObsDatasetType";

/**
 * Data object for cloning an LLM Observability dataset.
 */
export class LLMObsDatasetCloneDataRequest {
  /**
   * Attributes for cloning an LLM Observability dataset.
   */
  "attributes": LLMObsDatasetCloneDataAttributesRequest;
  /**
   * Identifier of the source dataset to clone.
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
      type: "LLMObsDatasetCloneDataAttributesRequest",
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
    return LLMObsDatasetCloneDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
