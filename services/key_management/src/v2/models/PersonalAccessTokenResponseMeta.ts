import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PersonalAccessTokenResponseMetaPage } from "./PersonalAccessTokenResponseMetaPage";

/**
 * Additional information related to the access token response.
 */
export class PersonalAccessTokenResponseMeta {
  /**
   * Pagination information.
   */
  "page"?: PersonalAccessTokenResponseMetaPage;
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
    page: {
      baseName: "page",
      type: "PersonalAccessTokenResponseMetaPage",
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
    return PersonalAccessTokenResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
