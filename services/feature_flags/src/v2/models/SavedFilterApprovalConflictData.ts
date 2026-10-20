import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SavedFilterApprovalConflictAttributes } from "./SavedFilterApprovalConflictAttributes";
import { SavedFilterApprovalConflictType } from "./SavedFilterApprovalConflictType";

/**
 * One or more feature flags that reference this saved filter require approval for the rule update.
 */
export class SavedFilterApprovalConflictData {
  /**
   * One or more feature flags that reference this saved filter require approval for the rule update.
   */
  "attributes": SavedFilterApprovalConflictAttributes;
  /**
   * The ID of the saved filter.
   */
  "id": string;
  /**
   * The resource type for this saved filter update error.
   */
  "type": SavedFilterApprovalConflictType;
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
      type: "SavedFilterApprovalConflictAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "SavedFilterApprovalConflictType",
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
    return SavedFilterApprovalConflictData.attributeTypeMap;
  }

  public constructor() {}
}
