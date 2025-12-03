import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConnectedTeamRefDataType } from "./ConnectedTeamRefDataType";

/**
 * Reference to connected external team.
 */
export class ConnectedTeamRefData {
  /**
   * The connected team ID as it is referenced throughout the Datadog ecosystem.
   */
  "id": string;
  /**
   * External team resource type.
   */
  "type": ConnectedTeamRefDataType;
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
      type: "ConnectedTeamRefDataType",
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
    return ConnectedTeamRefData.attributeTypeMap;
  }

  public constructor() {}
}
