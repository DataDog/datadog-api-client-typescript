/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsArchiveDestination } from "./LogsArchiveDestination";
import { LogsArchiveState } from "./LogsArchiveState";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes associated with the archive.
 */
export class LogsArchiveAttributes {
  /**
   * An archive's destination.
   */
  "destination": LogsArchiveDestination | null;
  /**
   * To store the tags in the archive, set the value "true".
   * If it is set to "false", the tags will be deleted when the logs are sent to the archive.
   */
  "includeTags"?: boolean;
  /**
   * The archive name.
   */
  "name": string;
  /**
   * The archive query/filter. Logs matching this query are included in the archive.
   */
  "query": string;
  /**
   * Maximum scan size for rehydration from this archive.
   */
  "rehydrationMaxScanSizeInGb"?: number;
  /**
   * An array of tags to add to rehydrated logs from an archive.
   */
  "rehydrationTags"?: Array<string>;
  /**
   * The state of the archive.
   */
  "state"?: LogsArchiveState;

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
    destination: {
      baseName: "destination",
      type: "LogsArchiveDestination",
      required: true,
    },
    includeTags: {
      baseName: "include_tags",
      type: "boolean",
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
    rehydrationMaxScanSizeInGb: {
      baseName: "rehydration_max_scan_size_in_gb",
      type: "number",
      format: "int64",
    },
    rehydrationTags: {
      baseName: "rehydration_tags",
      type: "Array<string>",
    },
    state: {
      baseName: "state",
      type: "LogsArchiveState",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsArchiveAttributes.attributeTypeMap;
  }

  public constructor() {}
}
