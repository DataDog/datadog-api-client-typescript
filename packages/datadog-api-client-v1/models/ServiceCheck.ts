/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceCheckStatus } from "./ServiceCheckStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An object containing service check and status.
 */
export class ServiceCheck {
  /**
   * The check.
   */
  "check": string;
  /**
   * The host name correlated with the check.
   */
  "hostName": string;
  /**
   * Message containing check status.
   */
  "message"?: string;
  /**
   * The status of a service check. Set to `0` for OK, `1` for warning, `2` for critical, and `3` for unknown.
   */
  "status": ServiceCheckStatus;
  /**
   * Tags related to a check.
   */
  "tags": Array<string>;
  /**
   * Time of check.
   */
  "timestamp"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    check: {
      type: "string",
      required: true,
    },
    hostName: {
      baseName: "host_name",
      type: "string",
      required: true,
    },
    message: {
      type: "string",
    },
    status: {
      type: "ServiceCheckStatus",
      required: true,
      format: "int32",
    },
    tags: {
      type: "Array<string>",
      required: true,
    },
    timestamp: {
      type: "number",
      format: "int64",
    },
  };
}
