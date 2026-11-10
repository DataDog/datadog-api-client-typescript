import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueBitsInvestigationReference } from "./IssueBitsInvestigationReference";

/**
 * Bits AI investigation linked to the issue, returned when `bits_investigation` is requested
 * in the `include` query parameter.
 */
export class IssueBitsInvestigationRelationship {
  /**
   * The Bits AI investigation linked to the issue.
   */
  "data": IssueBitsInvestigationReference;
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
    data: {
      baseName: "data",
      type: "IssueBitsInvestigationReference",
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
    return IssueBitsInvestigationRelationship.attributeTypeMap;
  }

  public constructor() {}
}
