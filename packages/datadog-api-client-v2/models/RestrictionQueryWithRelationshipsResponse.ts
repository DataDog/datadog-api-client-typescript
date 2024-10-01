/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RestrictionQueryResponseIncludedItem } from "./RestrictionQueryResponseIncludedItem";
import { RestrictionQueryWithRelationships } from "./RestrictionQueryWithRelationships";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing information about a single restriction query.
 */
export class RestrictionQueryWithRelationshipsResponse {
  /**
   * Restriction query object returned by the API.
   */
  "data"?: RestrictionQueryWithRelationships;
  /**
   * Array of objects related to the restriction query.
   */
  "included"?: Array<RestrictionQueryResponseIncludedItem>;

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
      type: "RestrictionQueryWithRelationships",
    },
    included: {
      baseName: "included",
      type: "Array<RestrictionQueryResponseIncludedItem>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RestrictionQueryWithRelationshipsResponse.attributeTypeMap;
  }

  public constructor() {}
}
