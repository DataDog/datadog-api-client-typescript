/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request to exchange a Vercel marketplace authorization code for a Datadog-managed access token.
 */
export class VercelTokenCreateRequest {
  /**
   * OAuth authorization code received from the Vercel marketplace flow.
   */
  "authGrantCode": string;
  /**
   * Vercel configuration identifier returned by the marketplace flow.
   */
  "vercelConfigurationId": string;

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
    authGrantCode: {
      baseName: "authGrantCode",
      type: "string",
      required: true,
    },
    vercelConfigurationId: {
      baseName: "vercelConfigurationId",
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
    return VercelTokenCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
