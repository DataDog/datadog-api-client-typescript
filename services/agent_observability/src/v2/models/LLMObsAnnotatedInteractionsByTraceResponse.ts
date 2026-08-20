import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotatedInteractionsByTraceDataResponse } from "./LLMObsAnnotatedInteractionsByTraceDataResponse";

/**
 * Response containing annotated interactions across all queues for the requested content IDs.
 */
export class LLMObsAnnotatedInteractionsByTraceResponse {
  /**
   * Data object for the cross-queue annotated interactions response.
   */
  "data": LLMObsAnnotatedInteractionsByTraceDataResponse;
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
      type: "LLMObsAnnotatedInteractionsByTraceDataResponse",
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
    return LLMObsAnnotatedInteractionsByTraceResponse.attributeTypeMap;
  }

  public constructor() {}
}
