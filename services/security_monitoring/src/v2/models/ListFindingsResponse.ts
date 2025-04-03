import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Finding } from "./Finding";
import { ListFindingsMeta } from "./ListFindingsMeta";

/**
 * The expected response schema when listing findings.
 */
export class ListFindingsResponse {
  /**
   * Array of findings.
   */
  "data": Array<Finding>;
  /**
   * Metadata for pagination.
   */
  "meta": ListFindingsMeta;
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
      type: "Array<Finding>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ListFindingsMeta",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ListFindingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
