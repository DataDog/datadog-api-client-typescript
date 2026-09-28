/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UpdatedPersonalAccessToken } from "./UpdatedPersonalAccessToken";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for updating an access token.
 */
export class UpdatedPersonalAccessTokenResponse {
  /**
   * Datadog access token returned by the update endpoint.
   */
  "data": UpdatedPersonalAccessToken;

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
    data: {
      baseName: "data",
      type: "UpdatedPersonalAccessToken",
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
    return UpdatedPersonalAccessTokenResponse.attributeTypeMap;
  }

  public constructor() {}
}
