/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudflareAccountCreateRequestAttributes } from "./CloudflareAccountCreateRequestAttributes";
import { CloudflareAccountType } from "./CloudflareAccountType";

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
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "CloudflareAccountCreateRequestAttributes",
      required: true,
    },
    type: {
      type: "CloudflareAccountType",
      required: true,
    },
  };
}
