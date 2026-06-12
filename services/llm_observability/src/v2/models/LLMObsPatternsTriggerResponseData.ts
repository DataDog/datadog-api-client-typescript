import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPatternsTriggerResponseAttributes } from "./LLMObsPatternsTriggerResponseAttributes";
import { LLMObsPatternsTriggerResponseType } from "./LLMObsPatternsTriggerResponseType";

/**
 * Data object of an LLM Observability patterns trigger response.
 */
export class LLMObsPatternsTriggerResponseData {
  /**
   * Attributes of an LLM Observability patterns trigger response.
   */
  "attributes": LLMObsPatternsTriggerResponseAttributes;
  /**
   * The ID of the patterns configuration that was run.
   */
  "id": string;
  /**
   * Resource type of an LLM Observability patterns trigger response.
   */
  "type": LLMObsPatternsTriggerResponseType;
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
      type: "LLMObsPatternsTriggerResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsPatternsTriggerResponseType",
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
    return LLMObsPatternsTriggerResponseData.attributeTypeMap;
  }

  public constructor() {}
}
