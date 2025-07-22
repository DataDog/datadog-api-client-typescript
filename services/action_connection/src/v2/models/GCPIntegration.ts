import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GCPCredentials } from "./GCPCredentials";
import { GCPIntegrationType } from "./GCPIntegrationType";

/**
 * The definition of the `GCPIntegration` object.
 */
export class GCPIntegration {
  /**
   * The definition of the `GCPCredentials` object.
   */
  "credentials": GCPCredentials;
  /**
   * The definition of the `GCPIntegrationType` object.
   */
  "type": GCPIntegrationType;
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
    credentials: {
      baseName: "credentials",
      type: "GCPCredentials",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GCPIntegrationType",
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
    return GCPIntegration.attributeTypeMap;
  }

  public constructor() {}
}
