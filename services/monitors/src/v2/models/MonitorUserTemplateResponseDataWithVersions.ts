import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorUserTemplate } from "./MonitorUserTemplate";
import { MonitorUserTemplateResourceType } from "./MonitorUserTemplateResourceType";

/**
 * Monitor user template data.
 */
export class MonitorUserTemplateResponseDataWithVersions {
  /**
   * A monitor user template object.
   */
  "attributes"?: MonitorUserTemplate;
  /**
   * The unique identifier.
   */
  "id"?: string;
  /**
   * Monitor user template resource type.
   */
  "type"?: MonitorUserTemplateResourceType;
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
    attributes: {
      baseName: "attributes",
      type: "MonitorUserTemplate",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "MonitorUserTemplateResourceType",
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
    return MonitorUserTemplateResponseDataWithVersions.attributeTypeMap;
  }

  public constructor() {}
}
