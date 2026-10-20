/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Immutable terms and justification for a temporary grant request.
 */
export class TemporaryGrantRequestCreateAttributes {
  /**
   * Exclusive expiry. Must be a future timestamp with a timezone; date-only values are rejected. Omitted or null defaults to the next UTC month boundary. Approval accepts this deadline unchanged.
   */
  "expiresAt"?: Date;
  /**
   * Reason for requesting temporary credits. Trimmed and limited to 4096 UTF-8 bytes.
   */
  "justification": string;
  /**
   * Target monthly AI-credit limit in positive whole credits, not additional credits. Fractional credits are not accepted.
   */
  "total": number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    expiresAt: {
      baseName: "expires_at",
      type: "Date",
      format: "date-time",
    },
    justification: {
      baseName: "justification",
      type: "string",
      required: true,
    },
    total: {
      baseName: "total",
      type: "number",
      required: true,
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TemporaryGrantRequestCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
