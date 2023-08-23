/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IPAllowlistEntryAttributes } from "./IPAllowlistEntryAttributes";
import { IPAllowlistEntryType } from "./IPAllowlistEntryType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the IP allowlist entry object.
 */
export class IPAllowlistEntryData {
  /**
   * Attributes of the IP allowlist entry.
   */
  "attributes"?: IPAllowlistEntryAttributes;
  /**
   * The unique identifier of the IP allowlist entry.
   */
  "id"?: string;
  /**
   * IP allowlist Entry type.
   */
  "type": IPAllowlistEntryType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "IPAllowlistEntryAttributes",
    },
    id: {
      type: "string",
    },
    type: {
      type: "IPAllowlistEntryType",
      required: true,
    },
  };
}
