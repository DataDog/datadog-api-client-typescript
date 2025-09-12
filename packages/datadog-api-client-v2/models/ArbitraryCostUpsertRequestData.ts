/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ArbitraryCostUpsertRequestDataAttributes } from "./ArbitraryCostUpsertRequestDataAttributes";
import { ArbitraryCostUpsertRequestDataType } from "./ArbitraryCostUpsertRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `ArbitraryCostUpsertRequestData` object.
 */
export class ArbitraryCostUpsertRequestData {
  /**
   * The definition of `ArbitraryCostUpsertRequestDataAttributes` object.
   */
  "attributes"?: ArbitraryCostUpsertRequestDataAttributes;
  /**
   * The `ArbitraryCostUpsertRequestData` `id`.
   */
  "id"?: string;
  /**
   * Upsert arbitrary rule resource type.
   */
  "type": ArbitraryCostUpsertRequestDataType;

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
      type: "ArbitraryCostUpsertRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ArbitraryCostUpsertRequestDataType",
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
    return ArbitraryCostUpsertRequestData.attributeTypeMap;
  }

  public constructor() {}
}
