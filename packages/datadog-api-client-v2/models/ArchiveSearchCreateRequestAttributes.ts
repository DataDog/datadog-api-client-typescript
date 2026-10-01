/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ArchiveSearchCreateRehydration } from "./ArchiveSearchCreateRehydration";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes accepted when creating an Archive Search.
 */
export class ArchiveSearchCreateRequestAttributes {
  /**
   * ID of the archive to search. Use the Logs Archives API to list the archives of the organization.
   */
  "archiveId": string;
  /**
   * Free-text description of the Archive Search.
   */
  "description"?: string;
  /**
   * Start of the time range to search, as an ISO 8601 timestamp.
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
   * Rehydration settings. Include this object to index the matched logs into a retained historical view.
   * Omit it to run an Archive Search that only scans the archive.
   */
  "rehydration"?: ArchiveSearchCreateRehydration;
  /**
   * End of the time range to search, as an ISO 8601 timestamp. Must be after `from`.
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
    description: {
      baseName: "description",
      type: "string",
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
      type: "ArchiveSearchCreateRehydration",
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
    return ArchiveSearchCreateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
