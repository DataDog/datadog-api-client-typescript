/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ElasticCloudCcmTokenAuthType } from "./ElasticCloudCcmTokenAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Encrypted token (bearer token) authentication for Elastic Cloud CCM.
 */
export class ElasticCloudCcmTokenAuth {
  /**
   * Billing API key. An Elastic Cloud API key with read access to both Billing and Deployments. Create one under Organization settings > API Keys.
   */
  "apiKey": string;
  /**
   * Authentication method discriminator.
   */
  "type": ElasticCloudCcmTokenAuthType;

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
    apiKey: {
      baseName: "api_key",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ElasticCloudCcmTokenAuthType",
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
    return ElasticCloudCcmTokenAuth.attributeTypeMap;
  }

  public constructor() {}
}
