import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPatternsTriggerResponseData } from "./LLMObsPatternsTriggerResponseData";

/**
 * Response after triggering an LLM Observability patterns run.
 */
export class LLMObsPatternsTriggerResponse {
  /**
   * Data object of an LLM Observability patterns trigger response.
   */
  "data": LLMObsPatternsTriggerResponseData;
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
      type: "LLMObsPatternsTriggerResponseData",
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
    return LLMObsPatternsTriggerResponse.attributeTypeMap;
  }

  public constructor() {}
}
