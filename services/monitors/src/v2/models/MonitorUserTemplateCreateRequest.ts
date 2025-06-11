import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorUserTemplateCreateData } from "./MonitorUserTemplateCreateData";

/**
 * Request for creating a monitor user template.
 */
export class MonitorUserTemplateCreateRequest {
  /**
   * Monitor user template data.
   */
  "data": MonitorUserTemplateCreateData;
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
      type: "MonitorUserTemplateCreateData",
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
    return MonitorUserTemplateCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
