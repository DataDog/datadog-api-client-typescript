import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsCustomEvalConfigUpdateData } from "./LLMObsCustomEvalConfigUpdateData";

/**
 * Request to create or update a custom LLM Observability evaluator configuration.
 */
export class LLMObsCustomEvalConfigUpdateRequest {
  /**
   * Data object for creating or updating a custom LLM Observability evaluator configuration.
   */
  "data": LLMObsCustomEvalConfigUpdateData;
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
      type: "LLMObsCustomEvalConfigUpdateData",
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
    return LLMObsCustomEvalConfigUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
