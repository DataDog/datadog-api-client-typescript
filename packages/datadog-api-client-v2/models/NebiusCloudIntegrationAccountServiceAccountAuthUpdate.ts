/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NebiusCloudIntegrationAccountServiceAccountAuthType } from "./NebiusCloudIntegrationAccountServiceAccountAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Service-account key pair authentication, the only method Nebius Cloud integration accounts support. Only the fields provided are changed; omit `private_key` and `static_api_key` to keep the stored ones.
 */
export class NebiusCloudIntegrationAccountServiceAccountAuthUpdate {
  /**
   * The authentication method type.
   */
  "authType": NebiusCloudIntegrationAccountServiceAccountAuthType;
  /**
   * The private key of the authorized key pair, in PEM format. Omit it to keep the stored one; an empty string is rejected with a `422` response.
   */
  "privateKey"?: string;
  /**
   * ID of the public key half of the authorized key pair. Omit it to keep the stored public key ID, send `null` or an empty string to remove it, or send a value to replace it. Removing it is rejected with a `422` response while log, resource, or service-quota collection is enabled.
   */
  "publicKeyId"?: string;
  /**
   * Non-secret ID of the Nebius service account the account authenticates as. It cannot be cleared; sending `null` or an empty string is rejected with a `422` response.
   */
  "serviceAccountId"?: string;
  /**
   * Nebius static API key with the OBSERVABILITY scope. Omit it to keep the stored one; an empty string is rejected with a `422` response.
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
    return NebiusCloudIntegrationAccountServiceAccountAuthUpdate.attributeTypeMap;
  }

  public constructor() {}
}
