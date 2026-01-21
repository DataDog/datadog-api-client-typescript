import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPagesComponentArrayIncluded } from "./StatusPagesComponentArrayIncluded";
import { StatusPagesComponentData } from "./StatusPagesComponentData";

export class StatusPagesComponentArray {
  "data": Array<StatusPagesComponentData>;
  /**
   * The included related resources of a component. Client must explicitly request these resources by name in the `include` query parameter.
   */
  "included"?: Array<StatusPagesComponentArrayIncluded>;
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
      type: "Array<StatusPagesComponentData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<StatusPagesComponentArrayIncluded>",
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
    return StatusPagesComponentArray.attributeTypeMap;
  }

  public constructor() {}
}
