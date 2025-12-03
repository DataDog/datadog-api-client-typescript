import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConnectionsResponseMeta } from "./ConnectionsResponseMeta";
import { TeamConnection } from "./TeamConnection";

/**
 * Response containing information about multiple team connections.
 */
export class TeamConnectionsResponse {
  /**
   * Array of team connections.
   */
  "data"?: Array<TeamConnection>;
  /**
   * Connections response metadata.
   */
  "meta"?: ConnectionsResponseMeta;
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
      type: "Array<TeamConnection>",
    },
    meta: {
      baseName: "meta",
      type: "ConnectionsResponseMeta",
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
    return TeamConnectionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
