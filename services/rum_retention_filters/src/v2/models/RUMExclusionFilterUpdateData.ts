import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMExclusionFilterType } from "./RUMExclusionFilterType";
import { RUMExclusionFilterUpdateAttributes } from "./RUMExclusionFilterUpdateAttributes";

/**
 * The exclusion filter properties to update.
 */
export class RUMExclusionFilterUpdateData {
  /**
   * The attributes of an exclusion filter that can be updated.
   * For the built-in Error Tracking exclusion filter, only `enabled` can be set;
   * `name`, `event_type`, and `query` must be omitted.
   */
  "attributes": RUMExclusionFilterUpdateAttributes;
  /**
   * The ID of the exclusion filter. Must match the `ef_id` path parameter.
   */
  "id": string;
  /**
   * The resource type. The value must be `exclusion_filters`.
   */
  "type": RUMExclusionFilterType;
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
      type: "RUMExclusionFilterUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMExclusionFilterType",
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
    return RUMExclusionFilterUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
