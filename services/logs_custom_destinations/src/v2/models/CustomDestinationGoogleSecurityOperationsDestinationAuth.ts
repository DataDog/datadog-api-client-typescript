import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomDestinationGoogleSecurityOperationsDestinationAuthType } from "./CustomDestinationGoogleSecurityOperationsDestinationAuthType";

/**
 * Google Security Operations destination authentication.
 */
export class CustomDestinationGoogleSecurityOperationsDestinationAuth {
  /**
   * The Google Security Operations client email.
   */
  "clientEmail": string;
  /**
   * The Google Security Operations client ID. This field is not returned by the API.
   */
  "clientId": string;
  /**
   * The Google Security Operations private key. This field is not returned by the API.
   */
  "privateKey": string;
  /**
   * The Google Security Operations private key ID. This field is not returned by the API.
   */
  "privateKeyId": string;
  /**
   * Google Security Operations project ID.
   */
  "projectId": string;
  /**
   * Type of the Google Security Operations destination authentication.
   */
  "type": CustomDestinationGoogleSecurityOperationsDestinationAuthType;
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
    clientId: {
      baseName: "client_id",
      type: "string",
      required: true,
    },
    privateKey: {
      baseName: "private_key",
      type: "string",
      required: true,
    },
    privateKeyId: {
      baseName: "private_key_id",
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
      type: "CustomDestinationGoogleSecurityOperationsDestinationAuthType",
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
    return CustomDestinationGoogleSecurityOperationsDestinationAuth.attributeTypeMap;
  }

  public constructor() {}
}
