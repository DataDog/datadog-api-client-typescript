import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsArchiveOrderAttributes } from "./LogsArchiveOrderAttributes";
import { LogsArchiveOrderDefinitionType } from "./LogsArchiveOrderDefinitionType";

/**
 * The definition of an archive order.
 */
export class LogsArchiveOrderDefinition {
  /**
   * The attributes associated with the archive order.
   */
  "attributes": LogsArchiveOrderAttributes;
  /**
   * Type of the archive order definition.
   */
  "type": LogsArchiveOrderDefinitionType;
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
      type: "LogsArchiveOrderAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsArchiveOrderDefinitionType",
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
    return LogsArchiveOrderDefinition.attributeTypeMap;
  }

  public constructor() {}
}
