/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOListResponseMetadataPage } from "./SLOListResponseMetadataPage";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The metadata object containing additional information about the list of SLOs.
 */
export class SLOListResponseMetadata {
  /**
   * The object containing information about the pages of the list of SLOs.
   */
  "page"?: SLOListResponseMetadataPage;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    page: {
      baseName: "page",
      type: "SLOListResponseMetadataPage",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOListResponseMetadata.attributeTypeMap;
  }

  public constructor() {}
}
