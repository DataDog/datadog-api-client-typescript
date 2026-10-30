import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Immutable terms and justification for a temporary grant request.
 */
export class TemporaryGrantRequestCreateAttributes {
  /**
   * Exclusive expiry. Must be a future timestamp with a timezone. Date-only values are rejected. If omitted or null, defaults to the next UTC month boundary. Approval accepts this deadline unchanged.
   */
  "expiresAt"?: Date;
  /**
   * Reason for requesting temporary credits. Trimmed and limited to 4096 UTF-8 bytes.
   */
  "justification": string;
  /**
   * Target monthly AI credit limit in positive whole credits, not additional credits. Fractional credits are not accepted.
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
