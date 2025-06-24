import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorUserTemplateRequestAttributes } from "./MonitorUserTemplateRequestAttributes";
import { MonitorUserTemplateResourceType } from "./MonitorUserTemplateResourceType";

/**
 * Monitor user template data.
 */
export class MonitorUserTemplateCreateData {
  /**
   * Attributes for a monitor user template.
   */
  "attributes": MonitorUserTemplateRequestAttributes;
  /**
   * Monitor user template resource type.
   */
  "type": MonitorUserTemplateResourceType;
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
      type: "MonitorUserTemplateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MonitorUserTemplateResourceType",
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
    return MonitorUserTemplateCreateData.attributeTypeMap;
  }

  public constructor() {}
}
