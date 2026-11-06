/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumRecoveryBatchRequestType } from "./RumRecoveryBatchRequestType";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Recover sessions selected by a query. The range cannot exceed 180 days; from cannot be more than 4 years ago and to cannot be more than 1 hour in the future. Session availability depends on the configured archive retention.
 */
export class RumRecoveryBatchCreateAttributes {
  /**
   * Optional client estimate. Creation validates and stores a fresh server estimate instead of this value.
   */
  "estimatedCount"?: Int64;
  /**
   * Start of the range in Unix milliseconds. Must be positive and earlier than to.
   */
  "from": Int64;
  /**
   * RUM search query. Not blank, at most 4096 bytes for batch creation and count.
   */
  "query": string;
  /**
   * Query-based batch recovery.
   */
  "requestType": RumRecoveryBatchRequestType;
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
    estimatedCount: {
      baseName: "estimated_count",
      type: "number",
      format: "int64",
    },
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
    requestType: {
      baseName: "request_type",
      type: "RumRecoveryBatchRequestType",
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
    return RumRecoveryBatchCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
