import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseAssignAttributes } from "./CaseAssignAttributes";
import { CaseResourceType } from "./CaseResourceType";

/**
 * Case assign
 */
export class CaseAssign {
  /**
   * Case assign attributes
   */
  "attributes": CaseAssignAttributes;
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
      type: "CaseAssignAttributes",
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
    return CaseAssign.attributeTypeMap;
  }

  public constructor() {}
}
