import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDatasetCloneDataRequest } from "./LLMObsDatasetCloneDataRequest";

/**
 * Request to clone an LLM Observability dataset.
 */
export class LLMObsDatasetCloneRequest {
  /**
   * Data object for cloning an LLM Observability dataset.
   */
  "data": LLMObsDatasetCloneDataRequest;
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
      type: "LLMObsDatasetCloneDataRequest",
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
    return LLMObsDatasetCloneRequest.attributeTypeMap;
  }

  public constructor() {}
}
