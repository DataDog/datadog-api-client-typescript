import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Response with the list of muted host for your organization.
 */
export class HostMuteResponse {
  /**
   * Action applied to the hosts.
   */
  "action"?: string;
  /**
   * POSIX timestamp in seconds when the host is unmuted.
   */
  "end"?: number;
  /**
   * The host name.
   */
  "hostname"?: string;
  /**
   * Message associated with the mute.
   */
  "message"?: string;
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
    action: {
      baseName: "action",
      type: "string",
    },
    end: {
      baseName: "end",
      type: "number",
      format: "int64",
    },
    hostname: {
      baseName: "hostname",
      type: "string",
    },
    message: {
      baseName: "message",
      type: "string",
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
    return HostMuteResponse.attributeTypeMap;
  }

  public constructor() {}
}
