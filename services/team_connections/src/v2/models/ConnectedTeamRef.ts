import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConnectedTeamRefData } from "./ConnectedTeamRefData";

/**
 * Reference to a team from an external system.
 */
export class ConnectedTeamRef {
  /**
   * Reference to connected external team.
   */
  "data"?: ConnectedTeamRefData;
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
      type: "ConnectedTeamRefData",
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
    return ConnectedTeamRef.attributeTypeMap;
  }

  public constructor() {}
}
