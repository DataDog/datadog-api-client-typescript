import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsArchiveCreateRequestDefinition } from "./LogsArchiveCreateRequestDefinition";

/**
 * The logs archive.
 */
export class LogsArchiveCreateRequest {
  /**
   * The definition of an archive.
   */
  "data"?: LogsArchiveCreateRequestDefinition;
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
      type: "LogsArchiveCreateRequestDefinition",
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
    return LogsArchiveCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
