import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Combination of settings to mute a host.
 */
export class HostMuteSettings {
  /**
   * POSIX timestamp in seconds when the host is unmuted. If omitted, the host remains muted until explicitly unmuted.
   */
  "end"?: number;
  /**
   * Message to associate with the muting of this host.
   */
  "message"?: string;
  /**
   * If true and the host is already muted, replaces existing host mute settings.
   */
  "override"?: boolean;
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
    end: {
      baseName: "end",
      type: "number",
      format: "int64",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    override: {
      baseName: "override",
      type: "boolean",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HostMuteSettings.attributeTypeMap;
  }

  public constructor() {}
}
