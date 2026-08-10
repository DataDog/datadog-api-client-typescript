import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TriggerAttributes } from "./TriggerAttributes";

/**
 * Attributes for the trigger investigation request.
 */
export class TriggerInvestigationRequestDataAttributes {
  /**
   * The trigger definition for starting an investigation.
   */
  "trigger": TriggerAttributes;
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
    trigger: {
      baseName: "trigger",
      type: "TriggerAttributes",
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
    return TriggerInvestigationRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
