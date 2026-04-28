import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsDowntimeDataAttributesRequest } from "./SyntheticsDowntimeDataAttributesRequest";
import { SyntheticsDowntimeResourceType } from "./SyntheticsDowntimeResourceType";

/**
 * The data object for a Synthetics downtime create or update request.
 */
export class SyntheticsDowntimeDataRequest {
  /**
   * Attributes for creating or updating a Synthetics downtime.
   */
  "attributes": SyntheticsDowntimeDataAttributesRequest;
  /**
   * The resource type for a Synthetics downtime.
   */
  "type": SyntheticsDowntimeResourceType;
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
      type: "SyntheticsDowntimeDataAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SyntheticsDowntimeResourceType",
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
    return SyntheticsDowntimeDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
