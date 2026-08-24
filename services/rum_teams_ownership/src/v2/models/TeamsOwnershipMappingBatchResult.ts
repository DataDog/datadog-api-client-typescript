import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamsOwnershipMappingBatchResultData } from "./TeamsOwnershipMappingBatchResultData";

/**
 * The result of a single operation.
 * Add operations are processed first, then remove operations, so results may not appear
 * in the same order as the request. Empty for `remove` operations.
 */
export class TeamsOwnershipMappingBatchResult {
  /**
   * The mapping created by an `add` operation.
   */
  "data"?: TeamsOwnershipMappingBatchResultData;
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
      type: "TeamsOwnershipMappingBatchResultData",
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
    return TeamsOwnershipMappingBatchResult.attributeTypeMap;
  }

  public constructor() {}
}
