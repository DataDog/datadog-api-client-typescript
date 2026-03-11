import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a session within a playlist, including the session event data and its replay track.
 */
export class PlaylistsSessionDataAttributes {
  /**
   * Raw event data associated with the replay session.
   */
  "sessionEvent"?: { [key: string]: any };
  /**
   * Replay track identifier indicating which recording track the session belongs to.
   */
  "track"?: string;
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
    sessionEvent: {
      baseName: "session_event",
      type: "{ [key: string]: any; }",
    },
    track: {
      baseName: "track",
      type: "string",
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
    return PlaylistsSessionDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
