import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PlaylistsSessionData } from "./PlaylistsSessionData";

/**
 * A single RUM replay session resource as it appears within a playlist context.
 */
export class PlaylistsSession {
  /**
   * Data object representing a session within a playlist, including its identifier, type, and attributes.
   */
  "data": PlaylistsSessionData;
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
      type: "PlaylistsSessionData",
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
    return PlaylistsSession.attributeTypeMap;
  }

  public constructor() {}
}
