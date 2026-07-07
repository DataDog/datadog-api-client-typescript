/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgAuthorizedClientData } from "./OrgAuthorizedClientData";
import { ResponseMetaAttributes } from "./ResponseMetaAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a list of org authorized clients.
 */
export class OrgAuthorizedClientsResponse {
  /**
   * List of org authorized client data objects.
   */
  "data": Array<OrgAuthorizedClientData>;
  /**
   * Object describing meta attributes of response.
   */
  "meta": ResponseMetaAttributes;

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
      type: "Array<OrgAuthorizedClientData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ResponseMetaAttributes",
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
    return OrgAuthorizedClientsResponse.attributeTypeMap;
  }

  public constructor() {}
}
