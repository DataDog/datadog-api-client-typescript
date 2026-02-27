import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsProjectDataResponse } from "./LLMObsProjectDataResponse";

/**
 * Response containing a single LLM Observability project.
 */
export class LLMObsProjectResponse {
  /**
   * Data object for an LLM Observability project.
   */
  "data": LLMObsProjectDataResponse;
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
      type: "LLMObsProjectDataResponse",
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
    return LLMObsProjectResponse.attributeTypeMap;
  }

  public constructor() {}
}
