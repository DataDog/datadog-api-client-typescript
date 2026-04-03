import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AllocationDataType } from "./AllocationDataType";
import { UpsertAllocationRequest } from "./UpsertAllocationRequest";

/**
 * Data wrapper for allocation request payloads.
 */
export class AllocationDataRequest {
  /**
   * Request to create or update a targeting rule (allocation) for a feature flag environment.
   */
  "attributes": UpsertAllocationRequest;
  /**
   * The resource type.
   */
  "type": AllocationDataType;
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
    attributes: {
      baseName: "attributes",
      type: "UpsertAllocationRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AllocationDataType",
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
    return AllocationDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
