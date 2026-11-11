import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FeatureFlagChangeEventAttributes } from "./FeatureFlagChangeEventAttributes";
import { FeatureFlagChangeEventType } from "./FeatureFlagChangeEventType";

/**
 * A change made to a feature flag.
 */
export class FeatureFlagChangeEvent {
  /**
   * Attributes of a feature flag change event.
   */
  "attributes": FeatureFlagChangeEventAttributes;
  /**
   * The ID of the change event.
   */
  "id": string;
  /**
   * The resource type.
   */
  "type": FeatureFlagChangeEventType;
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
      type: "FeatureFlagChangeEventAttributes",
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
      type: "FeatureFlagChangeEventType",
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
    return FeatureFlagChangeEvent.attributeTypeMap;
  }

  public constructor() {}
}
