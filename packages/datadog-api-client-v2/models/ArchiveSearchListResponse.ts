/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ArchiveSearchListResponseMeta } from "./ArchiveSearchListResponseMeta";
import { ArchiveSearchResponseData } from "./ArchiveSearchResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing multiple Archive Searches.
 */
export class ArchiveSearchListResponse {
  /**
   * Array of Archive Searches.
   */
  "data": Array<ArchiveSearchResponseData>;
  /**
   * Metadata of the Archive Searches response.
   */
  "meta"?: ArchiveSearchListResponseMeta;

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
      type: "Array<ArchiveSearchResponseData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ArchiveSearchListResponseMeta",
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
    return ArchiveSearchListResponse.attributeTypeMap;
  }

  public constructor() {}
}
