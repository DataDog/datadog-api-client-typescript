/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EntityData } from "./EntityData";
import { EntityResponseMeta } from "./EntityResponseMeta";
import { UpsertCatalogEntityResponseIncludedItem } from "./UpsertCatalogEntityResponseIncludedItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Upsert entity response.
 */
export class UpsertCatalogEntityResponse {
  /**
   * List of entity data.
   */
  "data"?: Array<EntityData>;
  /**
   * Upsert entity response included.
   */
  "included"?: Array<UpsertCatalogEntityResponseIncludedItem>;
  /**
   * Entity metadata.
   */
  "meta"?: EntityResponseMeta;

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
      type: "Array<EntityData>",
    },
    included: {
      baseName: "included",
      type: "Array<UpsertCatalogEntityResponseIncludedItem>",
    },
    meta: {
      baseName: "meta",
      type: "EntityResponseMeta",
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
    return UpsertCatalogEntityResponse.attributeTypeMap;
  }

  public constructor() {}
}
