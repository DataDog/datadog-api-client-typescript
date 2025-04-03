import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The properties of the state variable.
 */
export class StateVariableProperties {
  /**
   * The default value of the state variable.
   */
  "defaultValue"?: any;
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
    defaultValue: {
      baseName: "defaultValue",
      type: "any",
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
    return StateVariableProperties.attributeTypeMap;
  }

  public constructor() {}
}
