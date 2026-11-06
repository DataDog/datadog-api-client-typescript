/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Query for a recovery estimate. The range cannot exceed 180 days; from cannot be more than 4 years ago and to cannot be more than 1 hour in the future. Session availability depends on the configured archive retention.
 */
export class RumRecoveryCountAttributes {
  /**
   * Start of the range in Unix milliseconds. Must be positive and earlier than to.
   */
  "from": Int64;
  /**
   * RUM search query. Not blank, at most 4096 bytes for batch creation and count.
   */
  "query": string;
  /**
   * End of the range in Unix milliseconds.
   */
  "to": Int64;

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
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "int64",
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
    to: {
      baseName: "to",
      type: "number",
      required: true,
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RumRecoveryCountAttributes.attributeTypeMap;
  }

  public constructor() {}
}
