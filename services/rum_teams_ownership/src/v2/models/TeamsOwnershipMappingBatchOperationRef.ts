import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamsOwnershipMappingType } from "./TeamsOwnershipMappingType";

/**
 * Identifies an existing mapping to remove. Required when `op` is `remove`.
 */
export class TeamsOwnershipMappingBatchOperationRef {
  /**
   * The ID of the mapping to remove.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be teams_ownership_mappings.
   */
  "type": TeamsOwnershipMappingType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TeamsOwnershipMappingType",
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
    return TeamsOwnershipMappingBatchOperationRef.attributeTypeMap;
  }

  public constructor() {}
}
