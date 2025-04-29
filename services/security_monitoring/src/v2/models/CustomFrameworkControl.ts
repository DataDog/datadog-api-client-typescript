import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Framework Control.
 */
export class CustomFrameworkControl {
  /**
   * Control Name.
   */
  "name": string;
  /**
   * Rule IDs.
   */
  "rulesId": Array<string>;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    rulesId: {
      baseName: "rules_id",
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
    return CustomFrameworkControl.attributeTypeMap;
  }

  public constructor() {}
}
