import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsArchiveDestinationS3Type } from "./LogsArchiveDestinationS3Type";
import { LogsArchiveEncryptionS3 } from "./LogsArchiveEncryptionS3";
import { LogsArchiveIntegrationS3 } from "./LogsArchiveIntegrationS3";
import { LogsArchiveStorageClassS3Type } from "./LogsArchiveStorageClassS3Type";

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
      type: "{ [key: string]: any; }",
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
