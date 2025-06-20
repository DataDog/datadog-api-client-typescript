import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorUserTemplateResponseData } from "./MonitorUserTemplateResponseData";

/**
 * Response for creating a monitor user template.
 */
export class MonitorUserTemplateCreateResponse {
  /**
   * Monitor user template list response data.
   */
  "data"?: MonitorUserTemplateResponseData;
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
      type: "MonitorUserTemplateResponseData",
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
    return MonitorUserTemplateCreateResponse.attributeTypeMap;
  }

  public constructor() {}
}
