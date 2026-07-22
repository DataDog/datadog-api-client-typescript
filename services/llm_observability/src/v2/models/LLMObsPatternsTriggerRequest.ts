import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPatternsTriggerRequestData } from "./LLMObsPatternsTriggerRequestData";

/**
 * Request to trigger an LLM Observability patterns run.
 */
export class LLMObsPatternsTriggerRequest {
  /**
   * Data object for triggering an LLM Observability patterns run.
   */
  "data": LLMObsPatternsTriggerRequestData;
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
      type: "LLMObsPatternsTriggerRequestData",
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
    return LLMObsPatternsTriggerRequest.attributeTypeMap;
  }

  public constructor() {}
}
