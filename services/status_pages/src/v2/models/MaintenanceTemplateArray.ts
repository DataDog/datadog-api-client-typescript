import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DegradationIncluded } from "./DegradationIncluded";
import { MaintenanceTemplateData } from "./MaintenanceTemplateData";

/**
 * Response object for a list of maintenance templates.
 */
export class MaintenanceTemplateArray {
  /**
   * A list of maintenance template data objects.
   */
  "data": Array<MaintenanceTemplateData>;
  /**
   * The included related resources of a maintenance template. Client must explicitly request these resources by name in the `include` query parameter.
   */
  "included"?: Array<DegradationIncluded>;
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
      type: "Array<MaintenanceTemplateData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<DegradationIncluded>",
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
    return MaintenanceTemplateArray.attributeTypeMap;
  }

  public constructor() {}
}
