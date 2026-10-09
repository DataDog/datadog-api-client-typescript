import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for updating a feature flag.
 */
export class UpdateFeatureFlagAttributes {
  /**
   * The description of the feature flag.
   */
  "description"?: string;
  /**
   * JSON schema for validation when value_type is JSON.
   */
  "jsonSchema"?: string;
  /**
   * The name of the feature flag.
   */
  "name"?: string;
  /**
   * Tags associated with the feature flag. This field replaces the full set of
   * existing tags; omit it to leave tags unchanged, or pass an empty array to
   * clear all tags. The owning team is set by including a tag of the form
   * `team:<team-handle>` in this array.
   */
  "tags"?: Array<string>;
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
    description: {
      baseName: "description",
      type: "string",
    },
    jsonSchema: {
      baseName: "json_schema",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return UpdateFeatureFlagAttributes.attributeTypeMap;
  }

  public constructor() {}
}
