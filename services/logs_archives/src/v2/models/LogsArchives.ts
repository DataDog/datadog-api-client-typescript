import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsArchiveDefinition } from "./LogsArchiveDefinition";

/**
 * The available archives.
 */
export class LogsArchives {
  /**
   * A list of archives.
   */
  "data"?: Array<LogsArchiveDefinition>;
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
    data: {
      baseName: "data",
      type: "Array<LogsArchiveDefinition>",
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
    return LogsArchives.attributeTypeMap;
  }

  public constructor() {}
}
