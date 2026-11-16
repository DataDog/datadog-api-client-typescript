import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The approval requirement for the flag.
 */
export class UpdateFeatureFlagApprovalsAttributes {
  /**
   * Whether approval is required. Disabling requires the Feature Flag Approvals Override permission.
   */
  "enabled": boolean;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
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
    return UpdateFeatureFlagApprovalsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
