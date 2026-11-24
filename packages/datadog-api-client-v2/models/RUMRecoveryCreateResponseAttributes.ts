/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMRecoveryDiscoveryStatus } from "./RUMRecoveryDiscoveryStatus";
import { RUMRecoveryRequestStatus } from "./RUMRecoveryRequestStatus";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Accepted recovery request.
 */
export class RUMRecoveryCreateResponseAttributes {
  /**
   * Creation time.
   */
  "createdAt": Date;
  /**
   * Batch discovery state. QUEUED indicates that the request is waiting for processing capacity.
   */
  "discoveryStatus"?: RUMRecoveryDiscoveryStatus;
  /**
   * Batch estimate stored at creation, when present. New batches use a fresh server estimate; older batches may contain a client-supplied estimate.
   */
  "estimatedCount"?: Int64;
  /**
   * Failed session count.
   */
  "failedSessions": Int64;
  /**
   * Processed session count.
   */
  "processedSessions": Int64;
  /**
   * Recovery request state.
   */
  "status": RUMRecoveryRequestStatus;
  /**
   * Total targeted sessions. Omitted while a batch total is unknown.
   */
  "totalSessions"?: Int64;

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
      type: "RUMRecoveryDiscoveryStatus",
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
      type: "RUMRecoveryRequestStatus",
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
    return RUMRecoveryCreateResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
