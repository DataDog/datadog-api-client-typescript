/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgAuthorizedClientData } from "./OrgAuthorizedClientData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a single org authorized client.
 */
export class OrgAuthorizedClientResponse {
  /**
   * Data object representing an org authorized client.
   */
  "data": OrgAuthorizedClientData;

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
      type: "OrgAuthorizedClientData",
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
    return OrgAuthorizedClientResponse.attributeTypeMap;
  }

  public constructor() {}
}
