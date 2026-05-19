import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseViewCreateAttributes } from "./CaseViewCreateAttributes";
import { CaseViewResourceType } from "./CaseViewResourceType";

/**
 * Data object for creating a case view.
 */
export class CaseViewCreate {
  /**
   * Attributes required to create a case view.
   */
  "attributes": CaseViewCreateAttributes;
  /**
   * JSON:API resource type for case views.
   */
  "type": CaseViewResourceType;
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
      type: "CaseViewCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CaseViewResourceType",
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
    return CaseViewCreate.attributeTypeMap;
  }

  public constructor() {}
}
