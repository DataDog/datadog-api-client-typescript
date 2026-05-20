import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsSpanMessage } from "./LLMObsSpanMessage";

/**
 * Input or output content of an LLM Observability span.
 */
export class LLMObsSpanIO {
  /**
   * List of messages in the input or output.
   */
  "messages"?: Array<LLMObsSpanMessage>;
  /**
   * Plain-text value of the input or output.
   */
  "value"?: string;
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
    messages: {
      baseName: "messages",
      type: "Array<LLMObsSpanMessage>",
    },
    value: {
      baseName: "value",
      type: "string",
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
    return LLMObsSpanIO.attributeTypeMap;
  }

  public constructor() {}
}
