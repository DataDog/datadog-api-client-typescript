import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseCountGroup } from "./CaseCountGroup";

/**
 * Attributes for the count response, including the total count and optional facet breakdowns.
 */
export class CaseCountResponseAttributes {
  /**
   * List of facet groups, one per field specified in `group_bys`.
   */
  "groups": Array<CaseCountGroup>;
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
    groups: {
      baseName: "groups",
      type: "Array<CaseCountGroup>",
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
    return CaseCountResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
