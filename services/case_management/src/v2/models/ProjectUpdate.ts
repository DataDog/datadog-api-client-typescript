import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProjectResourceType } from "./ProjectResourceType";
import { ProjectUpdateAttributes } from "./ProjectUpdateAttributes";

/**
 * Project update
 */
export class ProjectUpdate {
  /**
   * Project update attributes
   */
  "attributes"?: ProjectUpdateAttributes;
  /**
   * Project resource type
   */
  "type": ProjectResourceType;
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
      type: "ProjectUpdateAttributes",
    },
    type: {
      baseName: "type",
      type: "ProjectResourceType",
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
    return ProjectUpdate.attributeTypeMap;
  }

  public constructor() {}
}
