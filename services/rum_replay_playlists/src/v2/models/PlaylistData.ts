import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PlaylistDataAttributes } from "./PlaylistDataAttributes";
import { PlaylistDataType } from "./PlaylistDataType";

/**
 * Data object representing a RUM replay playlist, including its identifier, type, and attributes.
 */
export class PlaylistData {
  /**
   * Attributes of a RUM replay playlist, including its name, description, session count, and audit timestamps.
   */
  "attributes"?: PlaylistDataAttributes;
  /**
   * Unique identifier of the playlist.
   */
  "id"?: string;
  /**
   * Rum replay playlist resource type.
   */
  "type": PlaylistDataType;
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
      type: "PlaylistDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "PlaylistDataType",
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
    return PlaylistData.attributeTypeMap;
  }

  public constructor() {}
}
