import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WidgetData } from "./WidgetData";
import { WidgetIncludedUser } from "./WidgetIncludedUser";
import { WidgetSearchMeta } from "./WidgetSearchMeta";

/**
 * Response containing a list of widgets.
 */
export class WidgetListResponse {
  /**
   * List of widget resources.
   */
  "data": Array<WidgetData>;
  /**
   * Array of user resources related to the widgets.
   */
  "included"?: Array<WidgetIncludedUser>;
  /**
   * Metadata about the search results.
   */
  "meta"?: WidgetSearchMeta;
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
      type: "Array<WidgetData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<WidgetIncludedUser>",
    },
    meta: {
      baseName: "meta",
      type: "WidgetSearchMeta",
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
    return WidgetListResponse.attributeTypeMap;
  }

  public constructor() {}
}
