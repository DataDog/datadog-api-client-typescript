import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FreshserviceCredentialsUpdate } from "./FreshserviceCredentialsUpdate";
import { FreshserviceIntegrationType } from "./FreshserviceIntegrationType";

/**
 * The definition of the `FreshserviceIntegrationUpdate` object.
 */
export class FreshserviceIntegrationUpdate {
  /**
   * The definition of the `FreshserviceCredentialsUpdate` object.
   */
  "credentials"?: FreshserviceCredentialsUpdate;
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
      type: "FreshserviceCredentialsUpdate",
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
    return FreshserviceIntegrationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
