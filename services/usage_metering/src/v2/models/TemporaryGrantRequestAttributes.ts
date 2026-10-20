import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TemporaryGrantRequestGrantState } from "./TemporaryGrantRequestGrantState";
import { TemporaryGrantRequestStatus } from "./TemporaryGrantRequestStatus";

/**
 * Request history and the linked grant state. List and detail reads include grant_state for approved requests. Decision responses record the decision; read the request for current grant state.
 */
export class TemporaryGrantRequestAttributes {
  /**
   * When the request was submitted.
   */
  "createdAt": Date;
  /**
   * When the decision or cancellation was recorded.
   */
  "decidedAt"?: Date;
  /**
   * UUID of the reviewer, or requester when canceled.
   */
  "decidedByUserId"?: string;
  /**
   * The requester identity resolved by the server.
   */
  "entityKey": string;
  /**
   * Immutable exclusive expiry, normalized to UTC microsecond precision.
   */
  "expiresAt": Date;
  /**
   * Current state of the grant associated with an approved request. Replaced means a successor superseded this grant; the successor need not still be active. Absent for requests that were not approved.
   */
  "grantState"?: TemporaryGrantRequestGrantState;
  /**
   * Reason for requesting temporary credits. Trimmed and limited to 4096 UTF-8 bytes.
   */
  "justification": string;
  /**
   * The quota namespace. Only AI credits are supported.
   */
  "quotaNamespace": string;
  /**
   * UUID of the authenticated requester.
   */
  "requestedByUserId": string;
  /**
   * The durable request decision, independent of whether its grant is still active.
   */
  "status": TemporaryGrantRequestStatus;
  /**
   * Target monthly AI-credit limit in positive whole credits, not additional credits. Fractional credits are not accepted.
   */
  "total": number;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    decidedAt: {
      baseName: "decided_at",
      type: "Date",
      format: "date-time",
    },
    decidedByUserId: {
      baseName: "decided_by_user_id",
      type: "string",
      format: "uuid",
    },
    entityKey: {
      baseName: "entity_key",
      type: "string",
      required: true,
    },
    expiresAt: {
      baseName: "expires_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    grantState: {
      baseName: "grant_state",
      type: "TemporaryGrantRequestGrantState",
    },
    justification: {
      baseName: "justification",
      type: "string",
      required: true,
    },
    quotaNamespace: {
      baseName: "quota_namespace",
      type: "string",
      required: true,
    },
    requestedByUserId: {
      baseName: "requested_by_user_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    status: {
      baseName: "status",
      type: "TemporaryGrantRequestStatus",
      required: true,
    },
    total: {
      baseName: "total",
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
    return TemporaryGrantRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
