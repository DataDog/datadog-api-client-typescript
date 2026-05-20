import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseResourceType } from "./CaseResourceType";
import { CaseUpdateDueDateAttributes } from "./CaseUpdateDueDateAttributes";

/**
 * Data object for updating a case's due date.
 */
export class CaseUpdateDueDate {
  /**
   * Attributes for setting or clearing a case's due date.
   */
  "attributes": CaseUpdateDueDateAttributes;
  /**
   * JSON:API resource type for cases.
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
      type: "CaseUpdateDueDateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CaseResourceType",
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
    return CaseUpdateDueDate.attributeTypeMap;
  }

  public constructor() {}
}
