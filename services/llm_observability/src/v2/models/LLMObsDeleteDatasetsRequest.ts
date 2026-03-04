import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDeleteDatasetsDataRequest } from "./LLMObsDeleteDatasetsDataRequest";

/**
 * Request to delete one or more LLM Observability datasets.
 */
export class LLMObsDeleteDatasetsRequest {
  /**
   * Data object for deleting LLM Observability datasets.
   */
  "data": LLMObsDeleteDatasetsDataRequest;
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
      type: "LLMObsDeleteDatasetsDataRequest",
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
    return LLMObsDeleteDatasetsRequest.attributeTypeMap;
  }

  public constructor() {}
}
