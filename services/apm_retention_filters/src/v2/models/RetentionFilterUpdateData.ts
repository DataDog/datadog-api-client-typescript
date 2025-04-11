import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApmRetentionFilterType } from "./ApmRetentionFilterType";
import { RetentionFilterUpdateAttributes } from "./RetentionFilterUpdateAttributes";

/**
 * The body of the retention filter to be updated.
 */
export class RetentionFilterUpdateData {
  /**
   * The object describing the configuration of the retention filter to create/update.
   */
  "attributes": RetentionFilterUpdateAttributes;
  /**
   * The ID of the retention filter.
   */
  "id": string;
  /**
   * The type of the resource.
   */
  "type": ApmRetentionFilterType;
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
      type: "RetentionFilterUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ApmRetentionFilterType",
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
    return RetentionFilterUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
