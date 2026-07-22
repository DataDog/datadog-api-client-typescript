import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MaxSessionDurationType } from "./MaxSessionDurationType";
import { MaxSessionDurationUpdateAttributes } from "./MaxSessionDurationUpdateAttributes";

/**
 * The data object for a maximum session duration update request.
 */
export class MaxSessionDurationUpdateData {
  /**
   * Attributes for the maximum session duration update request.
   */
  "attributes": MaxSessionDurationUpdateAttributes;
  /**
   * Data type of a maximum session duration update.
   */
  "type": MaxSessionDurationType;
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
      type: "MaxSessionDurationUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MaxSessionDurationType",
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
    return MaxSessionDurationUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
