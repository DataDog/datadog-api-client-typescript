import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class IncidentRuleAttributesResponse {
  /**
   * When the rule was created.
   */
  "createdAt": Date;
  /**
   * When the rule was last modified.
   */
  "modifiedAt": Date;
  /**
   * The name of the rule.
   */
  "name": string;
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
    createdAt: {
      baseName: "createdAt",
      type: "Date",
      required: true,
      format: "date-time",
    },
    modifiedAt: {
      baseName: "modifiedAt",
      type: "Date",
      required: true,
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return IncidentRuleAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
