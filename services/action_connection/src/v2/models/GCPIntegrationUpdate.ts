import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GCPCredentialsUpdate } from "./GCPCredentialsUpdate";
import { GCPIntegrationType } from "./GCPIntegrationType";

/**
 * The definition of the `GCPIntegrationUpdate` object.
 */
export class GCPIntegrationUpdate {
  /**
   * The definition of the `GCPCredentialsUpdate` object.
   */
  "credentials"?: GCPCredentialsUpdate;
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
      type: "GCPCredentialsUpdate",
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
    return GCPIntegrationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
