/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OAuth2WellKnownSitesData } from "./OAuth2WellKnownSitesData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response payload containing the list of public OAuth2 sites for discovery.
 */
export class OAuth2WellKnownSitesResponse {
  /**
   * Data object containing OAuth2 well-known sites information.
   */
  "data": OAuth2WellKnownSitesData;

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
      type: "OAuth2WellKnownSitesData",
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
    return OAuth2WellKnownSitesResponse.attributeTypeMap;
  }

  public constructor() {}
}
