/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AuthNMapping } from "./AuthNMapping";
import { AuthNMappingIncluded } from "./AuthNMappingIncluded";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AuthN Mapping response from the API.
 */
export class AuthNMappingResponse {
  /**
   * The AuthN Mapping object returned by API.
   */
  "data"?: AuthNMapping;
  /**
   * Included data in the AuthN Mapping response.
   */
  "included"?: Array<AuthNMappingIncluded>;

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
      type: "AuthNMapping",
    },
    included: {
      baseName: "included",
      type: "Array<AuthNMappingIncluded>",
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
    return AuthNMappingResponse.attributeTypeMap;
  }

  public constructor() {}
}
