/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes object of a Cloudflare account.
*/
export class CloudflareAccountResponseAttributes {
  /**
   * The email associated with the Cloudflare account.
  */
  "email"?: string;
  /**
   * The name of the Cloudflare account.
  */
  "name": string;
  /**
   * An allowlist of resources, such as `web`, `dns`, `lb` (load balancer), `worker`, that restricts pulling metrics from those resources.
  */
  "resources"?: Array<string>;
  /**
   * An allowlist of zones to restrict pulling metrics for.
  */
  "zones"?: Array<string>;

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
    "email": {
      "baseName": "email",
      "type": "string",
    },
    "name": {
      "baseName": "name",
      "type": "string",
      "required": true,
    },
    "resources": {
      "baseName": "resources",
      "type": "Array<string>",
    },
    "zones": {
      "baseName": "zones",
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




    return CloudflareAccountResponseAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









