/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IPAllowlistData } from "./IPAllowlistData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing information about the IP allowlist.
 */
export class IPAllowlistResponse {
  /**
   * IP allowlist data.
   */
  "data"?: IPAllowlistData;

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
      type: "IPAllowlistData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IPAllowlistResponse.attributeTypeMap;
  }

  public constructor() {}
}
