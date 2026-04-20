import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsCustomEvalConfigAttributes } from "./LLMObsCustomEvalConfigAttributes";
import { LLMObsCustomEvalConfigType } from "./LLMObsCustomEvalConfigType";

/**
 * Data object for a custom LLM Observability evaluator configuration.
 */
export class LLMObsCustomEvalConfigData {
  /**
   * Attributes of a custom LLM Observability evaluator configuration.
   */
  "attributes": LLMObsCustomEvalConfigAttributes;
  /**
   * Unique name identifier of the evaluator configuration.
   */
  "id": string;
  /**
   * Type of the custom LLM Observability evaluator configuration resource.
   */
  "type": LLMObsCustomEvalConfigType;
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
    attributes: {
      baseName: "attributes",
      type: "LLMObsCustomEvalConfigAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsCustomEvalConfigType",
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
    return LLMObsCustomEvalConfigData.attributeTypeMap;
  }

  public constructor() {}
}
