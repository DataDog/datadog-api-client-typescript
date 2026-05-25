import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiMemoryViolationResultResponseData } from "./AiMemoryViolationResultResponseData";

/**
 * Response containing a list of AI memory violation results.
 */
export class AiMemoryViolationResultsResponse {
  /**
   * The list of AI memory violation results.
   */
  "data": Array<AiMemoryViolationResultResponseData>;
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
      type: "Array<AiMemoryViolationResultResponseData>",
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
    return AiMemoryViolationResultsResponse.attributeTypeMap;
  }

  public constructor() {}
}
