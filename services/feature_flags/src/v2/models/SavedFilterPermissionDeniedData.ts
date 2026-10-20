import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SavedFilterPermissionDeniedAttributes } from "./SavedFilterPermissionDeniedAttributes";
import { SavedFilterPermissionDeniedType } from "./SavedFilterPermissionDeniedType";

/**
 * The caller lacks edit permission on one or more feature flags that reference this saved filter.
 */
export class SavedFilterPermissionDeniedData {
  /**
   * The caller lacks edit permission on one or more feature flags that reference this saved filter.
   */
  "attributes": SavedFilterPermissionDeniedAttributes;
  /**
   * The ID of the saved filter.
   */
  "id": string;
  /**
   * The resource type for this saved filter update error.
   */
  "type": SavedFilterPermissionDeniedType;
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
      type: "SavedFilterPermissionDeniedAttributes",
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
      type: "SavedFilterPermissionDeniedType",
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
    return SavedFilterPermissionDeniedData.attributeTypeMap;
  }

  public constructor() {}
}
