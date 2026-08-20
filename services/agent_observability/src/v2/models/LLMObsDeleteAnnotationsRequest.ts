import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDeleteAnnotationsDataRequest } from "./LLMObsDeleteAnnotationsDataRequest";

/**
 * Request to delete annotations from an annotation queue.
 */
export class LLMObsDeleteAnnotationsRequest {
  /**
   * Data object for deleting annotations.
   */
  "data": LLMObsDeleteAnnotationsDataRequest;
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
      type: "LLMObsDeleteAnnotationsDataRequest",
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
    return LLMObsDeleteAnnotationsRequest.attributeTypeMap;
  }

  public constructor() {}
}
