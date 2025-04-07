import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsArchiveAttributes } from "./LogsArchiveAttributes";

/**
 * The definition of an archive.
 */
export class LogsArchiveDefinition {
  /**
   * The attributes associated with the archive.
   */
  "attributes"?: LogsArchiveAttributes;
  /**
   * The archive ID.
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be archives.
   */
  "type": string;
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
    attributes: {
      baseName: "attributes",
      type: "LogsArchiveAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return LogsArchiveDefinition.attributeTypeMap;
  }

  public constructor() {}
}
