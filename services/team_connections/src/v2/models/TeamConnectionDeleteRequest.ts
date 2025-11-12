import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamConnectionDeleteRequestDataItem } from "./TeamConnectionDeleteRequestDataItem";

/**
 * Request for deleting team connections.
 */
export class TeamConnectionDeleteRequest {
  /**
   * Array of team connection IDs to delete.
   */
  "data": Array<TeamConnectionDeleteRequestDataItem>;
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
      type: "Array<TeamConnectionDeleteRequestDataItem>",
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
    return TeamConnectionDeleteRequest.attributeTypeMap;
  }

  public constructor() {}
}
