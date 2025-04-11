import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceCheckStatus } from "./ServiceCheckStatus";

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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
