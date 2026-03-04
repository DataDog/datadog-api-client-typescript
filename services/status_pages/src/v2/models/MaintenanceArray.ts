import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DegradationIncluded } from "./DegradationIncluded";
import { MaintenanceData } from "./MaintenanceData";
import { PaginationMeta } from "./PaginationMeta";

export class MaintenanceArray {
  "data": Array<MaintenanceData>;
  /**
   * The included related resources of a maintenance. Client must explicitly request these resources by name in the `include` query parameter.
   */
  "included"?: Array<DegradationIncluded>;
  /**
   * Response metadata.
   */
  "meta"?: PaginationMeta;
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
      type: "Array<MaintenanceData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<DegradationIncluded>",
    },
    meta: {
      baseName: "meta",
      type: "PaginationMeta",
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
    return MaintenanceArray.attributeTypeMap;
  }

  public constructor() {}
}
