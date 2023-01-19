/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudflareAccountResponseData } from "./CloudflareAccountResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The expected response schema when getting a Cloudflare account.
 */
export class CloudflareAccountResponse {
  /**
   * Data object of a Cloudflare account.
   */
  "data"?: CloudflareAccountResponseData;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "CloudflareAccountResponseData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CloudflareAccountResponse.attributeTypeMap;
  }

  public constructor() {}
}
