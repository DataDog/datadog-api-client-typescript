/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ArchiveSearchRehydration } from "./ArchiveSearchRehydration";
import { ArchiveSearchStatus } from "./ArchiveSearchStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an Archive Search.
 */
export class ArchiveSearchResponseAttributes {
  /**
   * ID of the archive being searched.
   */
  "archiveId": string;
  /**
   * Number of bytes read from the archive at the end of the search.
   */
  "bytesScanned": number;
  /**
   * Time the Archive Search finished, as an ISO 8601 timestamp.
   * Absent while the search is still running.
   */
  "completedAt"?: Date;
  /**
   * Time the Archive Search was created, as an ISO 8601 timestamp.
   */
  "createdAt": Date;
  /**
   * Free-text description of the Archive Search.
   */
  "description"?: string;
  /**
   * Number of events read from the archive at the end of the search.
   */
  "eventsScanned": number;
  /**
   * Estimated time left before the Archive Search completes, in seconds.
   */
  "expectedDuration"?: number;
  /**
   * Start of the searched time range, as an ISO 8601 timestamp.
   */
  "from": Date;
  /**
   * Name of the Archive Search.
   */
  "name": string;
  /**
   * Log search query used to filter the archived logs.
   */
  "query": string;
  /**
   * Rehydration settings of the Archive Search. Absent when the search only scans the archive
   * without indexing the results.
   */
  "rehydration"?: ArchiveSearchRehydration;
  /**
   * Current state of an Archive Search.
   */
  "status": ArchiveSearchStatus;
  /**
   * End of the searched time range, as an ISO 8601 timestamp.
   */
  "to": Date;

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
    archiveId: {
      baseName: "archive_id",
      type: "string",
      required: true,
    },
    bytesScanned: {
      baseName: "bytes_scanned",
      type: "number",
      required: true,
      format: "int64",
    },
    completedAt: {
      baseName: "completed_at",
      type: "Date",
      format: "date-time",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    eventsScanned: {
      baseName: "events_scanned",
      type: "number",
      required: true,
      format: "int64",
    },
    expectedDuration: {
      baseName: "expected_duration",
      type: "number",
      format: "int64",
    },
    from: {
      baseName: "from",
      type: "Date",
      required: true,
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
    rehydration: {
      baseName: "rehydration",
      type: "ArchiveSearchRehydration",
    },
    status: {
      baseName: "status",
      type: "ArchiveSearchStatus",
      required: true,
    },
    to: {
      baseName: "to",
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
    return ArchiveSearchResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
