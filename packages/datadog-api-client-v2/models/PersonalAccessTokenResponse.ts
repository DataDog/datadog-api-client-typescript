/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FullPersonalAccessToken } from "./FullPersonalAccessToken";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for creating a personal access token.
 */
export class PersonalAccessTokenResponse {
  /**
   * Personal access token object with the secret key value. This is only
   * returned when creating a new token.
   */
  "data"?: FullPersonalAccessToken;

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
      type: "FullPersonalAccessToken",
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
    return PersonalAccessTokenResponse.attributeTypeMap;
  }

  public constructor() {}
}
