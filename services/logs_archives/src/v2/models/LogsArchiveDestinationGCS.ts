import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsArchiveDestinationGCSType } from "./LogsArchiveDestinationGCSType";
import { LogsArchiveIntegrationGCS } from "./LogsArchiveIntegrationGCS";

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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
