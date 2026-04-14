/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PersonalAccessToken } from "./PersonalAccessToken";
import { PersonalAccessTokenResponseMeta } from "./PersonalAccessTokenResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for a list of personal access tokens.
 */
export class ListPersonalAccessTokensResponse {
  /**
   * Array of personal access tokens.
   */
  "data"?: Array<PersonalAccessToken>;
  /**
   * Additional information related to the personal access token response.
   */
  "meta"?: PersonalAccessTokenResponseMeta;

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
      type: "Array<PersonalAccessToken>",
    },
    meta: {
      baseName: "meta",
      type: "PersonalAccessTokenResponseMeta",
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
    return ListPersonalAccessTokensResponse.attributeTypeMap;
  }

  public constructor() {}
}
