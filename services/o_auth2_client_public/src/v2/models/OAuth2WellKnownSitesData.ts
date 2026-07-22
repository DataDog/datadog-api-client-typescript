import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OAuth2WellKnownSitesAttributes } from "./OAuth2WellKnownSitesAttributes";
import { OAuth2WellKnownSitesEnvType } from "./OAuth2WellKnownSitesEnvType";

/**
 * Data object containing OAuth2 well-known sites information.
 */
export class OAuth2WellKnownSitesData {
  /**
   * Attributes containing the list of public OAuth2 sites.
   */
  "attributes": OAuth2WellKnownSitesAttributes;
  /**
   * Environment identifier.
   */
  "id": string;
  /**
   * JSON:API resource type for OAuth2 well-known sites environment.
   */
  "type": OAuth2WellKnownSitesEnvType;
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
    attributes: {
      baseName: "attributes",
      type: "OAuth2WellKnownSitesAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OAuth2WellKnownSitesEnvType",
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
    return OAuth2WellKnownSitesData.attributeTypeMap;
  }

  public constructor() {}
}
