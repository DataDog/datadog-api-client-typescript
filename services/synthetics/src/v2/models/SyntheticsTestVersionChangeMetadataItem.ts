import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestVersionActionMetadata } from "./SyntheticsTestVersionActionMetadata";

/**
 * Object describing a single change within a version.
 */
export class SyntheticsTestVersionChangeMetadataItem {
  /**
   * The action that was performed (for example, `updated` or `created`).
   */
  "action"?: string;
  /**
   * Object containing metadata about a change action.
   */
  "actionMetadata"?: SyntheticsTestVersionActionMetadata;
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
    action: {
      baseName: "action",
      type: "string",
    },
    actionMetadata: {
      baseName: "action_metadata",
      type: "SyntheticsTestVersionActionMetadata",
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
    return SyntheticsTestVersionChangeMetadataItem.attributeTypeMap;
  }

  public constructor() {}
}
