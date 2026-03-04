import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDatasetType } from "./LLMObsDatasetType";
import { LLMObsDeleteDatasetsDataAttributesRequest } from "./LLMObsDeleteDatasetsDataAttributesRequest";

/**
 * Data object for deleting LLM Observability datasets.
 */
export class LLMObsDeleteDatasetsDataRequest {
  /**
   * Attributes for deleting LLM Observability datasets.
   */
  "attributes": LLMObsDeleteDatasetsDataAttributesRequest;
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
      type: "LLMObsDeleteDatasetsDataAttributesRequest",
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
    return LLMObsDeleteDatasetsDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
