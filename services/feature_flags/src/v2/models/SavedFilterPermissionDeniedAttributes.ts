import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SavedFilterFlagReference } from "./SavedFilterFlagReference";

/**
 * The caller lacks edit permission on one or more feature flags that reference this saved filter.
 */
export class SavedFilterPermissionDeniedAttributes {
  /**
   * Feature flags preventing this update.
   */
  "deniedFlags": Array<SavedFilterFlagReference>;
  /**
   * The reason the saved filter update was rejected.
   */
  "message": string;
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
    deniedFlags: {
      baseName: "denied_flags",
      type: "Array<SavedFilterFlagReference>",
      required: true,
    },
    message: {
      baseName: "message",
      type: "string",
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
    return SavedFilterPermissionDeniedAttributes.attributeTypeMap;
  }

  public constructor() {}
}
