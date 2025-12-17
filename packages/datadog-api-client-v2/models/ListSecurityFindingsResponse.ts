/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityFindingsData } from "./SecurityFindingsData";
import { SecurityFindingsLinks } from "./SecurityFindingsLinks";
import { SecurityFindingsMeta } from "./SecurityFindingsMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The expected response schema when listing security findings.
 */
export class ListSecurityFindingsResponse {
  /**
   * Array of security findings matching the search query.
   */
  "data"?: Array<SecurityFindingsData>;
  /**
   * Links for pagination.
   */
  "links"?: SecurityFindingsLinks;
  /**
   * Metadata about the response.
   */
  "meta"?: SecurityFindingsMeta;

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
      type: "Array<SecurityFindingsData>",
    },
    links: {
      baseName: "links",
      type: "SecurityFindingsLinks",
    },
    meta: {
      baseName: "meta",
      type: "SecurityFindingsMeta",
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
    return ListSecurityFindingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
