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
   * The status of a service check.
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
      baseName: "check",
      type: "string",
      required: true,
    },
    hostName: {
      baseName: "host_name",
      type: "string",
      required: true,
    },
    message: {
      baseName: "message",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "ServiceCheckStatus",
      required: true,
      format: "int32",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      required: true,
    },
    timestamp: {
      baseName: "timestamp",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ServiceCheck.attributeTypeMap;
  }

  public constructor() {}
}
