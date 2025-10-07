import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomDestinationResponseGoogleSecurityOperationsDestinationAuthType } from "./CustomDestinationResponseGoogleSecurityOperationsDestinationAuthType";

/**
 * Google Security Operations destination authentication.
 */
export class CustomDestinationResponseGoogleSecurityOperationsDestinationAuth {
  /**
   * The Google Security Operations client email.
   */
  "clientEmail": string;
  /**
   * Google Security Operations project ID.
   */
  "projectId": string;
  /**
   * Type of the Google Security Operations destination authentication.
   */
  "type": CustomDestinationResponseGoogleSecurityOperationsDestinationAuthType;
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
    clientEmail: {
      baseName: "client_email",
      type: "string",
      required: true,
    },
    projectId: {
      baseName: "project_id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomDestinationResponseGoogleSecurityOperationsDestinationAuthType",
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
    return CustomDestinationResponseGoogleSecurityOperationsDestinationAuth.attributeTypeMap;
  }

  public constructor() {}
}
