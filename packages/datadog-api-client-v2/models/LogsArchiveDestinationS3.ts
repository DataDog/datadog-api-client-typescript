/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsArchiveDestinationS3Type } from "./LogsArchiveDestinationS3Type";
import { LogsArchiveIntegrationS3 } from "./LogsArchiveIntegrationS3";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The S3 archive destination.
 */
export class LogsArchiveDestinationS3 {
  /**
   * The bucket where the archive will be stored.
   */
  "bucket": string;
  /**
   * The S3 Archive's integration destination.
   */
  "integration": LogsArchiveIntegrationS3;
  /**
   * The archive path.
   */
  "path"?: string;
  /**
   * Type of the S3 archive destination.
   */
  "type": LogsArchiveDestinationS3Type;

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
      type: "LogsArchiveIntegrationS3",
      required: true,
    },
    path: {
      baseName: "path",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "LogsArchiveDestinationS3Type",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsArchiveDestinationS3.attributeTypeMap;
  }

  public constructor() {}
}
