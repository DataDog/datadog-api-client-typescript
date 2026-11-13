import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueSnoozeRequestDataAttributes } from "./IssueSnoozeRequestDataAttributes";
import { IssueSnoozeRequestDataType } from "./IssueSnoozeRequestDataType";

/**
 * Snooze issue request.
 */
export class IssueSnoozeRequestData {
  /**
   * Object describing an issue snooze request.
   */
  "attributes": IssueSnoozeRequestDataAttributes;
  /**
   * Issue identifier.
   */
  "id": string;
  /**
   * Type of the object.
   */
  "type": IssueSnoozeRequestDataType;
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
      type: "IssueSnoozeRequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IssueSnoozeRequestDataType",
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
    return IssueSnoozeRequestData.attributeTypeMap;
  }

  public constructor() {}
}
