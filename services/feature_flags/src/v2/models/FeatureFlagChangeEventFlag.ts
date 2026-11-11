import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The feature flag the change applies to.
 */
export class FeatureFlagChangeEventFlag {
  /**
   * The ID of the feature flag.
   */
  "id": string;
  /**
   * The key of the feature flag.
   */
  "key": string;
  /**
   * The name of the feature flag.
   */
  "name": string;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    key: {
      baseName: "key",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
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
    return FeatureFlagChangeEventFlag.attributeTypeMap;
  }

  public constructor() {}
}
