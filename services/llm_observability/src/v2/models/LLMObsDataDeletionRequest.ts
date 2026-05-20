import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDataDeletionRequestData } from "./LLMObsDataDeletionRequestData";

/**
 * Request to delete LLM Observability data.
 */
export class LLMObsDataDeletionRequest {
  /**
   * Data object for an LLM Observability data deletion request.
   */
  "data": LLMObsDataDeletionRequestData;
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
      type: "LLMObsDataDeletionRequestData",
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
    return LLMObsDataDeletionRequest.attributeTypeMap;
  }

  public constructor() {}
}
