import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FeatureFlagApprovalsDataType } from "./FeatureFlagApprovalsDataType";
import { UpdateFeatureFlagApprovalsAttributes } from "./UpdateFeatureFlagApprovalsAttributes";

/**
 * The feature flag approval setting to update.
 */
export class UpdateFeatureFlagApprovalsData {
  /**
   * The approval requirement for the flag.
   */
  "attributes": UpdateFeatureFlagApprovalsAttributes;
  /**
   * The resource type for feature flag approval settings.
   */
  "type": FeatureFlagApprovalsDataType;
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
      type: "UpdateFeatureFlagApprovalsAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FeatureFlagApprovalsDataType",
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
    return UpdateFeatureFlagApprovalsData.attributeTypeMap;
  }

  public constructor() {}
}
