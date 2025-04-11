import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsArchiveEncryptionS3Type } from "./LogsArchiveEncryptionS3Type";

/**
 * The S3 encryption settings.
 */
export class LogsArchiveEncryptionS3 {
  /**
   * An Amazon Resource Name (ARN) used to identify an AWS KMS key.
   */
  "key"?: string;
  /**
   * Type of S3 encryption for a destination.
   */
  "type": LogsArchiveEncryptionS3Type;
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
    key: {
      baseName: "key",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "LogsArchiveEncryptionS3Type",
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
    return LogsArchiveEncryptionS3.attributeTypeMap;
  }

  public constructor() {}
}
