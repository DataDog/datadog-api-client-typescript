/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudflareAccountCreateRequestData } from "./CloudflareAccountCreateRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Payload schema when adding a Cloudflare account.
 */
export class CloudflareAccountCreateRequest {
  /**
   * Data object for creating a Cloudflare account.
   */
  "data": CloudflareAccountCreateRequestData;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "CloudflareAccountCreateRequestData",
      required: true,
    },
  };
}
