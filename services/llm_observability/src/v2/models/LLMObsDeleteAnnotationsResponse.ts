import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDeleteAnnotationsDataResponse } from "./LLMObsDeleteAnnotationsDataResponse";

/**
 * Response for a batch annotation deletion. Partial errors are listed in the
 * response if any annotations could not be deleted.
 */
export class LLMObsDeleteAnnotationsResponse {
  /**
   * Data object for the annotation deletion response.
   */
  "data": LLMObsDeleteAnnotationsDataResponse;
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
      type: "LLMObsDeleteAnnotationsDataResponse",
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
    return LLMObsDeleteAnnotationsResponse.attributeTypeMap;
  }

  public constructor() {}
}
