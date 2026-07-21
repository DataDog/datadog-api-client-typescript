import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DdsqlTabularQueryFetchRequestAttributes } from "./DdsqlTabularQueryFetchRequestAttributes";
import { DdsqlTabularQueryFetchRequestType } from "./DdsqlTabularQueryFetchRequestType";

/**
 * JSON:API resource object for a DDSQL tabular query fetch request.
 */
export class DdsqlTabularQueryFetchRequestData {
  /**
   * Attributes describing which previously submitted DDSQL query to fetch.
   */
  "attributes": DdsqlTabularQueryFetchRequestAttributes;
  /**
   * JSON:API resource type for a DDSQL tabular query fetch request.
   */
  "type": DdsqlTabularQueryFetchRequestType;
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
      type: "DdsqlTabularQueryFetchRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DdsqlTabularQueryFetchRequestType",
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
    return DdsqlTabularQueryFetchRequestData.attributeTypeMap;
  }

  public constructor() {}
}
