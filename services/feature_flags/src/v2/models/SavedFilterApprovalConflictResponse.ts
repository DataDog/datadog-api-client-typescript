import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SavedFilterApprovalConflictData } from "./SavedFilterApprovalConflictData";

/**
 * One or more feature flags that reference this saved filter require approval for the rule update.
 */
export class SavedFilterApprovalConflictResponse {
  /**
   * One or more feature flags that reference this saved filter require approval for the rule update.
   */
  "data": SavedFilterApprovalConflictData;
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
      type: "SavedFilterApprovalConflictData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SavedFilterApprovalConflictResponse.attributeTypeMap;
  }

  public constructor() {}
}
