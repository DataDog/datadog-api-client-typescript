import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPatternsConfigResponseData } from "./LLMObsPatternsConfigResponseData";

/**
 * Response containing a single LLM Observability patterns configuration.
 */
export class LLMObsPatternsConfigResponse {
  /**
   * Data object of an LLM Observability patterns configuration.
   */
  "data": LLMObsPatternsConfigResponseData;
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
      type: "LLMObsPatternsConfigResponseData",
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
    return LLMObsPatternsConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
