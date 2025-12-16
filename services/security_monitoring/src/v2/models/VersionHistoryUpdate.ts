import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { VersionHistoryUpdateType } from "./VersionHistoryUpdateType";

/**
 * A change in a rule version.
 */
export class VersionHistoryUpdate {
  /**
   * The new value of the field.
   */
  "change"?: string;
  /**
   * The field that was changed.
   */
  "field"?: string;
  /**
   * The type of change.
   */
  "type"?: VersionHistoryUpdateType;
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
    change: {
      baseName: "change",
      type: "string",
    },
    field: {
      baseName: "field",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "VersionHistoryUpdateType",
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
    return VersionHistoryUpdate.attributeTypeMap;
  }

  public constructor() {}
}
