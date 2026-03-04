import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsProjectDataRequest } from "./LLMObsProjectDataRequest";

/**
 * Request to create an LLM Observability project.
 */
export class LLMObsProjectRequest {
  /**
   * Data object for creating an LLM Observability project.
   */
  "data": LLMObsProjectDataRequest;
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
      type: "LLMObsProjectDataRequest",
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
    return LLMObsProjectRequest.attributeTypeMap;
  }

  public constructor() {}
}
