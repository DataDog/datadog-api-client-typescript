/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NebiusCloudIntegrationAccountServiceAccountAuthType } from "./NebiusCloudIntegrationAccountServiceAccountAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The service-account key pair authentication method configured on the account.
 */
export class NebiusCloudIntegrationAccountServiceAccountAuthResponse {
  /**
   * The authentication method type.
   */
  "authType": NebiusCloudIntegrationAccountServiceAccountAuthType;
  /**
   * ID of the public key half of the authorized key pair. Omitted when unset.
   */
  "publicKeyId"?: string;
  /**
   * ID of the Nebius service account the account authenticates as.
   */
  "serviceAccountId": string;

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
    authType: {
      baseName: "auth_type",
      type: "NebiusCloudIntegrationAccountServiceAccountAuthType",
      required: true,
    },
    publicKeyId: {
      baseName: "public_key_id",
      type: "string",
    },
    serviceAccountId: {
      baseName: "service_account_id",
      type: "string",
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
    return NebiusCloudIntegrationAccountServiceAccountAuthResponse.attributeTypeMap;
  }

  public constructor() {}
}
