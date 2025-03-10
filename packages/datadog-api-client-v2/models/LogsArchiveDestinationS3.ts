/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsArchiveDestinationS3Type } from "./LogsArchiveDestinationS3Type";
import { LogsArchiveEncryptionS3 } from "./LogsArchiveEncryptionS3";
import { LogsArchiveIntegrationS3 } from "./LogsArchiveIntegrationS3";
import { LogsArchiveStorageClassS3Type } from "./LogsArchiveStorageClassS3Type";

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
   * The S3 encryption settings.
   */
  "encryption"?: LogsArchiveEncryptionS3;
  /**
   * The S3 Archive's integration destination.
   */
  "integration": LogsArchiveIntegrationS3;
  /**
   * The archive path.
   */
  "path"?: string;
  /**
   * The storage class where the archive will be stored.
   */
  "storageClass"?: LogsArchiveStorageClassS3Type;
  /**
   * Type of the S3 archive destination.
   */
  "type": LogsArchiveDestinationS3Type;

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
    bucket: {
      baseName: "bucket",
      type: "string",
      required: true,
    },
    encryption: {
      baseName: "encryption",
      type: "LogsArchiveEncryptionS3",
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
    storageClass: {
      baseName: "storage_class",
      type: "LogsArchiveStorageClassS3Type",
    },
    type: {
      baseName: "type",
      type: "LogsArchiveDestinationS3Type",
      required: true,
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
    return LogsArchiveDestinationS3.attributeTypeMap;
  }

  public constructor() {}
}
