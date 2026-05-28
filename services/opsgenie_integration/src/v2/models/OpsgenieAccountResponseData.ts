import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpsgenieAccountResponseAttributes } from "./OpsgenieAccountResponseAttributes";
import { OpsgenieAccountType } from "./OpsgenieAccountType";

/**
 * Opsgenie account data from a response.
 */
export class OpsgenieAccountResponseData {
  /**
   * The attributes from an Opsgenie account response.
   */
  "attributes": OpsgenieAccountResponseAttributes;
  /**
   * The ID of the Opsgenie account.
   */
  "id": string;
  /**
   * Opsgenie account resource type.
   */
  "type": OpsgenieAccountType;
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
      type: "OpsgenieAccountResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OpsgenieAccountType",
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
    return OpsgenieAccountResponseData.attributeTypeMap;
  }

  public constructor() {}
}
