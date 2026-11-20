import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PowerpackBackendTemplateVariable } from "./PowerpackBackendTemplateVariable";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class PowerpackBackendTemplateVariables {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "controlledByPowerpack": Array<PowerpackBackendTemplateVariable>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "controlledExternally": Array<PowerpackBackendTemplateVariable>;
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
      type: "Array<PowerpackBackendTemplateVariable>",
      required: true,
    },
    controlledExternally: {
      baseName: "controlled_externally",
      type: "Array<PowerpackBackendTemplateVariable>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PowerpackBackendTemplateVariables.attributeTypeMap;
  }

  public constructor() {}
}
