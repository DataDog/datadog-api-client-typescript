import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for a general investigation without an explicit time window.
 */
export class GeneralInvestigationAttributesWithoutTimeBounds {
  /**
   * A free-form description of what to investigate, up to 4,096 characters.
   */
  "description": string;
  /**
   * Tags scoping the investigation.
   */
  "tags"?: Array<string>;
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
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GeneralInvestigationAttributesWithoutTimeBounds.attributeTypeMap;
  }

  public constructor() {}
}
