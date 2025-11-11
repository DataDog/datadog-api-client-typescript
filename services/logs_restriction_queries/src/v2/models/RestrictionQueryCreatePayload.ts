import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RestrictionQueryCreateData } from "./RestrictionQueryCreateData";

/**
 * Create a restriction query.
 */
export class RestrictionQueryCreatePayload {
  /**
   * Data related to the creation of a restriction query.
   */
  "data"?: RestrictionQueryCreateData;
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
      type: "RestrictionQueryCreateData",
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
    return RestrictionQueryCreatePayload.attributeTypeMap;
  }

  public constructor() {}
}
