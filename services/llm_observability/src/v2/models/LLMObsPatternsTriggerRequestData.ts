import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPatternsRequestType } from "./LLMObsPatternsRequestType";
import { LLMObsPatternsTriggerRequestAttributes } from "./LLMObsPatternsTriggerRequestAttributes";

/**
 * Data object for triggering an LLM Observability patterns run.
 */
export class LLMObsPatternsTriggerRequestData {
  /**
   * Attributes for triggering an LLM Observability patterns run.
   */
  "attributes": LLMObsPatternsTriggerRequestAttributes;
  /**
   * Resource type for triggering an LLM Observability patterns run.
   */
  "type": LLMObsPatternsRequestType;
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
    attributes: {
      baseName: "attributes",
      type: "LLMObsPatternsTriggerRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsPatternsRequestType",
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
    return LLMObsPatternsTriggerRequestData.attributeTypeMap;
  }

  public constructor() {}
}
