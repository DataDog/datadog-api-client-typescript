import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamsOwnershipMappingBatchOperationData } from "./TeamsOwnershipMappingBatchOperationData";
import { TeamsOwnershipMappingBatchOperationOp } from "./TeamsOwnershipMappingBatchOperationOp";
import { TeamsOwnershipMappingBatchOperationRef } from "./TeamsOwnershipMappingBatchOperationRef";

/**
 * A single add or remove operation, applied atomically with every other operation in the request.
 */
export class TeamsOwnershipMappingBatchOperation {
  /**
   * The mapping to add. Required when `op` is `add`.
   */
  "data"?: TeamsOwnershipMappingBatchOperationData;
  /**
   * Whether this operation adds a new mapping or removes an existing one.
   */
  "op": TeamsOwnershipMappingBatchOperationOp;
  /**
   * Identifies an existing mapping to remove. Required when `op` is `remove`.
   */
  "ref"?: TeamsOwnershipMappingBatchOperationRef;
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
      type: "TeamsOwnershipMappingBatchOperationData",
    },
    op: {
      baseName: "op",
      type: "TeamsOwnershipMappingBatchOperationOp",
      required: true,
    },
    ref: {
      baseName: "ref",
      type: "TeamsOwnershipMappingBatchOperationRef",
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
    return TeamsOwnershipMappingBatchOperation.attributeTypeMap;
  }

  public constructor() {}
}
