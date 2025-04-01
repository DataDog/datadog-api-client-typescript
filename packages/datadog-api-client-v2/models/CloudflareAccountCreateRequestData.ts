/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudflareAccountCreateRequestAttributes } from "./CloudflareAccountCreateRequestAttributes";
import { CloudflareAccountType } from "./CloudflareAccountType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Data object for creating a Cloudflare account.
*/
export class CloudflareAccountCreateRequestData {
  /**
   * Attributes object for creating a Cloudflare account.
  */
  "attributes": CloudflareAccountCreateRequestAttributes;
  /**
   * The JSON:API type for this API. Should always be `cloudflare-accounts`.
  */
  "type": CloudflareAccountType;

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
    "attributes": {
      "baseName": "attributes",
      "type": "CloudflareAccountCreateRequestAttributes",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "CloudflareAccountType",
      "required": true,
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




    return CloudflareAccountCreateRequestData.attributeTypeMap;

  }

  public constructor() {











  }
}









