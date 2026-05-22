import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDatasetVersionData } from "./LLMObsDatasetVersionData";

/**
 * Response containing the active versions of an LLM Observability dataset.
 */
export class LLMObsDatasetVersionsResponse {
  /**
   * List of dataset versions.
   */
  "data": Array<LLMObsDatasetVersionData>;
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
      type: "Array<LLMObsDatasetVersionData>",
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
    return LLMObsDatasetVersionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
