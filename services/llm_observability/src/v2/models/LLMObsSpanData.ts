import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsSpanAttributes } from "./LLMObsSpanAttributes";
import { LLMObsSpanType } from "./LLMObsSpanType";

/**
 * A single LLM Observability span.
 */
export class LLMObsSpanData {
  /**
   * Attributes of an LLM Observability span.
   */
  "attributes": LLMObsSpanAttributes;
  /**
   * Unique identifier of the span.
   */
  "id": string;
  /**
   * Resource type for an LLM Observability span.
   */
  "type": LLMObsSpanType;
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
      type: "LLMObsSpanAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsSpanType",
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
    return LLMObsSpanData.attributeTypeMap;
  }

  public constructor() {}
}
