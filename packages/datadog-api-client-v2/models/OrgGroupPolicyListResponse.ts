/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgGroupPaginationMeta } from "./OrgGroupPaginationMeta";
import { OrgGroupPolicyData } from "./OrgGroupPolicyData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a list of org group policies.
 */
export class OrgGroupPolicyListResponse {
  /**
   * An array of org group policies.
   */
  "data": Array<OrgGroupPolicyData>;
  /**
   * Pagination metadata.
   */
  "meta"?: OrgGroupPaginationMeta;

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
      type: "Array<OrgGroupPolicyData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "OrgGroupPaginationMeta",
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
    return OrgGroupPolicyListResponse.attributeTypeMap;
  }

  public constructor() {}
}
