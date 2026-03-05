import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDatasetDataRequest } from "./LLMObsDatasetDataRequest";

/**
 * Request to create an LLM Observability dataset.
 */
export class LLMObsDatasetRequest {
  /**
   * Data object for creating an LLM Observability dataset.
   */
  "data": LLMObsDatasetDataRequest;
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
    data: {
      baseName: "data",
      type: "LLMObsDatasetDataRequest",
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
    return LLMObsDatasetRequest.attributeTypeMap;
  }

  public constructor() {}
}
