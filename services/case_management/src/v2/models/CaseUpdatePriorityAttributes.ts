import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CasePriority } from "./CasePriority";

/**
 * Case update priority attributes
 */
export class CaseUpdatePriorityAttributes {
  /**
   * Case priority
   */
  "priority": CasePriority;
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
    priority: {
      baseName: "priority",
      type: "CasePriority",
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
    return CaseUpdatePriorityAttributes.attributeTypeMap;
  }

  public constructor() {}
}
