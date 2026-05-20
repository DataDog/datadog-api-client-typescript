import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsSearchSpansRequestAttributes } from "./LLMObsSearchSpansRequestAttributes";
import { LLMObsSearchSpansRequestType } from "./LLMObsSearchSpansRequestType";

/**
 * Data object for an LLM Observability spans search request.
 */
export class LLMObsSearchSpansRequestData {
  /**
   * Attributes of an LLM Observability spans search request.
   */
  "attributes": LLMObsSearchSpansRequestAttributes;
  /**
   * Resource type for an LLM Observability spans search request.
   */
  "type": LLMObsSearchSpansRequestType;
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
      type: "LLMObsSearchSpansRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsSearchSpansRequestType",
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
    return LLMObsSearchSpansRequestData.attributeTypeMap;
  }

  public constructor() {}
}
