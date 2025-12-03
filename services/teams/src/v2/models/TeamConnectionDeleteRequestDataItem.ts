import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamConnectionType } from "./TeamConnectionType";

/**
 * A collection of connection ids to delete.
 */
export class TeamConnectionDeleteRequestDataItem {
  /**
   * The unique identifier of the team connection to delete.
   */
  "id": string;
  /**
   * Team connection resource type.
   */
  "type": TeamConnectionType;
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
      type: "TeamConnectionType",
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
    return TeamConnectionDeleteRequestDataItem.attributeTypeMap;
  }

  public constructor() {}
}
