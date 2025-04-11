import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApmRetentionFilterType } from "./ApmRetentionFilterType";
import { RetentionFilterCreateAttributes } from "./RetentionFilterCreateAttributes";

/**
 * The body of the retention filter to be created.
 */
export class RetentionFilterCreateData {
  /**
   * The object describing the configuration of the retention filter to create/update.
   */
  "attributes": RetentionFilterCreateAttributes;
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
      type: "RetentionFilterCreateAttributes",
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
    return RetentionFilterCreateData.attributeTypeMap;
  }

  public constructor() {}
}
