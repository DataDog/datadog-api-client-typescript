import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseResourceType } from "./CaseResourceType";
import { CaseUpdateStatusAttributes } from "./CaseUpdateStatusAttributes";

/**
 * Work item update status
 */
export class CaseUpdateStatus {
  /**
   * Work item update status attributes
   */
  "attributes": CaseUpdateStatusAttributes;
  /**
   * JSON:API resource type for work items.
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
      type: "{ [key: string]: any; }",
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
