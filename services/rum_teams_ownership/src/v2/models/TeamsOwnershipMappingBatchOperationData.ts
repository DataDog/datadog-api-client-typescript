import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamsOwnershipMappingBatchOperationDataAttributes } from "./TeamsOwnershipMappingBatchOperationDataAttributes";
import { TeamsOwnershipMappingType } from "./TeamsOwnershipMappingType";

/**
 * The mapping to add. Required when `op` is `add`.
 */
export class TeamsOwnershipMappingBatchOperationData {
  /**
   * The attributes of the mapping to add. `team_handle` and `view_name` are required
   * when `op` is `add`. At least one of `service` or `application_id` must be provided.
   */
  "attributes": TeamsOwnershipMappingBatchOperationDataAttributes;
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
    attributes: {
      baseName: "attributes",
      type: "TeamsOwnershipMappingBatchOperationDataAttributes",
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
    return TeamsOwnershipMappingBatchOperationData.attributeTypeMap;
  }

  public constructor() {}
}
