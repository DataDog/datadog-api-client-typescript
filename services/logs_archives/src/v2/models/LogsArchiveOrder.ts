import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsArchiveOrderDefinition } from "./LogsArchiveOrderDefinition";

/**
 * A ordered list of archive IDs.
 */
export class LogsArchiveOrder {
  /**
   * The definition of an archive order.
   */
  "data"?: LogsArchiveOrderDefinition;
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
      type: "LogsArchiveOrderDefinition",
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
    return LogsArchiveOrder.attributeTypeMap;
  }

  public constructor() {}
}
