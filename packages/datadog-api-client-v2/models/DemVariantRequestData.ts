/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DemVariantAttributes } from "./DemVariantAttributes";
import { DemVariantType } from "./DemVariantType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a DEM journey variant request.
 */
export class DemVariantRequestData {
  /**
   * Attributes of a DEM journey variant.
   */
  "attributes": DemVariantAttributes;
  /**
   * The type identifier for DEM journey variants.
   */
  "type": DemVariantType;

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
      type: "DemVariantAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DemVariantType",
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
    return DemVariantRequestData.attributeTypeMap;
  }

  public constructor() {}
}
