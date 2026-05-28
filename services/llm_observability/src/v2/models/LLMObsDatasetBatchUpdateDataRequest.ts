import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDatasetBatchUpdateDataAttributesRequest } from "./LLMObsDatasetBatchUpdateDataAttributesRequest";
import { LLMObsDatasetType } from "./LLMObsDatasetType";

/**
 * Data object for batch-updating records in an LLM Observability dataset.
 */
export class LLMObsDatasetBatchUpdateDataRequest {
  /**
   * Attributes for batch-updating records in an LLM Observability dataset.
   */
  "attributes": LLMObsDatasetBatchUpdateDataAttributesRequest;
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
      type: "LLMObsDatasetBatchUpdateDataAttributesRequest",
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
    return LLMObsDatasetBatchUpdateDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
