/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgConnection } from "./OrgConnection";
import { OrgConnectionListResponseMeta } from "./OrgConnectionListResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a list of org connections.
 */
export class OrgConnectionListResponse {
  /**
   * List of org connections.
   */
  "data": Array<OrgConnection>;
  /**
   * Pagination metadata.
   */
  "meta"?: OrgConnectionListResponseMeta;

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
      type: "Array<OrgConnection>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "OrgConnectionListResponseMeta",
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
    return OrgConnectionListResponse.attributeTypeMap;
  }

  public constructor() {}
}
