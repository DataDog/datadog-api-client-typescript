/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Host } from "./Host";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with Host information from Datadog.
 */
export class HostListResponse {
  /**
   * Array of hosts.
   */
  "hostList"?: Array<Host>;
  /**
   * Number of host matching the query.
   */
  "totalMatching"?: number;
  /**
   * Number of host returned.
   */
  "totalReturned"?: number;

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
    hostList: {
      baseName: "host_list",
      type: "Array<Host>",
    },
    totalMatching: {
      baseName: "total_matching",
      type: "number",
      format: "int64",
    },
    totalReturned: {
      baseName: "total_returned",
      type: "number",
      format: "int64",
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
    return HostListResponse.attributeTypeMap;
  }

  public constructor() {}
}
