import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDataDeletionResponseData } from "./LLMObsDataDeletionResponseData";

/**
 * Response containing details of a submitted LLM Observability data deletion request.
 */
export class LLMObsDataDeletionResponse {
  /**
   * Data object for an LLM Observability data deletion response.
   */
  "data": LLMObsDataDeletionResponseData;
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
      type: "LLMObsDataDeletionResponseData",
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
    return LLMObsDataDeletionResponse.attributeTypeMap;
  }

  public constructor() {}
}
