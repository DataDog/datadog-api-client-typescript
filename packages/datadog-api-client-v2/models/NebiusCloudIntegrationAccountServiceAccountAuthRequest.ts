/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NebiusCloudIntegrationAccountServiceAccountAuthType } from "./NebiusCloudIntegrationAccountServiceAccountAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Service-account key pair authentication, the only method Nebius Cloud integration accounts support. Create a service account in the Nebius console, add it to the admin group, upload an authorized key pair to it, and issue a static API key with the OBSERVABILITY scope through the Nebius CLI.
 */
export class NebiusCloudIntegrationAccountServiceAccountAuthRequest {
  /**
   * The authentication method type.
   */
  "authType": NebiusCloudIntegrationAccountServiceAccountAuthType;
  /**
   * The private key of the authorized key pair, in PEM format. Required when log, resource, or service-quota collection is enabled; a request that enables one of them without it is rejected with a `422` response.
   */
  "privateKey"?: string;
  /**
   * ID of the public key half of the authorized key pair, such as `publickey-xxxxxxxx`. Required when log, resource, or service-quota collection is enabled; a request that enables one of them without it is rejected with a `422` response.
   */
  "publicKeyId"?: string;
  /**
   * Non-secret ID of the Nebius service account the account authenticates as.
   */
  "serviceAccountId": string;
  /**
   * Nebius static API key with the OBSERVABILITY scope, used to query logs. Required when log, resource, or service-quota collection is enabled; a request that enables one of them without it is rejected with a `422` response.
   */
  "staticApiKey"?: string;

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
    privateKey: {
      baseName: "private_key",
      type: "string",
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
    staticApiKey: {
      baseName: "static_api_key",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NebiusCloudIntegrationAccountServiceAccountAuthRequest.attributeTypeMap;
  }

  public constructor() {}
}
