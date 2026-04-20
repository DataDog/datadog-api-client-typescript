import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsCustomEvalConfigData } from "./LLMObsCustomEvalConfigData";

/**
 * Response containing a custom LLM Observability evaluator configuration.
 */
export class LLMObsCustomEvalConfigResponse {
  /**
   * Data object for a custom LLM Observability evaluator configuration.
   */
  "data": LLMObsCustomEvalConfigData;
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
      type: "LLMObsCustomEvalConfigData",
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
    return LLMObsCustomEvalConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
