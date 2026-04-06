import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Allocation } from "./Allocation";
import { AllocationDataType } from "./AllocationDataType";

/**
 * Data wrapper for targeting rule allocation responses.
 */
export class AllocationDataResponse {
  /**
   * Targeting rule (allocation) details for a feature flag environment.
   */
  "attributes": Allocation;
  /**
   * The unique identifier of the targeting rule allocation.
   */
  "id": string;
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
      type: "Allocation",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return AllocationDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
