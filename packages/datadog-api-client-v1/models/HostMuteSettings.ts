/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   * @ignore
   */
  "unparsedObject"?: any;

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HostMuteSettings.attributeTypeMap;
  }

  public constructor() {}
}
