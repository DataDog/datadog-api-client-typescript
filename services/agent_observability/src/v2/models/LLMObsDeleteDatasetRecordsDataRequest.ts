import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDatasetType } from "./LLMObsDatasetType";
import { LLMObsDeleteDatasetRecordsDataAttributesRequest } from "./LLMObsDeleteDatasetRecordsDataAttributesRequest";

/**
 * Data object for deleting records from an Agent Observability dataset.
 */
export class LLMObsDeleteDatasetRecordsDataRequest {
  /**
   * Attributes for deleting records from an Agent Observability dataset.
   */
  "attributes": LLMObsDeleteDatasetRecordsDataAttributesRequest;
  /**
   * Resource type of an Agent Observability dataset.
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
      type: "LLMObsDeleteDatasetRecordsDataAttributesRequest",
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
    return LLMObsDeleteDatasetRecordsDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
