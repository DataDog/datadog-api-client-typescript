/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumRecoveryDiscoveryStatus } from "./RumRecoveryDiscoveryStatus";
import { RumRecoveryRequestStatus } from "./RumRecoveryRequestStatus";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Batch recovery progress. Status updates can appear here before they appear in request details.
 */
export class RumRecoveryBatchListAttributes {
  /**
   * Creation time.
   */
  "createdAt": Date;
  /**
   * Batch discovery state. QUEUED indicates that the request is waiting for processing capacity.
   */
  "discoveryStatus": RumRecoveryDiscoveryStatus;
  /**
   * Batch estimate stored at creation, when present. New batches use a fresh server estimate; older batches may contain a client-supplied estimate.
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
   * Discovered sessions.
   */
  "sessionsDiscovered": Int64;
  /**
   * Failed sessions.
   */
  "sessionsFailed": Int64;
  /**
   * Processed sessions.
   */
  "sessionsProcessed": Int64;
  /**
   * Completed slices.
   */
  "slicesCompleted": Int64;
  /**
   * Failed slices.
   */
  "slicesFailed": Int64;
  /**
   * Recovery request state.
   */
  "status": RumRecoveryRequestStatus;
  /**
   * End of the range in Unix milliseconds.
   */
  "to": Int64;
  /**
   * Total discovery slices.
   */
  "totalSlices": Int64;
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
      required: true,
    },
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
    sessionsDiscovered: {
      baseName: "sessions_discovered",
      type: "number",
      required: true,
      format: "int64",
    },
    sessionsFailed: {
      baseName: "sessions_failed",
      type: "number",
      required: true,
      format: "int64",
    },
    sessionsProcessed: {
      baseName: "sessions_processed",
      type: "number",
      required: true,
      format: "int64",
    },
    slicesCompleted: {
      baseName: "slices_completed",
      type: "number",
      required: true,
      format: "int64",
    },
    slicesFailed: {
      baseName: "slices_failed",
      type: "number",
      required: true,
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
      required: true,
      format: "int64",
    },
    totalSlices: {
      baseName: "total_slices",
      type: "number",
      required: true,
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
    return RumRecoveryBatchListAttributes.attributeTypeMap;
  }

  public constructor() {}
}
