/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudflareAccountResponseData } from "./CloudflareAccountResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The expected response schema when getting Cloudflare accounts.
 */
export class CloudflareAccountsResponse {
  /**
   * The JSON:API data schema.
   */
  "data"?: Array<CloudflareAccountResponseData>;

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
      type: "Array<CloudflareAccountResponseData>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CloudflareAccountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
