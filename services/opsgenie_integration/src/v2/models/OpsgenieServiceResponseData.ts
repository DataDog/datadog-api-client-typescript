import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpsgenieServiceResponseAttributes } from "./OpsgenieServiceResponseAttributes";
import { OpsgenieServiceType } from "./OpsgenieServiceType";

/**
 * Opsgenie service data from a response.
 */
export class OpsgenieServiceResponseData {
  /**
   * The attributes from an Opsgenie service response.
   */
  "attributes": OpsgenieServiceResponseAttributes;
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
      type: "OpsgenieServiceResponseAttributes",
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
    return OpsgenieServiceResponseData.attributeTypeMap;
  }

  public constructor() {}
}
