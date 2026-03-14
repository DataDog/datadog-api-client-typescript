import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PlaylistData } from "./PlaylistData";

/**
 * A single RUM replay playlist resource returned by create, update, or get operations.
 */
export class Playlist {
  /**
   * Data object representing a RUM replay playlist, including its identifier, type, and attributes.
   */
  "data": PlaylistData;
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
      type: "PlaylistData",
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
    return Playlist.attributeTypeMap;
  }

  public constructor() {}
}
