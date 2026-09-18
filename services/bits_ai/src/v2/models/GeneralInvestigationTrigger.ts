import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GeneralInvestigationAttributes } from "./GeneralInvestigationAttributes";
import { GeneralInvestigationTriggerType } from "./GeneralInvestigationTriggerType";

/**
 * A trigger created from a general investigation request.
 */
export class GeneralInvestigationTrigger {
  /**
   * Attributes for a general investigation, not tied to a specific monitor alert.
   */
  "generalInvestigation": GeneralInvestigationAttributes;
  /**
   * The type of general investigation trigger.
   */
  "type": GeneralInvestigationTriggerType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    generalInvestigation: {
      baseName: "general_investigation",
      type: "GeneralInvestigationAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GeneralInvestigationTriggerType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GeneralInvestigationTrigger.attributeTypeMap;
  }

  public constructor() {}
}
