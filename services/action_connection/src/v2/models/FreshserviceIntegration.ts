import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FreshserviceCredentials } from "./FreshserviceCredentials";
import { FreshserviceIntegrationType } from "./FreshserviceIntegrationType";

/**
 * The definition of the `FreshserviceIntegration` object.
 */
export class FreshserviceIntegration {
  /**
   * The definition of the `FreshserviceCredentials` object.
   */
  "credentials": FreshserviceCredentials;
  /**
   * The definition of the `FreshserviceIntegrationType` object.
   */
  "type": FreshserviceIntegrationType;
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
      type: "FreshserviceCredentials",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FreshserviceIntegrationType",
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
    return FreshserviceIntegration.attributeTypeMap;
  }

  public constructor() {}
}
