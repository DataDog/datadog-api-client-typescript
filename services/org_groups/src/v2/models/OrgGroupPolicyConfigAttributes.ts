import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of an org group policy config.
 */
export class OrgGroupPolicyConfigAttributes {
  /**
   * The allowed values for this config.
   */
  "allowedValues": Array<string>;
  /**
   * The default value for this config.
   */
  "defaultValue": any;
  /**
   * The description of the policy config.
   */
  "description": string;
  /**
   * The name of the policy config.
   */
  "name": string;
  /**
   * The type of the value for this config.
   */
  "valueType": string;
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
    allowedValues: {
      baseName: "allowed_values",
      type: "Array<string>",
      required: true,
    },
    defaultValue: {
      baseName: "default_value",
      type: "any",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    valueType: {
      baseName: "value_type",
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
    return OrgGroupPolicyConfigAttributes.attributeTypeMap;
  }

  public constructor() {}
}
