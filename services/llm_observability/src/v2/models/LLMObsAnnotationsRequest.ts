import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationsDataRequest } from "./LLMObsAnnotationsDataRequest";

/**
 * Request to create or update annotations on interactions in an annotation queue.
 */
export class LLMObsAnnotationsRequest {
  /**
   * Data object for creating or updating annotations.
   */
  "data": LLMObsAnnotationsDataRequest;
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
    data: {
      baseName: "data",
      type: "LLMObsAnnotationsDataRequest",
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
    return LLMObsAnnotationsRequest.attributeTypeMap;
  }

  public constructor() {}
}
