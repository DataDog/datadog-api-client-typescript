/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HostMuteResponse.attributeTypeMap;
  }

  public constructor() {}
}
