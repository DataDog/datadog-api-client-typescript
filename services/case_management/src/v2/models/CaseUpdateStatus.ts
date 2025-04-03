import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseResourceType } from "./CaseResourceType";
import { CaseUpdateStatusAttributes } from "./CaseUpdateStatusAttributes";

/**
 * Case update status
 */
export class CaseUpdateStatus {
  /**
   * Case update status attributes
   */
  "attributes": CaseUpdateStatusAttributes;
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
      type: "CaseUpdateStatusAttributes",
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
    return CaseUpdateStatus.attributeTypeMap;
  }

  public constructor() {}
}
