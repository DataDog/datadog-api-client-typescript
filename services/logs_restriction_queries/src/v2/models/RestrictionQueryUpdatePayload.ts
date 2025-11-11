import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RestrictionQueryUpdateData } from "./RestrictionQueryUpdateData";

/**
 * Update a restriction query.
 */
export class RestrictionQueryUpdatePayload {
  /**
   * Data related to the update of a restriction query.
   */
  "data"?: RestrictionQueryUpdateData;
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
      type: "RestrictionQueryUpdateData",
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
    return RestrictionQueryUpdatePayload.attributeTypeMap;
  }

  public constructor() {}
}
