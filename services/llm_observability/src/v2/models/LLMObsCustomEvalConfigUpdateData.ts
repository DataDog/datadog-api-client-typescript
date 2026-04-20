import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsCustomEvalConfigType } from "./LLMObsCustomEvalConfigType";
import { LLMObsCustomEvalConfigUpdateAttributes } from "./LLMObsCustomEvalConfigUpdateAttributes";

/**
 * Data object for creating or updating a custom LLM Observability evaluator configuration.
 */
export class LLMObsCustomEvalConfigUpdateData {
  /**
   * Attributes for creating or updating a custom LLM Observability evaluator configuration.
   */
  "attributes": LLMObsCustomEvalConfigUpdateAttributes;
  /**
   * Name of the evaluator. If provided, must match the eval_name path parameter.
   */
  "id"?: string;
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
      type: "LLMObsCustomEvalConfigUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return LLMObsCustomEvalConfigUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
