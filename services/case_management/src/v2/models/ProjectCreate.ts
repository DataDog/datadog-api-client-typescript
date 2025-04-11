import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProjectCreateAttributes } from "./ProjectCreateAttributes";
import { ProjectResourceType } from "./ProjectResourceType";

/**
 * Project create
 */
export class ProjectCreate {
  /**
   * Project creation attributes
   */
  "attributes": ProjectCreateAttributes;
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
      type: "ProjectCreateAttributes",
      required: true,
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
    return ProjectCreate.attributeTypeMap;
  }

  public constructor() {}
}
