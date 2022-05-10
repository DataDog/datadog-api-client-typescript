/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsArchiveDestinationGCSType } from "./LogsArchiveDestinationGCSType";
import { LogsArchiveIntegrationGCS } from "./LogsArchiveIntegrationGCS";

import { AttributeTypeMap } from "../util";

/**
 * The GCS archive destination.
 */
export class LogsArchiveDestinationGCS {
  /**
   * The bucket where the archive will be stored.
   */
  "bucket": string;
  /**
   * The GCS archive's integration destination.
   */
  "integration": LogsArchiveIntegrationGCS;
  /**
   * The archive path.
   */
  "path"?: string;
  /**
   * Type of the GCS archive destination.
   */
  "type": LogsArchiveDestinationGCSType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    bucket: {
      baseName: "bucket",
      type: "string",
      required: true,
    },
    integration: {
      baseName: "integration",
      type: "LogsArchiveIntegrationGCS",
      required: true,
    },
    path: {
      baseName: "path",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "LogsArchiveDestinationGCSType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsArchiveDestinationGCS.attributeTypeMap;
  }

  public constructor() {}
}
