import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConnectionGroupDataAttributesResponse } from "./ConnectionGroupDataAttributesResponse";
import { ConnectionGroupRelationships } from "./ConnectionGroupRelationships";
import { ConnectionGroupType } from "./ConnectionGroupType";

/**
 * Data object for a connection group.
 */
export class ConnectionGroupDataResponse {
  /**
   * Attributes of a connection group.
   */
  "attributes": ConnectionGroupDataAttributesResponse;
  /**
   * The unique identifier of the connection group.
   */
  "id": string;
  /**
   * Relationships for a connection group.
   */
  "relationships"?: ConnectionGroupRelationships;
  /**
   * The definition of `ConnectionGroupType` object.
   */
  "type": ConnectionGroupType;
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
      type: "ConnectionGroupDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "ConnectionGroupRelationships",
    },
    type: {
      baseName: "type",
      type: "ConnectionGroupType",
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
    return ConnectionGroupDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
