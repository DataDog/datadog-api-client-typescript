import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsSearchSpansRequestData } from "./LLMObsSearchSpansRequestData";

/**
 * Request body for searching LLM Observability spans.
 */
export class LLMObsSearchSpansRequest {
  /**
   * Data object for an LLM Observability spans search request.
   */
  "data": LLMObsSearchSpansRequestData;
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
      type: "LLMObsSearchSpansRequestData",
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
    return LLMObsSearchSpansRequest.attributeTypeMap;
  }

  public constructor() {}
}
