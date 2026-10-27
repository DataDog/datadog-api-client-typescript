/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ArchiveSearchRehydrateRequestAttributes } from "./ArchiveSearchRehydrateRequestAttributes";
import { ArchiveSearchType } from "./ArchiveSearchType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Archive Search object to rehydrate.
 */
export class ArchiveSearchRehydrateRequestData {
  /**
   * Attributes accepted when rehydrating an Archive Search.
   */
  "attributes": ArchiveSearchRehydrateRequestAttributes;
  /**
   * Archive Search resource type.
   */
  "type": ArchiveSearchType;

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
    attributes: {
      baseName: "attributes",
      type: "ArchiveSearchRehydrateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ArchiveSearchType",
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
    return ArchiveSearchRehydrateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
