import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamsOwnershipMappingBatchError } from "./TeamsOwnershipMappingBatchError";
import { TeamsOwnershipMappingBatchResult } from "./TeamsOwnershipMappingBatchResult";

/**
 * The response body for the bulk create and remove operation. On success, `atomic:results`
 * contains one entry per operation. Add results appear before remove results and may not match
 * request order. Correlate add results by their `type` and `id` rather than by array position.
 * On failure, no operations were applied and `errors` describes what went wrong.
 */
export class TeamsOwnershipMappingBatchResponse {
  /**
   * The result of each operation.
   * Add operations are processed first, then remove operations, so results may not appear
   * in the same order as the request. Present only on success.
   */
  "atomicResults"?: Array<TeamsOwnershipMappingBatchResult>;
  /**
   * The validation or processing errors encountered. Present only when the request could not be completed.
   */
  "errors"?: Array<TeamsOwnershipMappingBatchError>;
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
    atomicResults: {
      baseName: "atomic:results",
      type: "Array<TeamsOwnershipMappingBatchResult>",
    },
    errors: {
      baseName: "errors",
      type: "Array<TeamsOwnershipMappingBatchError>",
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
    return TeamsOwnershipMappingBatchResponse.attributeTypeMap;
  }

  public constructor() {}
}
