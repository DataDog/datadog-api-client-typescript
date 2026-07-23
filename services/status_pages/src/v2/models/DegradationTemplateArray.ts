import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DegradationIncluded } from "./DegradationIncluded";
import { DegradationTemplateData } from "./DegradationTemplateData";

/**
 * Response object for a list of degradation templates.
 */
export class DegradationTemplateArray {
  /**
   * A list of degradation template data objects.
   */
  "data": Array<DegradationTemplateData>;
  /**
   * The included related resources of a degradation template. Client must explicitly request these resources by name in the `include` query parameter.
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
      type: "Array<DegradationTemplateData>",
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
    return DegradationTemplateArray.attributeTypeMap;
  }

  public constructor() {}
}
