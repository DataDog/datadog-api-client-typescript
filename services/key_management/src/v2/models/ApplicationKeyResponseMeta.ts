import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationKeyResponseMetaPage } from "./ApplicationKeyResponseMetaPage";

/**
 * Additional information related to the application key response.
 */
export class ApplicationKeyResponseMeta {
  /**
   * Max allowed number of application keys per user.
   */
  "maxAllowedPerUser"?: number;
  /**
   * Additional information related to the application key response.
   */
  "page"?: ApplicationKeyResponseMetaPage;
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
    maxAllowedPerUser: {
      baseName: "max_allowed_per_user",
      type: "number",
      format: "int64",
    },
    page: {
      baseName: "page",
      type: "ApplicationKeyResponseMetaPage",
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
    return ApplicationKeyResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
