import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsCustomEvalConfigData } from "./LLMObsCustomEvalConfigData";

/**
 * Response containing a list of custom Agent Observability evaluator configurations.
 */
export class LLMObsCustomEvalConfigListResponse {
  /**
   * List of custom evaluator configuration data objects.
   */
  "data": Array<LLMObsCustomEvalConfigData>;
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
      type: "Array<LLMObsCustomEvalConfigData>",
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
    return LLMObsCustomEvalConfigListResponse.attributeTypeMap;
  }

  public constructor() {}
}
