import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DdsqlTabularQueryResponseAttributes } from "./DdsqlTabularQueryResponseAttributes";
import { DdsqlTabularQueryResponseType } from "./DdsqlTabularQueryResponseType";

/**
 * JSON:API resource object for a DDSQL tabular query response.
 */
export class DdsqlTabularQueryResponseData {
  /**
   * Attributes of a DDSQL tabular query response. `query_id` is set when
   * `state` is `running`; `columns` is set when `state` is `completed`.
   */
  "attributes": DdsqlTabularQueryResponseAttributes;
  /**
   * Stable identifier for the query response resource.
   */
  "id": string;
  /**
   * JSON:API resource type for a DDSQL tabular query response.
   */
  "type": DdsqlTabularQueryResponseType;
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
      type: "DdsqlTabularQueryResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DdsqlTabularQueryResponseType",
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
    return DdsqlTabularQueryResponseData.attributeTypeMap;
  }

  public constructor() {}
}
