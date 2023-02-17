/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IPAllowlistEntry } from "./IPAllowlistEntry";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the IP allowlist.
 */
export class IPAllowlistAttributes {
  /**
   * Whether the IP allowlist logic is enabled or not.
   */
  "enabled"?: boolean;
  /**
   * Array of entries in the IP allowlist.
   */
  "entries"?: Array<IPAllowlistEntry>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    entries: {
      baseName: "entries",
      type: "Array<IPAllowlistEntry>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IPAllowlistAttributes.attributeTypeMap;
  }

  public constructor() {}
}
