import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PlaylistData } from "./PlaylistData";

/**
 * A list of RUM replay playlists returned by a list operation.
 */
export class PlaylistArray {
  /**
   * Array of playlist data objects.
   */
  "data": Array<PlaylistData>;
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
      type: "Array<PlaylistData>",
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
    return PlaylistArray.attributeTypeMap;
  }

  public constructor() {}
}
