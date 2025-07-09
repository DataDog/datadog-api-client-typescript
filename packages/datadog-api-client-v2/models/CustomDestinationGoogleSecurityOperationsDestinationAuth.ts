/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomDestinationGoogleSecurityOperationsDestinationAuthType } from "./CustomDestinationGoogleSecurityOperationsDestinationAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
      type: "any",
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
