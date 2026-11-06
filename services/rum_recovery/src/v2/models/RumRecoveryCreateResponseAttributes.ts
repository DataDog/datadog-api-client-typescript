import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRecoveryDiscoveryStatus } from "./RumRecoveryDiscoveryStatus";
import { RumRecoveryRequestStatus } from "./RumRecoveryRequestStatus";

/**
 * Accepted recovery request.
 */
export class RumRecoveryCreateResponseAttributes {
  /**
   * Creation time.
   */
  "createdAt": Date;
  /**
   * Batch discovery state. QUEUED indicates that the request is waiting for processing capacity.
   */
  "discoveryStatus"?: RumRecoveryDiscoveryStatus;
  /**
   * Batch estimate stored at creation, when present. New batches use a fresh server estimate; older batches may contain a client-supplied estimate.
   */
  "estimatedCount"?: number;
  /**
   * Failed session count.
   */
  "failedSessions": number;
  /**
   * Processed session count.
   */
  "processedSessions": number;
  /**
   * Recovery request state.
   */
  "status": RumRecoveryRequestStatus;
  /**
   * Total targeted sessions. Omitted while a batch total is unknown.
   */
  "totalSessions"?: number;
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
    processedSessions: {
      baseName: "processed_sessions",
      type: "number",
      required: true,
      format: "int64",
    },
    status: {
      baseName: "status",
      type: "RumRecoveryRequestStatus",
      required: true,
    },
    totalSessions: {
      baseName: "total_sessions",
      type: "number",
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
    return RumRecoveryCreateResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
