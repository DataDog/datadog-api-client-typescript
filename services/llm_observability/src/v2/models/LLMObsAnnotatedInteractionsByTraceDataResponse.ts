import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotatedInteractionsByTraceDataAttributesResponse } from "./LLMObsAnnotatedInteractionsByTraceDataAttributesResponse";
import { LLMObsAnnotatedInteractionsByTraceType } from "./LLMObsAnnotatedInteractionsByTraceType";

/**
 * Data object for the cross-queue annotated interactions response.
 */
export class LLMObsAnnotatedInteractionsByTraceDataResponse {
  /**
   * Attributes of the cross-queue annotated interactions response.
   */
  "attributes": LLMObsAnnotatedInteractionsByTraceDataAttributesResponse;
  /**
   * Opaque identifier for the response object.
   */
  "id": string;
  /**
   * Resource type for cross-queue annotated interactions lookup.
   */
  "type": LLMObsAnnotatedInteractionsByTraceType;
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
      type: "LLMObsAnnotatedInteractionsByTraceDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsAnnotatedInteractionsByTraceType",
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
    return LLMObsAnnotatedInteractionsByTraceDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
