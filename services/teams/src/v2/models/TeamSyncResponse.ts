import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamSyncData } from "./TeamSyncData";

/**
 * Team sync configurations response.
 */
export class TeamSyncResponse {
  /**
   * List of team sync configurations
   */
  "data"?: Array<TeamSyncData>;
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
      type: "Array<TeamSyncData>",
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
    return TeamSyncResponse.attributeTypeMap;
  }

  public constructor() {}
}
