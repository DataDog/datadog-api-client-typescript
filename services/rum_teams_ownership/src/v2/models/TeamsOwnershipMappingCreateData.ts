import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamsOwnershipMappingCreateDataAttributes } from "./TeamsOwnershipMappingCreateDataAttributes";
import { TeamsOwnershipMappingType } from "./TeamsOwnershipMappingType";

/**
 * The JSON:API data envelope for a teams ownership mapping create request.
 */
export class TeamsOwnershipMappingCreateData {
  /**
   * The attributes of the teams ownership mapping to create.
   */
  "attributes": TeamsOwnershipMappingCreateDataAttributes;
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
      type: "TeamsOwnershipMappingCreateDataAttributes",
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
    return TeamsOwnershipMappingCreateData.attributeTypeMap;
  }

  public constructor() {}
}
