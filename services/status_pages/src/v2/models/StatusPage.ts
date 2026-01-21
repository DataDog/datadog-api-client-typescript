import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPageArrayIncluded } from "./StatusPageArrayIncluded";
import { StatusPageData } from "./StatusPageData";

export class StatusPage {
  "data"?: StatusPageData;
  /**
   * The included related resources of a status page. Client must explicitly request these resources by name in the `include` query parameter.
   */
  "included"?: Array<StatusPageArrayIncluded>;
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
      type: "StatusPageData",
    },
    included: {
      baseName: "included",
      type: "Array<StatusPageArrayIncluded>",
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
    return StatusPage.attributeTypeMap;
  }

  public constructor() {}
}
