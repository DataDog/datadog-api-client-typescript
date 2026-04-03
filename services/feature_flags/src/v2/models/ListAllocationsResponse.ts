import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AllocationDataResponse } from "./AllocationDataResponse";

/**
 * Response containing a list of targeting rules (allocations).
 */
export class ListAllocationsResponse {
  /**
   * List of targeting rules (allocations).
   */
  "data": Array<AllocationDataResponse>;
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
      type: "Array<AllocationDataResponse>",
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
    return ListAllocationsResponse.attributeTypeMap;
  }

  public constructor() {}
}
