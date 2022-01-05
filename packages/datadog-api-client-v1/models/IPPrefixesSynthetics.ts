/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AttributeTypeMap } from "./ObjectSerializer";

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

  "unparsedObject"?: any;

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
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return IPPrefixesSynthetics.attributeTypeMap;
  }

  public constructor() {}
}
