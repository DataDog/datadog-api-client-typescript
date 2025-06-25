import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorUserTemplateResponseDataWithVersions } from "./MonitorUserTemplateResponseDataWithVersions";

/**
 * Response for retrieving a monitor user template.
 */
export class MonitorUserTemplateResponse {
  /**
   * Monitor user template data.
   */
  "data"?: MonitorUserTemplateResponseDataWithVersions;
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
      type: "MonitorUserTemplateResponseDataWithVersions",
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
    return MonitorUserTemplateResponse.attributeTypeMap;
  }

  public constructor() {}
}
