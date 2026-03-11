import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Term-level search configuration for filtering facet values by an exact or partial term match.
 */
export class FacetInfoRequestDataAttributesTermSearch {
  /**
   * The term string to match against facet values.
   */
  "value"?: string;
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
    value: {
      baseName: "value",
      type: "string",
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
    return FacetInfoRequestDataAttributesTermSearch.attributeTypeMap;
  }

  public constructor() {}
}
