import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorUserTemplateResponseData } from "./MonitorUserTemplateResponseData";

/**
 * Response for retrieving all monitor user templates.
 */
export class MonitorUserTemplateListResponse {
  /**
   * An array of monitor user templates.
   */
  "data"?: Array<MonitorUserTemplateResponseData>;
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
      type: "Array<MonitorUserTemplateResponseData>",
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
    return MonitorUserTemplateListResponse.attributeTypeMap;
  }

  public constructor() {}
}
