import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DdsqlTabularQueryRequestAttributes } from "./DdsqlTabularQueryRequestAttributes";
import { DdsqlTabularQueryRequestType } from "./DdsqlTabularQueryRequestType";

/**
 * JSON:API resource object for a DDSQL tabular query execution request.
 */
export class DdsqlTabularQueryRequestData {
  /**
   * Attributes describing the DDSQL query to execute.
   */
  "attributes": DdsqlTabularQueryRequestAttributes;
  /**
   * JSON:API resource type for a DDSQL tabular query request.
   */
  "type": DdsqlTabularQueryRequestType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "DdsqlTabularQueryRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DdsqlTabularQueryRequestType",
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
    return DdsqlTabularQueryRequestData.attributeTypeMap;
  }

  public constructor() {}
}
