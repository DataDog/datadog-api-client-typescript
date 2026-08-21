import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamsOwnershipMappingBatchResultDataAttributes } from "./TeamsOwnershipMappingBatchResultDataAttributes";
import { TeamsOwnershipMappingType } from "./TeamsOwnershipMappingType";

/**
 * The mapping created by an `add` operation.
 */
export class TeamsOwnershipMappingBatchResultData {
  /**
   * The attributes of a mapping created by an `add` operation.
   */
  "attributes": TeamsOwnershipMappingBatchResultDataAttributes;
  /**
   * The unique identifier of the teams ownership mapping.
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
    attributes: {
      baseName: "attributes",
      type: "TeamsOwnershipMappingBatchResultDataAttributes",
      required: true,
    },
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
    return TeamsOwnershipMappingBatchResultData.attributeTypeMap;
  }

  public constructor() {}
}
