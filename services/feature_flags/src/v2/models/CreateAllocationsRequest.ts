import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AllocationDataRequest } from "./AllocationDataRequest";

/**
 * Request to create targeting rules (allocations) for a feature flag in an environment.
 */
export class CreateAllocationsRequest {
  /**
   * Data wrapper for allocation request payloads.
   */
  "data": AllocationDataRequest;
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
      type: "AllocationDataRequest",
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
    return CreateAllocationsRequest.attributeTypeMap;
  }

  public constructor() {}
}
