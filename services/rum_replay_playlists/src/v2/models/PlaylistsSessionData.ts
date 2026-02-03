import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PlaylistsSessionDataAttributes } from "./PlaylistsSessionDataAttributes";
import { ViewershipHistorySessionDataType } from "./ViewershipHistorySessionDataType";

export class PlaylistsSessionData {
  "attributes"?: PlaylistsSessionDataAttributes;
  "id"?: string;
  /**
   * Rum replay session resource type.
   */
  "type": ViewershipHistorySessionDataType;
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
      type: "PlaylistsSessionDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ViewershipHistorySessionDataType",
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
    return PlaylistsSessionData.attributeTypeMap;
  }

  public constructor() {}
}
