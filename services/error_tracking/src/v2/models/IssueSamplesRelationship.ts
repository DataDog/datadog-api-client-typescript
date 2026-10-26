import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueSampleReference } from "./IssueSampleReference";

/**
 * Relationship between the issue and its curated error samples.
 */
export class IssueSamplesRelationship {
  /**
   * Array of curated error samples of the issue.
   */
  "data": Array<IssueSampleReference>;
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
    data: {
      baseName: "data",
      type: "Array<IssueSampleReference>",
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
    return IssueSamplesRelationship.attributeTypeMap;
  }

  public constructor() {}
}
