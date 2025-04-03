import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseStatus } from "./CaseStatus";

/**
 * Case update status attributes
 */
export class CaseUpdateStatusAttributes {
  /**
   * Case status
   */
  "status": CaseStatus;
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
    status: {
      baseName: "status",
      type: "CaseStatus",
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
    return CaseUpdateStatusAttributes.attributeTypeMap;
  }

  public constructor() {}
}
