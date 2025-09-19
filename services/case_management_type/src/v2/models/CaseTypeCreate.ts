import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseTypeResourceAttributes } from "./CaseTypeResourceAttributes";
import { CaseTypeResourceType } from "./CaseTypeResourceType";

/**
 * Case type
 */
export class CaseTypeCreate {
  /**
   * Case Type resource attributes
   */
  "attributes": CaseTypeResourceAttributes;
  /**
   * Case type resource type
   */
  "type": CaseTypeResourceType;
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
      type: "CaseTypeResourceAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CaseTypeResourceType",
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
    return CaseTypeCreate.attributeTypeMap;
  }

  public constructor() {}
}
