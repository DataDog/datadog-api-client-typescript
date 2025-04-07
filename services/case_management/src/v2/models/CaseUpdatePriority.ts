import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseResourceType } from "./CaseResourceType";
import { CaseUpdatePriorityAttributes } from "./CaseUpdatePriorityAttributes";

/**
 * Case priority status
 */
export class CaseUpdatePriority {
  /**
   * Case update priority attributes
   */
  "attributes": CaseUpdatePriorityAttributes;
  /**
   * Case resource type
   */
  "type": CaseResourceType;
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
    attributes: {
      baseName: "attributes",
      type: "CaseUpdatePriorityAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CaseResourceType",
      required: true,
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
    return CaseUpdatePriority.attributeTypeMap;
  }

  public constructor() {}
}
