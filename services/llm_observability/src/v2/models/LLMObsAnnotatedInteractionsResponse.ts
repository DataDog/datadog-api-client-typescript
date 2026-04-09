import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotatedInteractionsDataResponse } from "./LLMObsAnnotatedInteractionsDataResponse";

/**
 * Response containing the annotated interactions for an annotation queue.
 */
export class LLMObsAnnotatedInteractionsResponse {
  /**
   * Data object for annotated interactions.
   */
  "data": LLMObsAnnotatedInteractionsDataResponse;
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
      type: "LLMObsAnnotatedInteractionsDataResponse",
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
    return LLMObsAnnotatedInteractionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
