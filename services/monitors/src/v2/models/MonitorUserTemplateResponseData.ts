import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorUserTemplateResourceType } from "./MonitorUserTemplateResourceType";
import { MonitorUserTemplateResponseAttributes } from "./MonitorUserTemplateResponseAttributes";

/**
 * Monitor user template list response data.
 */
export class MonitorUserTemplateResponseData {
  /**
   * Attributes for a monitor user template.
   */
  "attributes"?: MonitorUserTemplateResponseAttributes;
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
      type: "MonitorUserTemplateResponseAttributes",
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
    return MonitorUserTemplateResponseData.attributeTypeMap;
  }

  public constructor() {}
}
