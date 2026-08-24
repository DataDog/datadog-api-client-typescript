import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamsOwnershipMappingBatchOperation } from "./TeamsOwnershipMappingBatchOperation";

/**
 * The request body for bulk-creating and bulk-removing teams ownership mappings.
 */
export class TeamsOwnershipMappingBatchRequest {
  /**
   * The list of add and remove operations to apply atomically.
   */
  "atomicOperations": Array<TeamsOwnershipMappingBatchOperation>;
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
    atomicOperations: {
      baseName: "atomic:operations",
      type: "Array<TeamsOwnershipMappingBatchOperation>",
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
    return TeamsOwnershipMappingBatchRequest.attributeTypeMap;
  }

  public constructor() {}
}
