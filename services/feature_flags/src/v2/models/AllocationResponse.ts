import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AllocationDataResponse } from "./AllocationDataResponse";

/**
 * Response containing a single targeting rule (allocation).
 */
export class AllocationResponse {
  /**
   * Data wrapper for targeting rule allocation responses.
   */
  "data": AllocationDataResponse;
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
      type: "AllocationDataResponse",
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
    return AllocationResponse.attributeTypeMap;
  }

  public constructor() {}
}
