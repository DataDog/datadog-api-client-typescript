/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseBulkResourceType } from "./CaseBulkResourceType";
import { CaseBulkUpdateRequestAttributes } from "./CaseBulkUpdateRequestAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object wrapping the bulk update type and attributes.
 */
export class CaseBulkUpdateRequestData {
  /**
   * Attributes for the bulk update, specifying which cases to update and the action to apply.
   */
  "attributes": CaseBulkUpdateRequestAttributes;
  /**
   * JSON:API resource type for bulk case operations.
   */
  "type": CaseBulkResourceType;

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
      type: "CaseBulkUpdateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CaseBulkResourceType",
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
    return CaseBulkUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
