import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BulkMuteFindingsResponseData } from "./BulkMuteFindingsResponseData";

/**
 * The expected response schema.
 */
export class BulkMuteFindingsResponse {
  /**
   * Data object containing the ID of the request that was updated.
   */
  "data": BulkMuteFindingsResponseData;
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
      type: "BulkMuteFindingsResponseData",
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
    return BulkMuteFindingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
