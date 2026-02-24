import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PersonalAccessTokensResponseMetaPage } from "./PersonalAccessTokensResponseMetaPage";

/**
 * Additional information related to the personal access tokens response.
 */
export class PersonalAccessTokensResponseMeta {
  /**
   * Pagination information for personal access tokens response.
   */
  "page"?: PersonalAccessTokensResponseMetaPage;
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
      type: "PersonalAccessTokensResponseMetaPage",
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
    return PersonalAccessTokensResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
