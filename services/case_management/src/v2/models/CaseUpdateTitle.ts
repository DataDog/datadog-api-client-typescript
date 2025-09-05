import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseResourceType } from "./CaseResourceType";
import { CaseUpdateTitleAttributes } from "./CaseUpdateTitleAttributes";

/**
 * Case update title
 */
export class CaseUpdateTitle {
  /**
   * Case update title attributes
   */
  "attributes": CaseUpdateTitleAttributes;
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
      type: "CaseUpdateTitleAttributes",
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
    return CaseUpdateTitle.attributeTypeMap;
  }

  public constructor() {}
}
