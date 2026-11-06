import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRecoveredSession } from "./RumRecoveredSession";
import { RumRecoveryBatchRequestType } from "./RumRecoveryBatchRequestType";
import { RumRecoveryDiscoveryStatus } from "./RumRecoveryDiscoveryStatus";
import { RumRecoveryRequestStatus } from "./RumRecoveryRequestStatus";

/**
 * Recovery progress. Batch-only attributes are omitted for targeted requests; request_type is also omitted for targeted requests.
 */
export class RumRecoveryRequestAttributes {
  /**
   * Creation time.
   */
  "createdAt": Date;
  /**
   * Batch discovery state. QUEUED indicates that the request is waiting for processing capacity.
   */
  "discoveryStatus"?: RumRecoveryDiscoveryStatus;
  /**
   * Failure details, if present.
   */
  "errorMessage"?: string;
  /**
   * Batch estimate stored at creation, when present. New batches use a fresh server estimate; older batches may contain a client-supplied estimate.
   */
  "estimatedCount"?: number;
  /**
   * Failed session count.
   */
  "failedSessions": number;
  /**
   * Start of the range in Unix milliseconds. Must be positive and earlier than to.
   */
  "from"?: number;
  /**
   * Processed session count.
   */
  "processedSessions": number;
  /**
   * RUM search query. Not blank, at most 4096 bytes for batch creation and count.
   */
  "query"?: string;
  /**
   * Query-based batch recovery.
   */
  "requestType"?: RumRecoveryBatchRequestType;
  /**
   * Targeted session progress. Omitted when empty or not applicable.
   */
  "sessions"?: Array<RumRecoveredSession>;
  /**
   * Discovered sessions.
   */
  "sessionsDiscovered"?: number;
  /**
   * Failed sessions.
   */
  "sessionsFailed"?: number;
  /**
   * Processed sessions.
   */
  "sessionsProcessed"?: number;
  /**
   * Completed slices.
   */
  "slicesCompleted"?: number;
  /**
   * Failed slices.
   */
  "slicesFailed"?: number;
  /**
   * Recovery request state.
   */
  "status": RumRecoveryRequestStatus;
  /**
   * End of the range in Unix milliseconds.
   */
  "to"?: number;
  /**
   * Total targeted sessions. Omitted while a batch total is unknown.
   */
  "totalSessions"?: number;
  /**
   * Total discovery slices.
   */
  "totalSlices"?: number;
  /**
   * Last update time.
   */
  "updatedAt": Date;
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
    discoveryStatus: {
      baseName: "discovery_status",
      type: "RumRecoveryDiscoveryStatus",
    },
    errorMessage: {
      baseName: "error_message",
      type: "string",
    },
    estimatedCount: {
      baseName: "estimated_count",
      type: "number",
      format: "int64",
    },
    failedSessions: {
      baseName: "failed_sessions",
      type: "number",
      required: true,
      format: "int64",
    },
    from: {
      baseName: "from",
      type: "number",
      format: "int64",
    },
    processedSessions: {
      baseName: "processed_sessions",
      type: "number",
      required: true,
      format: "int64",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    requestType: {
      baseName: "request_type",
      type: "RumRecoveryBatchRequestType",
    },
    sessions: {
      baseName: "sessions",
      type: "Array<RumRecoveredSession>",
    },
    sessionsDiscovered: {
      baseName: "sessions_discovered",
      type: "number",
      format: "int64",
    },
    sessionsFailed: {
      baseName: "sessions_failed",
      type: "number",
      format: "int64",
    },
    sessionsProcessed: {
      baseName: "sessions_processed",
      type: "number",
      format: "int64",
    },
    slicesCompleted: {
      baseName: "slices_completed",
      type: "number",
      format: "int64",
    },
    slicesFailed: {
      baseName: "slices_failed",
      type: "number",
      format: "int64",
    },
    status: {
      baseName: "status",
      type: "RumRecoveryRequestStatus",
      required: true,
    },
    to: {
      baseName: "to",
      type: "number",
      format: "int64",
    },
    totalSessions: {
      baseName: "total_sessions",
      type: "number",
      format: "int64",
    },
    totalSlices: {
      baseName: "total_slices",
      type: "number",
      format: "int64",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return RumRecoveryRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
