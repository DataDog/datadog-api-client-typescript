/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IPAllowlistData } from "./IPAllowlistData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Update the IP allowlist.
 */
export class IPAllowlistUpdateRequest {
  /**
   * IP allowlist data.
   */
  "data": IPAllowlistData;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "IPAllowlistData",
      required: true,
    },
  };
}
