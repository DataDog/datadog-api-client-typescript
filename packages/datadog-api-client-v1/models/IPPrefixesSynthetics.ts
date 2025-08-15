/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Available prefix information for the Synthetics endpoints.
 */
export class IPPrefixesSynthetics {
  /**
   * List of IPv4 prefixes.
   */
  "prefixesIpv4"?: Array<string>;
  /**
   * List of IPv4 prefixes by location.
   */
  "prefixesIpv4ByLocation"?: { [key: string]: Array<string> };
  /**
   * List of IPv6 prefixes.
   */
  "prefixesIpv6"?: Array<string>;
  /**
   * List of IPv6 prefixes by location.
   */
  "prefixesIpv6ByLocation"?: { [key: string]: Array<string> };

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
    prefixesIpv4: {
      baseName: "prefixes_ipv4",
      type: "Array<string>",
    },
    prefixesIpv4ByLocation: {
      baseName: "prefixes_ipv4_by_location",
      type: "{ [key: string]: Array<string>; }",
    },
    prefixesIpv6: {
      baseName: "prefixes_ipv6",
      type: "Array<string>",
    },
    prefixesIpv6ByLocation: {
      baseName: "prefixes_ipv6_by_location",
      type: "{ [key: string]: Array<string>; }",
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
    return IPPrefixesSynthetics.attributeTypeMap;
  }

  public constructor() {}
}
