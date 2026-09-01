import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An incident tag and its accepted values.
 */
export class IncidentTagValue {
  /**
   * The incident tag to match.
   */
  "tag": string;
  /**
   * The accepted values for the incident tag.
   */
  "values": Array<string>;
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
    tag: {
      baseName: "tag",
      type: "string",
      required: true,
    },
    values: {
      baseName: "values",
      type: "Array<string>",
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
    return IncidentTagValue.attributeTypeMap;
  }

  public constructor() {}
}
