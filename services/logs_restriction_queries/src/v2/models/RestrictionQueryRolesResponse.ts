import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RestrictionQueryRole } from "./RestrictionQueryRole";

/**
 * Response containing information about roles attached to a restriction query.
 */
export class RestrictionQueryRolesResponse {
  /**
   * Array of roles.
   */
  "data"?: Array<RestrictionQueryRole>;
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
      type: "Array<RestrictionQueryRole>",
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
    return RestrictionQueryRolesResponse.attributeTypeMap;
  }

  public constructor() {}
}
