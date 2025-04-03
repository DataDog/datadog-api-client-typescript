import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PowerpackTemplateVariableContents } from "./PowerpackTemplateVariableContents";

/**
 * Powerpack template variables.
 */
export class PowerpackTemplateVariables {
  /**
   * Template variables controlled at the powerpack level.
   */
  "controlledByPowerpack"?: Array<PowerpackTemplateVariableContents>;
  /**
   * Template variables controlled by the external resource, such as the dashboard this powerpack is on.
   */
  "controlledExternally"?: Array<PowerpackTemplateVariableContents>;
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
    controlledByPowerpack: {
      baseName: "controlled_by_powerpack",
      type: "Array<PowerpackTemplateVariableContents>",
    },
    controlledExternally: {
      baseName: "controlled_externally",
      type: "Array<PowerpackTemplateVariableContents>",
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
    return PowerpackTemplateVariables.attributeTypeMap;
  }

  public constructor() {}
}
