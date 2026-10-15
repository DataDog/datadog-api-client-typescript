import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPatternsTemplatesResponseData } from "./LLMObsPatternsTemplatesResponseData";

/**
 * Response containing a list of Agent Observability patterns templates.
 */
export class LLMObsPatternsTemplatesResponse {
  /**
   * Data object of a list of Agent Observability patterns templates.
   */
  "data": LLMObsPatternsTemplatesResponseData;
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
      type: "LLMObsPatternsTemplatesResponseData",
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
    return LLMObsPatternsTemplatesResponse.attributeTypeMap;
  }

  public constructor() {}
}
