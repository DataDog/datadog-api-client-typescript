import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The attributes associated with the archive order.
 */
export class LogsArchiveOrderAttributes {
  /**
   * An ordered array of `<ARCHIVE_ID>` strings, the order of archive IDs in the array
   * define the overall archives order for Datadog.
   */
  "archiveIds": Array<string>;
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
    archiveIds: {
      baseName: "archive_ids",
      type: "Array<string>",
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
    return LogsArchiveOrderAttributes.attributeTypeMap;
  }

  public constructor() {}
}
