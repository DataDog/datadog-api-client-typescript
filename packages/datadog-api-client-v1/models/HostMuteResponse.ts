/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

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
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    action: {
      type: "string",
    },
    end: {
      type: "number",
      format: "int64",
    },
    hostname: {
      type: "string",
    },
    message: {
      type: "string",
    },
  };
}
