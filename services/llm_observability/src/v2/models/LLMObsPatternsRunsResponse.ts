import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPatternsRunsResponseData } from "./LLMObsPatternsRunsResponseData";

/**
 * Response containing the completed runs of an LLM Observability patterns configuration.
 */
export class LLMObsPatternsRunsResponse {
  /**
   * Data object of an LLM Observability patterns runs response.
   */
  "data": LLMObsPatternsRunsResponseData;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "LLMObsPatternsRunsResponseData",
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
    return LLMObsPatternsRunsResponse.attributeTypeMap;
  }

  public constructor() {}
}
