import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationsDataResponse } from "./LLMObsAnnotationsDataResponse";

/**
 * Response containing the created or updated annotations.
 */
export class LLMObsAnnotationsResponse {
  /**
   * Data object for the annotations response.
   */
  "data": LLMObsAnnotationsDataResponse;
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
      type: "LLMObsAnnotationsDataResponse",
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
    return LLMObsAnnotationsResponse.attributeTypeMap;
  }

  public constructor() {}
}
