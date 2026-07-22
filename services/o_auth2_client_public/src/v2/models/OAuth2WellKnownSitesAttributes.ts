import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Attributes containing the list of public OAuth2 sites.
 */
export class OAuth2WellKnownSitesAttributes {
  /**
   * Array of public OAuth2 site URLs for the environment.
   */
  "sites": Array<string>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    sites: {
      baseName: "sites",
      type: "Array<string>",
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
    return OAuth2WellKnownSitesAttributes.attributeTypeMap;
  }

  public constructor() {}
}
