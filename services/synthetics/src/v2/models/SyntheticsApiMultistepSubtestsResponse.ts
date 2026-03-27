import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsApiMultistepSubtestData } from "./SyntheticsApiMultistepSubtestData";

/**
 * Response containing the list of available subtests for an API multistep test.
 */
export class SyntheticsApiMultistepSubtestsResponse {
  /**
   * List of API tests that can be added as subtests.
   */
  "data"?: Array<SyntheticsApiMultistepSubtestData>;
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
      type: "Array<SyntheticsApiMultistepSubtestData>",
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
    return SyntheticsApiMultistepSubtestsResponse.attributeTypeMap;
  }

  public constructor() {}
}
