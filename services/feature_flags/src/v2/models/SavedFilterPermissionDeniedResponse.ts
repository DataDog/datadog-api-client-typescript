import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SavedFilterPermissionDeniedData } from "./SavedFilterPermissionDeniedData";

/**
 * The caller lacks edit permission on one or more feature flags that reference this saved filter.
 */
export class SavedFilterPermissionDeniedResponse {
  /**
   * The caller lacks edit permission on one or more feature flags that reference this saved filter.
   */
  "data": SavedFilterPermissionDeniedData;
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
      type: "SavedFilterPermissionDeniedData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SavedFilterPermissionDeniedResponse.attributeTypeMap;
  }

  public constructor() {}
}
