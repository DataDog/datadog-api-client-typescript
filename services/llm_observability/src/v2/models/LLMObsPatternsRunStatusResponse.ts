import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPatternsRunStatusResponseData } from "./LLMObsPatternsRunStatusResponseData";

/**
 * Response containing the status of an LLM Observability patterns run.
 */
export class LLMObsPatternsRunStatusResponse {
  /**
   * Data object of an LLM Observability patterns run status response.
   */
  "data": LLMObsPatternsRunStatusResponseData;
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
      type: "LLMObsPatternsRunStatusResponseData",
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
    return LLMObsPatternsRunStatusResponse.attributeTypeMap;
  }

  public constructor() {}
}
