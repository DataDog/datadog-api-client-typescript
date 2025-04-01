/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Available prefix information for the API endpoints.
*/
export class IPPrefixesAPI {
  /**
   * List of IPv4 prefixes.
  */
  "prefixesIpv4"?: Array<string>;
  /**
   * List of IPv6 prefixes.
  */
  "prefixesIpv6"?: Array<string>;

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
    "prefixesIpv4": {
      "baseName": "prefixes_ipv4",
      "type": "Array<string>",
    },
    "prefixesIpv6": {
      "baseName": "prefixes_ipv6",
      "type": "Array<string>",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return IPPrefixesAPI.attributeTypeMap;

  }

  public constructor() {











  }
}









