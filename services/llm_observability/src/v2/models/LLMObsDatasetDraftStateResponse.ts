import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDatasetDraftStateData } from "./LLMObsDatasetDraftStateData";

/**
 * Response containing the draft state of an LLM Observability dataset.
 */
export class LLMObsDatasetDraftStateResponse {
  /**
   * Data object for an LLM Observability dataset draft state.
   */
  "data": LLMObsDatasetDraftStateData;
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
      type: "LLMObsDatasetDraftStateData",
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
    return LLMObsDatasetDraftStateResponse.attributeTypeMap;
  }

  public constructor() {}
}
