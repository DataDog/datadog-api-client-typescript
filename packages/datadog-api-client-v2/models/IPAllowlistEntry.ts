/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IPAllowlistEntryData } from "./IPAllowlistEntryData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * IP allowlist entry object.
 */
export class IPAllowlistEntry {
  /**
   * Data of the IP allowlist entry object.
   */
  "data": IPAllowlistEntryData;

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
      type: "IPAllowlistEntryData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IPAllowlistEntry.attributeTypeMap;
  }

  public constructor() {}
}
