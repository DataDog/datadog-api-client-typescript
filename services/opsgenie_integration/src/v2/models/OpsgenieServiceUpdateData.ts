import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpsgenieServiceType } from "./OpsgenieServiceType";
import { OpsgenieServiceUpdateAttributes } from "./OpsgenieServiceUpdateAttributes";

/**
 * Opsgenie service for an update request.
 */
export class OpsgenieServiceUpdateData {
  /**
   * The Opsgenie service attributes for an update request.
   */
  "attributes": OpsgenieServiceUpdateAttributes;
  /**
   * The ID of the Opsgenie service.
   */
  "id": string;
  /**
   * Opsgenie service resource type.
   */
  "type": OpsgenieServiceType;
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
      type: "OpsgenieServiceUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OpsgenieServiceType",
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
    return OpsgenieServiceUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
